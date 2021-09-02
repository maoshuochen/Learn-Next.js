import Link from "next/link";
import Head from "next/head";
import Header from "../components/header";

export default function App() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

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
