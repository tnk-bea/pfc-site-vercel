import Head from 'next/head';
import Link from 'next/link';
import '/styles/globals.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Site migrado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Site migrado (Next.js export)</h1>
      <p>Conteúdos importados do WordPress estão em <Link href="/blog">/blog</Link> e páginas soltas no nível raiz.</p>
    </div>
  );
}
