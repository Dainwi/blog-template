import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { popularPosts } from "data/PopularPosts";
import { recentPosts } from "data/RecentPosts";

export default function blog() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h1 className={styles.h1}>Blog Name</h1>
            </div>
            <div className={styles.subheading}>
              <p className={styles.p}>
                A short description introducing your blog so visitors know
              </p>
              <p className={styles.p}>
                what type of posts they will find here.
              </p>
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

          {/* ----------------------------- ALL POSTS -----------------------------*/}

          <div className={styles.popular_posts}>
            <h1>All Posts</h1>
            <div className={styles.recent_posts_container}>
              {recentPosts.map((post, index) => (
                <div className={styles.popular_posts_content} key={index}>
                  <Link href="/">
                    <Image
                      className={styles.image}
                      src={post.Image}
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
