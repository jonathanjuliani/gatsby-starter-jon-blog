import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Seo } from "../components/common";

const NotFoundPage = ({ data, location }: PageProps) => {
  const siteTitle = data.site.siteMetadata?.title || `Jon Blog Starter`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="my-8"
          width="300"
          height="200"
          viewBox="0 0 600 400"
        >
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="central"
            font-size="75"
            font-family="Arial"
            fill="gray"
          >
            404
          </text>
          <text
            x="50%"
            y="60%"
            text-anchor="middle"
            dominant-baseline="central"
            font-size="40"
            font-family="Arial"
            fill="#4A5568"
          >
            Not Found
          </text>
        </svg>
        <p className="text-xl mt-4">Ops...nothing over here</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
