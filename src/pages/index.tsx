import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Alexa Reilly</title>
        <meta
          name="description"
          content="Medical Student at Kaiser Permanente"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-200">
        <h1 className="text-5xl font-bold text-zinc-900">Alexa Reilly</h1>
      </main>
    </>
  );
};

export default Home;
