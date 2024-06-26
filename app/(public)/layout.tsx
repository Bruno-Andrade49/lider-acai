import { Montserrat } from "next/font/google";
import { Rodape } from "../components/rodape/rodape";
const montserrat = Montserrat({ subsets: ["latin"] });
import "../globals.css";
import AuthProvider from "../providers/auth";
import NavbarAdm from "./components/navbar/navbarAdm";

export const metadata = {
  title: "ADM PAGE",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className}`}
      >
        <AuthProvider>
          <NavbarAdm />
          {children}
          <Rodape />
        </AuthProvider>
      </body>
    </html>
  );
}
