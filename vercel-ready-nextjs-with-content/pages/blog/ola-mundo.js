import Head from 'next/head';
import Link from 'next/link';
import '/styles/globals.css';
export default function Post(){
  return (<div className="container">
    <Head><title>Olá, mundo!</title><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <p><Link href="/blog">← Voltar</Link></p>
    <h1>Olá, mundo!</h1>
    <article dangerouslySetInnerHTML={__html: `<!-- wp:paragraph -->
<p>Boas-vindas ao WordPress. Esse é o seu primeiro post. Edite-o ou exclua-o, e então comece a escrever!</p>
<!-- /wp:paragraph -->`} />
  </div>);
}
