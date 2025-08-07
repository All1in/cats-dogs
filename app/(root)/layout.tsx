import React from "react";
import { Header } from "@/shared/components/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="bg-blue-100 min-h-screen">
        <Header />
        {children}
      </main>
  );
}
