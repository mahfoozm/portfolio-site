import { customSeo } from "../src/configs/data";
import {
  Layout,
  About,
  Hero,
  Projects,
  Contact,
  PageHead,
} from "../src/components";
interface IHomeProps {
  isHome: boolean;
}

const Home: React.FC<IHomeProps> = ({ isHome }) => {
  return (
    <>
      <PageHead seo={{ ...customSeo }} />
      <Layout isHome={isHome}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
