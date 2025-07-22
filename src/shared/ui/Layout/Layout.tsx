import type { JSX } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
