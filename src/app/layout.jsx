import './globals.css';
import 'animate.css';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'BookNest Library',
  description: 'A modern digital library built with Next.js, BetterAuth and MongoDB.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
