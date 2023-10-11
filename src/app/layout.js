import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legare.to",
  description: "Site Web personnel de Tommy Légaré",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full bg-gray-100">
      <body className="{inter.className}, h-full">{children}</body>
    </html>
  );
}
