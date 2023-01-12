import type { PropsWithChildren } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
