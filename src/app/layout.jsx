'use client';

import { ethers } from 'ethers';
import Providers from './components/Providers';
import { Statusbar } from './components/Statusbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { createContext, useState } from 'react';
import Web3 from 'web3';

export const AppContext = createContext();

const inter = Inter({ subsets: ['latin'] });
const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_PROVIER);

export default function RootLayout({ children }) {
  const [account, setAccount] = useState();

  return (
    <html lang="en">
      <body className={`iphone-container mx-auto  ${inter.className}`}>
        <AppContext.Provider value={{ account, setAccount, web3 }}>
          <Statusbar />
          <Providers>{children}</Providers>
        </AppContext.Provider>
      </body>
    </html>
  );
}
