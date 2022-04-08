import Header from "./Header";
import Footer from "./Footer";



interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header/>
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
