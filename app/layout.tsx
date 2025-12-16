import React from "react";
import "@/assets/styles/globals.css";
import { title } from "process";

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, prpert, real estate",
  description: "Find the perfect rental property",
};
const MainLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
