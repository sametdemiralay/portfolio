import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from './components/sidebar';
import {personalData} from '../data/page-data'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='flex flex-col sm:flex-row'>
        <Sidebar data={personalData} />
        <main className='grow-full p-16 w-full sm:basis-2/3 ml-auto'>
        {children}
        </main>
      </body>
    </html>
  );
}
