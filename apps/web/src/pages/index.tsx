import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Quoday Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<main className="flex flex-col items-center justify-center flex-1 lg:px-10 text-center">
				<h1 className="lg:text-6xl font-bold">
					Welcome to <a href="http://localhost:3000">Quoday!</a>
        </h1>
      </main>
    </div>
  );
}
