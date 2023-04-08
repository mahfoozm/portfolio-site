import dynamic from 'next/dynamic';
import { customSeo } from '../src/configs/data';
import {
  Layout,
  About,
  Hero,
  Projects,
  Contact,
  PageHead
} from '../src/components';

interface IHomeProps {
  isHome: boolean;
}
// @ts-ignore
const StarfieldAnimation = dynamic(() => import('react-starfield-animation'), {
  ssr: false
});

const Home: React.FC<IHomeProps> = ({ isHome }) => {
  return (
    <>
      <StarfieldAnimation
        // @ts-ignore
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />
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
