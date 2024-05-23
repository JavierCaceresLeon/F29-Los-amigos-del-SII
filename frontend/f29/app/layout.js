import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F29",
  description: "F29 LA MEJOR APP PARA CONTADORES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        {children}
      </body>
    </html>
  );
}
