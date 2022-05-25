import { Header } from "../../parts/Header";
import { Footer } from "../../parts/Footer";
import { HomeMain } from "../../views/HomeMain";

export const Home: React.FC = () => {
  return (
    <>
      <div className="content">
        <Header />
        <HomeMain />
      </div>
      <Footer />
    </>
  );
};
