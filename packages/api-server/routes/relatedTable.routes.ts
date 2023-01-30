import { z } from "zod";
import db from "../db/db.pool";
import {
  createRelatedTableRow,
  deleteRelatedTableRow,
  getRelatedTableRow,
  getRelatedTableRows,
  updateRelatedTableRow,
} from "../dbQueries/related.queries";
import { initializedTRPC, publicProcedure } from "../helpers/helpers";
import {
  relatedRowOutput,
  relatedRowsOutput,
} from "../config/output/related.output";

export const relatedTableRoutes = initializedTRPC.router({
  create: publicProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/view/element",
        tags: ["related"],
        summary: "Create element",
      },
    })
    .input(
      z.object({
        title: z.string(),
        salary: z.string(),
      })
    )
    .output(relatedRowOutput)
    .query(async ({ input }) => {
      const { title, salary } = input;
      const createdElement = await db.query(
        createRelatedTableRow({ title, salary })
      );
      return createdElement.rows[0];
    }),
  update: publicProcedure
    .meta({
      openapi: {
        method: "PUT",
        path: "/view/element",
        tags: ["related"],
        summary: "Update element",
      },
    })
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        salary: z.string(),
      })
    )
    .output(relatedRowOutput)
    .query(async ({ input }) => {
      const { id, title, salary } = input;
      const candidate = await db.query(
        updateRelatedTableRow({ id, title, salary })
      );
      return candidate.rows[0];
    }),
  delete: publicProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/view/element",
        tags: ["related"],
        summary: "Delete element",
      },
    })
    .input(
      z.object({
        id: z.string(),
      })
    )
    .output(relatedRowOutput)
    .query(async ({ input }) => {
      const { id } = input;
      const candidate = await db.query(deleteRelatedTableRow(id));
      return candidate.rows[0];
    }),
  getAll: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/view/elements",
        tags: ["related"],
        summary: "Get all elements from view table",
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
    .output(relatedRowsOutput)
    .query(async ({ input }) => {
      const elements = await db.query(
        getRelatedTableRows(input?.offset, input?.limit)
      );
      return elements.rows;
    }),
  getOne: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/view/element",
        tags: ["related"],
        summary: "Get element",
      },
    })
    .input(
      z.object({
        id: z.string(),
      })
    )
    .output(relatedRowOutput)
    .query(async ({ input }) => {
      const { id } = input;
      const candidate = await db.query(getRelatedTableRow(id));
      return candidate.rows[0];
    }),
});
