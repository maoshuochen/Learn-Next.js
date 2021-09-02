import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      About us{" "}
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </div>
  );
}
