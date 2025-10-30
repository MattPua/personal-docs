import '@/app/global.css';
import { RootProviders } from '@/app/root-providers';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={nunito.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
