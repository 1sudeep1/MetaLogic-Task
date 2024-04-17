import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MetaLogic Software Pvt. Ltd.",
  description: "We provide a range of IT services & support. Our tailored solutions help businesses streamline operations and achieve their goals with reliable expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/metalogo.png" type="image/x-icon" sizes="16x16" />        
        <link rel="preload" href="/path-to-your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
