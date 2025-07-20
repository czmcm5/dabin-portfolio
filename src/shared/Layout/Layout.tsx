import type { JSX } from "react";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
