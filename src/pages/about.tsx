import * as React from "react";
import { Layout, Seo } from "../components/common";

const AboutPage = () => {
  const siteTitle = `Jon Blog Starter`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <p className="text-xl mt-4">You can edit your about page and components.</p>
      </div>
    </Layout>
  );
};

export default AboutPage;
