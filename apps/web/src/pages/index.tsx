import { HeartIcon, ShareIcon, ClipboardIcon } from "@/components/Icons";
import { GetQuotesQuery } from "@/lib/graphql/quotes";
import Head from "next/head";
import useSWR from "swr";

export default function Home() {
  const { data } = useSWR([GetQuotesQuery, { random: true }], {
    revalidateOnFocus: false,
  });
  return (
    <div className="content-wrapper min-h-screen mt-24">
      <Head>
        <title>Quoday Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="grid gap-8 lg:grid-cols-2">
          {data?.quotes.map((quote) => (
            <div key={quote.id} className="quote-card">
              <div className="quote-card__content">
                <h3>{quote.author.name}</h3>
                <p>{quote.translations.find((t) => t.language == "en").text}</p>
              </div>

              <div className="quote-card__actions">
                <div>
                  <ClipboardIcon />
                </div>

                <div>
                  <HeartIcon />
                </div>

                <div>
                  <ShareIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
