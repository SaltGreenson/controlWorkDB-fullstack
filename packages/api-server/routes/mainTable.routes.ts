import { z } from "zod";
import { createMainInput, updateMainInput } from "../config/input/main.input";
import db from "../db/db.pool";
import {
  createMainTableRow,
  deleteMainTableRow,
  getAvgPopulation,
  getBetween,
  getCountLessAvg,
  getMainTableRows,
  getMax,
  getMaxSquare,
  getMin,
  getRegionsLessAvg,
  searchDataQuery,
  searchSalaryQuery,
  updateMainTableRow,
} from "../dbQueries/main.queries";
import { initializedTRPC, publicProcedure } from "../helpers/helpers";
import { mainRowOutput, mainRowsOutput } from "../config/output/main.output";

export const mainTableRoutes = initializedTRPC.router({
  create: publicProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/main/element",
        tags: ["main"],
        summary: "Create element",
      },
    })
    .input(createMainInput)
    .output(mainRowOutput)
    .query(async ({ input }) => {
      const { region, capital, square, population } = input;
      const createdElement = await db.query(
        createMainTableRow({
          region,
          square,
          capital,
          population,
        })
      );
      return createdElement.rows[0];
    }),
  getAll: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/elements",
        tags: ["main"],
        summary: "Get all elements from main table and view table",
      },
    })
    .input(
      z
        .object({
          offset: z.string().optional(),
          limit: z.string().optional(),
        })
        .optional()
    )
    .output(mainRowsOutput)
    .query(async ({ input }) => {
      const elements = await db.query(
        getMainTableRows(input?.offset, input?.limit)
      );
      return elements.rows;
    }),
  update: publicProcedure
    .meta({
      openapi: {
        method: "PUT",
        path: "/main/element",
        tags: ["main"],
        summary: "Update element",
      },
    })
    .input(updateMainInput)
    .output(mainRowOutput)
    .query(async ({ input }) => {
      const { id, region, capital, square, population } = input;
      const candidate = await db.query(
        updateMainTableRow({
          id,
          region,
          square,
          capital,
          population,
        })
      );
      return candidate.rows[0];
    }),
  delete: publicProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/main/element",
        tags: ["main"],
        summary: "Delete element",
      },
    })
    .input(
      z.object({
        id: z.string(),
      })
    )
    .output(mainRowOutput)
    .query(async ({ input }) => {
      const { id } = input;
      const candidate = await db.query(deleteMainTableRow(id));
      return candidate.rows[0];
    }),
  getMin: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/min-element",
        tags: ["main"],
        summary: "Get min element",
      },
    })
    .input(z.object({}).optional())
    .output(mainRowOutput)
    .query(async () => {
      const candidate = await db.query(getMin());
      return candidate.rows[0];
    }),
  getMax: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/max-element",
        tags: ["main"],
        summary: "Get max element",
      },
    })
    .input(z.object({}).optional())
    .output(mainRowOutput)
    .query(async () => {
      const candidate = await db.query(getMax());
      return candidate.rows[0];
    }),
  getBetween: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/between-element",
        tags: ["main"],
        summary: "Get element between from and to",
      },
    })
    .input(
      z.object({
        from: z.string(),
        to: z.string(),
      })
    )
    .output(mainRowsOutput)
    .query(async ({ input }) => {
      const { from, to } = input;
      const candidate = await db.query(getBetween(from, to));
      return candidate.rows;
    }),
  search: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/elements/search",
        tags: ["main"],
        summary: "Search person with job",
      },
    })
    .input(
      z.object({
        params: z.string(),
      })
    )
    .output(mainRowsOutput)
    .query(async ({ input }) => {
      const { params } = input;
      let elements;
      if (+params) {
        elements = await db.query(searchSalaryQuery(params));
      } else {
        elements = await db.query(searchDataQuery(params));
      }
      return elements.rows;
    }),
  getCountLessAvg: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/avg-count",
        tags: ["main"],
        summary: "Get element between from and to",
      },
    })
    .input(z.object({}).optional())
    .output(
      z.object({
        count: z.string(),
      })
    )
    .query(async () => {
      const candidate = await db.query(getCountLessAvg());
      return candidate.rows[0];
    }),
  getRegionsLessAvg: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/avg-elements",
        tags: ["main"],
        summary: "Get element between from and to",
      },
    })
    .input(z.object({}).optional())
    .output(mainRowsOutput)
    .query(async () => {
      const candidate = await db.query(getRegionsLessAvg());
      return candidate.rows;
    }),
  getMaxSquare: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/max-square",
        tags: ["main"],
        summary: "Get element between from and to",
      },
    })
    .input(z.object({}).optional())
    .output(mainRowOutput)
    .query(async () => {
      const candidate = await db.query(getMaxSquare());
      return candidate.rows[0];
    }),
  getAvdPopulation: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/avg-population",
        tags: ["main"],
        summary: "Get element between from and to",
      },
    })
    .input(z.object({}).optional())
    .output(
      z.object({
        avg: z.string(),
      })
    )
    .query(async () => {
      const candidate = await db.query(getAvgPopulation());
      return candidate.rows[0];
    }),
});
