import { Elysia, t } from "elysia";

// import Elysia from "elysia";

const rooms = new Elysia({ prefix: "/rooms" })
  .post("/create", () => {
    console.log("Create new room");
  })
  .get("/all", () => {
    console.log("log GET /rooms/all called");
    return {};
  });

const app = new Elysia({ prefix: "/api" }).use(rooms);

export const GET = app.fetch;
export const POST = app.fetch;
export const DELETE = app.fetch;

export type App = typeof app;

// export type App = typeof app;
