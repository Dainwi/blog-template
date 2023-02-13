import styles from "@/styles/Home.module.css";
import { popularPosts } from "data/PopularPosts";
import { recentPosts } from "data/RecentPosts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <h1 className={styles.h1}>This Is Your Blog Headline</h1>
            </div>
            <div className={styles.subheading}>
              <p className={styles.p}>
                A short description introducing visitors to the
              </p>
              <p className={styles.p}>
                topic of your blog and what to expect in it.
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

          {/* ----------------------------- RECENT POSTS -----------------------------*/}

          <div className={styles.popular_posts}>
            <h1>Recent Posts</h1>
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
