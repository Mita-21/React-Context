import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";


const MyPageContext = () => {
 

  return (
    <div className="my-page">
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <HeaderContext />
          <MainContext />
          <FooterContext />
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
    </div>
  );
};

export default MyPageContext;
