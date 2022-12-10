import { useMemo, useState } from "react";

import { type NextPage } from "next";
import Head from "next/head";
import { getOptionsForVote } from "@/utils/getRandomPokemon";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const [ids, setIds] = useState(getOptionsForVote());

  const [first, second] = ids;

  // const { isLoading, data } = trpc.example.hello.useQuery({
  //   text: "from tRPC",
  // });

  // yes we know this should be called in getStaticProps but this is just an example
  // we're at the 45 minute mark of the video
  const firstPokemon = trpc.pokemon.getPokemonByID.useQuery({
    id: first as number,
  });
  const secondPokemon = trpc.pokemon.getPokemonByID.useQuery({
    id: second as number,
  });

  return firstPokemon.isLoading || secondPokemon.isLoading ? (
    <div>...loading</div>
  ) : (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-slate-500">
        <h1 className="m-12 text-center text-2xl text-pink-50">
          Which Pokemon is Rounder?
        </h1>
        <div className="p-8" />
        <div className="flex max-w-2xl items-center justify-between rounded border  p-8 text-white">
          <div className="flex h-80 w-80 flex-col items-center  bg-red-800">
            <img
              src={firstPokemon.data?.sprites.front_default as string}
              className="w-full"
            />
            <div className="text-white">{firstPokemon.data?.pokemon.name}</div>
          </div>
          <div className="p-8">VS</div>
          <div className="flex h-80 w-80 flex-col items-center bg-red-800 ">
            <img
              src={secondPokemon.data?.sprites.front_default as string}
              className="w-full"
            />
            <div className="text-white">{secondPokemon.data?.pokemon.name}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
