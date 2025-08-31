import Head from 'next/head';
import Link from 'next/link';
import '/styles/globals.css';
const posts = [
  {
    "slug": "ola-mundo",
    "title": "Olá, mundo!",
    "date": "2025-08-24 12:33:58"
  }
];
export default function BlogIndex(){
  return (<div className="container">
    <Head><title>Blog</title><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <h1>Blog</h1>
    <ul>
      {posts.map(p => (<li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link>{p.date ? <small> — {p.date}</small> : null}</li>))}
    </ul>
  </div>);
}
