import Head from 'next/head';
import '/styles/globals.css';
export default function Page(){
  return (<div className="container">
    <Head><title>Relatório semanal do PFC</title><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <h1>Relatório semanal do PFC</h1>
    <article dangerouslySetInnerHTML={__html: ``} />
  </div>);
}
