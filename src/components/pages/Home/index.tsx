import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";
import { Main } from "../../views//Main";

export const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
