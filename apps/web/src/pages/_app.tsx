import "@/styles/globals.css";

import Provider from "@/providers";
import RootLayout from "@/layouts/Root";
import WithNavigationFooter from "@/layouts/WithNavigationFooter";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getDefaultLayout(page: ReactElement): ReactNode {
  return <WithNavigationFooter>{page}</WithNavigationFooter>;
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? getDefaultLayout;

  return (
    <Provider>
      <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
    </Provider>
  );
}
