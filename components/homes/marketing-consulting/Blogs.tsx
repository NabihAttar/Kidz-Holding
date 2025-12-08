import Link from "next/link";
import Image from "next/image";
import React from "react";
import { absolute2Posts, small2Posts } from "@/data/blogs";

const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_BASE_URL ?? "http://46.62.246.5:1337";

type ApiBlog = {
  title?: string;
  Date?: string;
  authorName?: string;
  coverImage?: {
    url?: string;
  };
};

type BlogsProps = {
  apiBlogs?: any;
};

type AbsolutePost = (typeof absolute2Posts)[number] & {
  coverImage?: string;
};

type SmallPost = (typeof small2Posts)[number] & {
  coverImage?: string;
};

const formatDateParts = (input?: string) => {
  if (!input) {
    return undefined;
  }

  const date = new Date(input);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const formatted = date.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return { day, month, formatted };
};

const resolveCoverImageUrl = (url?: string) => {
  if (!url) {
    return undefined;
  }

  return url.startsWith("http") ? url : `${STRAPI_BASE_URL}${url}`;
};

const Blogs = ({ apiBlogs }: BlogsProps) => {
  if (apiBlogs) {
    console.log("Blogs component received apiBlogs:", apiBlogs);
  }

  const parsedBlogs = Array.isArray(apiBlogs) ? apiBlogs : [];

  const resolvedAbsolutePosts: AbsolutePost[] = absolute2Posts.map(
    (post, index) => {
      const blog = parsedBlogs[index];
      if (!blog) {
        return post;
      }

      const dateParts = formatDateParts(blog.Date);
      const coverImageUrl = resolveCoverImageUrl(blog.coverImage?.url);
      return {
        ...post,
        title: blog.title ?? post.title,
        date: dateParts
          ? { day: dateParts.day, month: dateParts.month }
          : post.date,
        position: blog.authorName ?? post.position,
        coverImage: coverImageUrl ?? post.imgSrc,
      };
    }
  );

  const resolvedSmallPosts: SmallPost[] = small2Posts.map((post, index) => {
    const blog = parsedBlogs[index];
    if (!blog) {
      return post;
    }

    const dateParts = formatDateParts(blog.Date);
    const coverImageUrl = resolveCoverImageUrl(blog.coverImage?.url);
    return {
      ...post,
      title: blog.title ?? post.title,
      date: (dateParts?.formatted ?? post.date) as string,
      label: blog.authorName ?? post.label,
      coverImage: coverImageUrl ?? post.imgSrc,
    };
  });

  return (
    <section className="section-new h-5 tf-spacing-2 section-one-page" id="new">
      <div className="tf-container position-relative">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <div className="text-anime-wave-1">
                <a href="#" className="tag label text-btn-uppercase">
                  READ OUR BLOG
                </a>
              </div>
              <h3 className="text-anime-wave-1 mb-12">
                Insights From the World of Edutainment
              </h3>
              <div className="sub-title body-2 text-anime-wave-1">
                 Explore articles, interviews, and updates from the Kidz Holding
                community—where innovation in learning and play comes to life.
              </div>
            </div>
            <div className="row rg-30">
              {resolvedAbsolutePosts.map((post, i) => {
                const imageSrc = post.coverImage ?? post.imgSrc;

                return (
                  <div className="col-lg-6" key={i}>
                    <div className="tf-post-grid style-absolute style-2 hover-img">
                      <Link
                        href={`/blog-details-1/${post.id}`}
                        className=" image d-block "
                      >
                        <Image
                          src={imageSrc}
                          alt={post.title}
                          className="lazyload"
                          width={post.imgWidth}
                          height={post.imgHeight}
                        />
                      </Link>

                      <div className="tf-post-grid-content">
                        <div className="left">
                          <a href="#" className="date">
                            <span className="day">{post.date.day}</span>
                            <span>{post.date.month}</span>
                          </a>
                        </div>
                        <div className="content right">
                          <h4 className="title-post">
                            <Link href={`/blog-details-1/${post.id}`}>
                              {post.title}
                            </Link>
                          </h4>
                          <div className="position caption-1">
                            {post.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="col-lg-6">
                {resolvedSmallPosts.map((post, i) => {
                  const imageSrc = post.coverImage ?? post.imgSrc;

                  return (
                    <div
                      className="tf-post-list style-small small-2 hover-img"
                      key={i}
                    >
                      <div className="image">
                        <Link
                          href={`/blog-details-1/${post.id}`}
                          className="link"
                        />
                        <Image
                          src={imageSrc}
                          alt={
                            typeof post.title === "string"
                              ? post.title
                              : "Post image"
                          }
                          className="lazyload"
                          width={160}
                          height={120}
                          style={{
                            width: "160px",
                            height: "120px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="post-content">
                        <div className="top">
                          <span className="post-date caption-1">
                            {post.date}
                          </span>
                          <span className="label text-btn-uppercase color-primary">
                            {post.label}
                          </span>
                        </div>
                        <h5>
                          <Link
                            href={`/blog-details-1/${post.id}`}
                            className="name-post"
                          >
                            {post.title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
