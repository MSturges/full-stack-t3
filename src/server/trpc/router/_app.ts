import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { pokemonRouter } from "./pokemon";

// created our api router here which will maps our routes?
export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  pokemon: pokemonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
