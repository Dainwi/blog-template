import React, { useState } from "react";
import Link from "next/link";
// import { IoSearch } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "@/styles/Nav.module.css";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpne] = useState(false);

  function handelOnChange() {
    return setIsOpne(!isOpen);
  }

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/wierframe_logo.svg" height={36} width={87} alt="logo" />
      </Link>
      <ul className={`${isOpen ? styles.ul_open : styles.ul}`}>
        <li className={styles.li}>
          <FiX className={styles.closeIcon} onClick={handelOnChange} />
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/blog">
            Blog
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
          {/* <IoSearch className={styles.searchIcon} /> */}
        </li>
      </ul>
      <div>
        <FiMenu className={styles.menuIcon} onClick={handelOnChange} />
      </div>
    </nav>
  );
}
