import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './(view)/Navbar';
import { Footer } from './(view)/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'KLARA',
  description: 'Keloa Ruang Ajar untuk manajemen operasional bimbel dan lembaga kursus.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
