import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "@/redux/provider";

import { AppSidebar } from '@/components/app/AppSidebar/AppSidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Supplementify',
  description: 'Generated by create next app',
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
          <AppSidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}