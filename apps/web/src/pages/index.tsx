import { GetQuotesQuery } from "@/lib/graphql/quotes";
import Head from "next/head";
import useSWR from "swr";

export default function Home() {
  const { data } = useSWR(GetQuotesQuery);
  return (
    <div className="content-wrapper min-h-screen mt-24">
      <Head>
        <title>Quoday Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="space-y-8">
          {data?.quotes.map((quote) => (
            <div key={quote.id} className="quote-card">
              <h3>{quote.author.name}</h3>
              <p>{quote.translations.find((t) => t.language == "en").text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
