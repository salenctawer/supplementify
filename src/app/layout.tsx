import { Metadata } from 'next'
import { Providers } from "@/redux/provider";

import AppSidebar from '@/components/app/AppSidebar/AppSidebar';
import AppHeader from '@/components/app/AppHeader/AppHeader';
import AppFooter from '@/components/app/AppFooter/AppFooter';

import ThemeBuilder from '@/styles/themeBuilder';

import './globals.scss'

export const metadata: Metadata = {
  title: 'Supplementify',
  description: 'View your complete personal Spotify stats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeBuilder>
            <AppHeader />
            <AppSidebar />
            {children}
            <AppFooter />
          </ThemeBuilder>
        </Providers>
      </body>
    </html>
  );
}