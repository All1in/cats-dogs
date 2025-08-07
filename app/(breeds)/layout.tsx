import React from "react";
import { Header } from "@/shared/components/Header";

export default function CatsDogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-200">
      <Header search={false} />
      {children}
    </main>
  );
}
