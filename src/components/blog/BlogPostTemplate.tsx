import * as React from "react";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { PageProps } from "@/definitions";
import { Layout, Seo } from "../common";

const BlogPostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const post = data.markdownRemark || data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;
  const image = post.frontmatter.image ? getImage(post.frontmatter.image) : undefined;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
      />
      <article className="flex flex-col w-full" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 className="font-black text-skin-fg text-4xl md:text-6xl" itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <div className="flex justify-between">
            <p className="text-skin-fg text-xl pb-12">{post.frontmatter.date}</p>
            <p className="text-skin-fg text-xl pb-12 hover:underline">
              <Link to="/">{"← back"}</Link>
            </p>
          </div>
        </header>
        <main className="flex w-full max-w-screen-lg">
          {post.html ? (
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="prose prose-slate lg:prose-lg w-full max-w-screen-lg"
            />
          ) : (
            <>Ops...Not found, try again later.</>
          )}
        </main>
      </article>
      <nav className="mt-8 grid grid-cols-blog">
        <ul className="col-start-2 text-lg flex flex-wrap justify-between">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      body
      rawMarkdownBody
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            gatsbyImageData(width: 1200, layout: CONSTRAINED)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
