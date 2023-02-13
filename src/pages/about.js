import React from "react";
import Link from "next/link";
import Image from "next/image";
import { popularPosts } from "data/PopularPosts";
import styles from "@/styles/Home.module.css";
import style from "@/styles/About.module.css";

export default function about() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={style.about_content}>
            <div className={style.about_description}>
              <h1 className={style.about_title}>About Me</h1>
              <p className={style.about_p}>
                Use this section to describe yourself and the topic of your
                blog. You could share your story, why you started the blog, and
                the value your visitor will gain from it. The goal is to get the
                visitor to stick around!
              </p>
            </div>
            <div className={style.about_image}>
              <Image
                className={style.about_image}
                src="/recent.jpg"
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
          {/* ----------------------------- POPULAR POSTS -----------------------------*/}

          <div className={styles.popular_posts}>
            <h1>Popular Posts</h1>
            <div className={styles.popular_posts_container}>
              {popularPosts.map((post, index) => (
                <div className={styles.popular_posts_content} key={index}>
                  <Link href="/">
                    <Image
                      className={styles.image}
                      src={post.image}
                      width={300}
                      height={300}
                      alt=""
                    />
                    <h3>{post.title}</h3>
                    <p>{post.subtitle}</p>
                    <span className={styles.link}>Read more</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
