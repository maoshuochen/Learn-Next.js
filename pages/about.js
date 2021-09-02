import Link from "next/link";
import Header from "../components/header";

export default function AboutPage() {
  return (
    <>
      <Header></Header>
      <div>
        About us{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
    </>
  );
}
