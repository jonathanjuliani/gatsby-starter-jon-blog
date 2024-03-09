import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "@/definitions";
import { Layout, Seo } from "../components/common";
import { BlogContainer } from "../components/blog";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Jon Blog Starter`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={siteTitle} />
      <BlogContainer posts={posts} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          tags
          description
          image {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 1200, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
