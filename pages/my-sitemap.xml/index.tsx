import { GetServerSideProps } from 'next';
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields: ISitemapField[] = [
    {
      loc: `https://mahfooz.tech/`,
      lastmod: new Date().toISOString()
    }
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
