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
      <PageHead seo={{ ...customSeo }} />
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <StarfieldAnimation
          // @ts-ignore
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          numParticles={600}
          lineWidth={2.0}
          depth={500}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%'
          }}
        >
          <Layout isHome={isHome}>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </Layout>
        </div>
      </div>
    </>
  );
};

export default Home;
