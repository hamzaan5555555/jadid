import { Inter } from 'next/font/google';
import "./globals.css";
import { SiWhatsapp } from "react-icons/si";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARGANA',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      {children}

      {/* Icône WhatsApp */}
      <a
          href="https://wa.me/123456789" // Remplacez par votre numéro WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 text-green-500 hover:text-green-600"
      >
        <SiWhatsapp size={40} />
      </a>
      </body>
      </html>
  )
}