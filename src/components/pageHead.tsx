/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import { CustomSeoProps } from "../configs/types";

interface PageHeadProps {
  seo?: CustomSeoProps;
}

const PageHead: React.FC<PageHeadProps> = ({ seo }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="description" content={seo?.description} />
      <meta name="image" content={seo?.image} />

      <meta property="og:title" content={seo?.title} />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:image" content={seo?.image} />
      <meta property="og:url" content={seo?.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo?.twitterUsername} />
      <meta name="twitter:title" content={seo?.title} />
      <meta name="twitter:description" content={seo?.description} />
      <meta name="twitter:image" content={seo?.image} />
      <title>{seo?.title}</title>
    </Head>
  );
};

export default PageHead;
