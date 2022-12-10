import { z } from "zod";

import { PokemonClient } from "pokenode-ts";

import { router, publicProcedure } from "../trpc";

export const pokemonRouter = router({
  getPokemonByID: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      const api = new PokemonClient();
      const pokemon = await api.getPokemonFormById(input.id);

      return pokemon;
    }),
});
