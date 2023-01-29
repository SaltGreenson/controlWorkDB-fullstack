import { z } from "zod";
import db from "../db/db.pool";
import {
  createMainTableRow,
  deleteMainTableRow,
  getBetween,
  getMainTableRow,
  getMainTableRows,
  getMax,
  getMin,
  searchQuery,
  updateMainTableRow,
} from "../dbQueries/main.queries";
import { initializedTRPC, publicProcedure } from "../helpers/helpers";
import {
  mainRowOutput,
  mainWithRelatableRowOutput,
  mainWithRelatableRowsOutput,
} from "../output/main.output";

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
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        gender: z.string(),
        jobId: z.string().optional(),
      })
    )
    .output(mainRowOutput)
    .query(async ({ input }) => {
      const { firstName, lastName, email, gender, jobId } = input;
      const createdElement = await db.query(
        createMainTableRow({
          firstName,
          lastName,
          email,
          gender,
          jobId,
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
        summary: "Get all elements from main table and related table",
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
    .output(mainWithRelatableRowsOutput)
    .query(async ({ input }) => {
      const elements = await db.query(
        getMainTableRows(input?.offset, input?.limit)
      );
      return elements.rows;
    }),
  getOne: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/main/element",
        tags: ["main"],
        summary: "Get element",
      },
    })
    .input(
      z.object({
        id: z.string(),
      })
    )
    .output(mainWithRelatableRowOutput)
    .query(async ({ input }) => {
      const { id } = input;
      const candidate = await db.query(getMainTableRow(id));
      return candidate.rows[0];
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
    .input(
      z.object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        gender: z.string(),
        jobId: z.string().optional(),
      })
    )
    .output(mainRowOutput)
    .query(async ({ input }) => {
      const { id, firstName, lastName, email, gender, jobId } = input;
      const candidate = await db.query(
        updateMainTableRow({
          id,
          firstName,
          lastName,
          email,
          gender,
          jobId,
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
    .output(mainWithRelatableRowOutput)
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
    .output(mainWithRelatableRowOutput)
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
    .output(mainWithRelatableRowsOutput)
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
    .output(mainWithRelatableRowsOutput)
    .query(async ({ input }) => {
      const { params } = input;
      const elements = await db.query(searchQuery(params));
      return elements.rows;
    }),
});
