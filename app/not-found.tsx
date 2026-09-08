import Link from "next/link";
import { Footer, Header } from "./components";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="not-found shell">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This page does not exist.</h1>
        <p>该页面不存在，或地址已经发生变化。</p>
        <Link className="button button--dark" href="/">Return home / 返回首页</Link>
      </main>
      <Footer />
    </>
  );
}
