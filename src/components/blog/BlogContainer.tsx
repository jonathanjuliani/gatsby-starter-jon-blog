import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { INode } from "@/definitions";

interface BlogContainerProps {
  posts: INode[];
}

interface ListItemProps {
  post: INode;
  index: number;
  image?: IGatsbyImageData;
}

const SmallDevices: React.FC<ListItemProps> = ({ post, index, image }) => (
  <li key={`${post.fields.slug}-${index}`} className={`xs:flex md:hidden items-center py-8`}>
    {image && (
      <Link to={post.fields.slug}>
        <GatsbyImage
          image={image}
          alt={`image that refers to ${post.frontmatter.title}`}
          className="mb-8 max-h-[240px] w-full"
        />
      </Link>
    )}
    <article itemScope itemType="http://schema.org/Article">
      <header>
        <small className="font-yrsa text-skin-fg-muted text-lg">{post.frontmatter.date}</small>
        <h2 className="text-2xl font-exo font-black text-skin-fg mt-3">
          <Link
            to={post.fields.slug}
            itemProp="url"
            className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
          >
            <span itemProp="headline">{post.frontmatter.title}</span>
          </Link>
        </h2>
      </header>
      <p
        dangerouslySetInnerHTML={{
          __html: post.excerpt || post.frontmatter.description,
        }}
        itemProp="description"
        className="text-justify text-lg mt-3"
      />
      <section className="font-bold uppercase md:text-sm space-x-2 mt-3">
        {(post.frontmatter.tags || "")
          .split(",")
          .map((s: string) => s.trim())
          .map((s: string) => (
            <span key={s}>{`#${s}`}</span>
          ))}
      </section>
    </article>
  </li>
);

const BiggerDevices: React.FC<ListItemProps> = ({ post, index, image }) => (
  <li key={`${post.fields.slug}-${index}`} className={`hidden md:flex items-center py-8`}>
    {image && (
      <Link to={post.fields.slug} className="mr-8 max-h-[250px] w-full">
        <GatsbyImage
          image={image}
          alt={`image that refers to ${post.frontmatter.title}`}
          className="mr-8 max-h-[250px] w-full"
        />
      </Link>
    )}
    <article itemScope itemType="http://schema.org/Article">
      <header>
        <small className="font-yrsa text-skin-fg-muted text-lg">{post.frontmatter.date}</small>
        <h2 className="text-2xl font-exo font-black text-skin-fg mt-3">
          <Link
            to={post.fields.slug}
            itemProp="url"
            className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
          >
            <span itemProp="headline">{post.frontmatter.title}</span>
          </Link>
        </h2>
      </header>
      <p
        dangerouslySetInnerHTML={{
          __html: post.excerpt || post.frontmatter.description,
        }}
        itemProp="description"
        className="text-justify text-lg mt-3"
      />
      <section className="font-bold uppercase md:text-sm space-x-2 mt-3">
        {(post.frontmatter.tags || "")
          .split(",")
          .map((s: string) => s.trim())
          .map((s: string) => (
            <span key={s}>{`#${s}`}</span>
          ))}
      </section>
    </article>
  </li>
);

const BlogContainer: React.FC<BlogContainerProps> = ({ posts }) => {
  return (
    <ol className="mt-8 divide-y divide-skin-fg-muted">
      <h2 className="text-2xl font-black text-skin-fg mt-3 pb-12 text-right">Latest</h2>
      {posts.map((post, index: number) => {
        const image = post.frontmatter.image ? getImage(post.frontmatter.image) : undefined;

        return (
          <>
            {/* Test showing on mobile devices 
                I left this two options here for you 
                so you can choose/refator/test how to style on different devices */}
            <SmallDevices key={post.fields.slug} post={post} index={index} image={image} />
            {/* shows on bigger devices */}
            <BiggerDevices key={post.fields.slug} post={post} index={index} image={image} />
          </>
        );
      })}
    </ol>
  );
};

export default BlogContainer;
