import Link from "next/link";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Main from "../pages/component/main";
import About from "../pages/component/about";
import Contact from "../pages/component/contactus";
import PostPage from "../pages/component/postPage";
import Blog from "../pages/component/blog";

export default function Home() {
  return (
    <div>
      <ul className="flex bg-red-200">
        <li className="p-3">
          <Link href="component/main">
            <a>Home</a>
          </Link>
        </li>
        <li className="p-3">
          <Link href="component/about">
            <a>About Us</a>
          </Link>
        </li>
        <li className="p-3">
          <Link href="component/blog">
            <a>Blog Post</a>
          </Link>
        </li>
        <li className="p-3">
          <Link href="component/gallery">
            <a>gallery</a>
          </Link>
        </li>
        <li className="p-3">
          <Link href={`component/postPage`}>
            <a> Post Page</a>
          </Link>
        </li>
      </ul>
      <h2>Im in Index </h2>
      {/* <Main /> */}
    </div>
  );
}
