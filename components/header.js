import Link from "next/link";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link href="/">
          <img className={style.logo} src="/TBSCA-32px.svg" alt="T-BSCA"></img>
        </Link>
        <Link href="/">
          <h1 className={style.title}>Homepage</h1>
        </Link>
      </div>
      <div className={style.container}>
        <Link href="about">
          <div className={style.link}>About</div>
        </Link>
      </div>
    </header>
  );
}
