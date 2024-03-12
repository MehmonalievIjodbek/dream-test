import "./globals.css";
import "../styles/fonts.css";
import "../styles/style.scss";
import "../styles/style-mobile.scss";
import Footer from "./[locale]/components/layout/footer/footer";
import BackToTop from "./[locale]/components/BackToTop";
import Header from "./[locale]/components/layout/header/header";
import Providers from "@/utils/provider";
interface RootLayoutType {
  children: React.ReactNode;
  params: any;
}

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
  const currentLocale = "ru";

  return (
    <html lang={currentLocale}>
      <body>
        <Providers>
          <BackToTop />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
