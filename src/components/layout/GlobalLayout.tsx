import { ReactNode } from "react";
import Head from "next/head";
import Sidebar from "./navigation/Sidebar";
import Navbar from "./navigation/Navbar";


interface GlobalLayoutProps {
  children: ReactNode;
  title: string;
}

const GlobalLayout = ({ children, title }: GlobalLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pl-64">
          {children}
        </main>
      </div>
      {/* < /> */}
    </div>
  );
};

export default GlobalLayout;