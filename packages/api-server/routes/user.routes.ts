import { z } from "zod";
import pool from "../db/db.pool";
import {
  deleteUser,
  getUser,
  getUsers,
  insertUser,
  updateUser,
} from "../db/queries";
import { initializedTRPC, publicProcedure } from "../helpers/helpers";
import { oneUserOutput, usersOutput } from "../output/user.output";

export const userRoutes = initializedTRPC.router({
  users: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/users",
        tags: ["user"],
        summary: "Get users",
      },
    })
    .input(
      z
        .object({
          from: z.number().optional(),
          to: z.number().optional(),
        })
        .optional()
    )
    .output(usersOutput)
    .query(async () => {
      const users = await pool.query(getUsers());
      return users.rows;
    }),
  create: publicProcedure
    .meta({
      openapi: {
        method: "POST",
        path: "/user",
        tags: ["user"],
        summary: "Create users",
      },
    })
    .input(
      z.object({
        name: z.string(),
        surname: z.string(),
      })
    )
    .output(oneUserOutput)
    .query(async ({ input }) => {
      const { name, surname } = input;
      const newPerson = await pool.query(insertUser(name, surname));
      return newPerson.rows[0];
    }),
  getOne: publicProcedure
    .meta({
      openapi: {
        method: "GET",
        path: "/user",
        tags: ["user"],
        summary: "Get user",
      },
    })
    .input(
      z.object({
        id: z.string(),
      })
    )
    .output(oneUserOutput)
    .query(async ({ input }) => {
      const { id } = input;
      const candidate = await pool.query(getUser(id));
      return candidate.rows[0];
    }),
  updateOne: publicProcedure
    .meta({
      openapi: {
        method: "PUT",
        path: "/user",
        tags: ["user"],
        summary: "Update user",
      },
    })
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        surname: z.string().optional(),
      })
    )
    .output(oneUserOutput)
    .query(async ({ input }) => {
      const { id, name, surname } = input;
      const candidate = await pool.query(updateUser(id, name, surname));
      return candidate.rows[0];
    }),
  delete: publicProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/user",
        tags: ["user"],
        summary: "Delete user",
      },
    })
    .input(
      z.object({
        id: z.string(),
      })
    )
    .output(oneUserOutput)
    .query(async ({ input }) => {
      const { id } = input;
      const candidate = await pool.query(deleteUser(id));
      return candidate.rows[0];
    }),
});
