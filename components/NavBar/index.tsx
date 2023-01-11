import * as React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const links: { name: string; path: string }[] = [
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
  {
    name: "Your cart",
    path: "/yourcart",
  },
  {
    name: "Help",
    path: "/help",
  },
];

const NavBar = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>
            <Link href="#">ShopItOwnIt</Link>
          </code>
        </p>
        <div>
          <ul className={styles.ul}>
            {links.map((link) => (
              <li>
                += <Link href={link.path}>{link.name}</Link> =+
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
