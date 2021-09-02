import Link from "next/link";
import Head from "next/head";
import "../public/style.css";

export default function App() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Hello World.{" "}
        <Link className="about-link" href="/about">
          <a>About</a>
        </Link>
      </div>

      <img className="product-icon" src="/TBSCA-32px.svg" alt="T-BSCA"></img>

      <h1>Post:</h1>
      <ul>
        <li>
          <Link href="/posts/first-post">
            <a>Firts Post</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
