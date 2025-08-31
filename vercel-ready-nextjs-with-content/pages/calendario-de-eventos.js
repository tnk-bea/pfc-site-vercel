import Head from 'next/head';
import '/styles/globals.css';
export default function Page(){
  return (<div className="container">
    <Head><title>Calendário de eventos</title><meta name="viewport" content="width=device-width, initial-scale=1" /></Head>
    <h1>Calendário de eventos</h1>
    <article dangerouslySetInnerHTML={__html: `<!-- wp:paragraph -->
<p>O Calendário PFC 2025 organiza as principais atividades do Programa Futuro Cientista ao longo do ano, garantindo um percurso contínuo de aprendizado e vivências científicas. Entre os destaques estão o Concurso Literário, a Maratona Científica, as gravações dos Clubes de Ciências, os Encontros Regionais de Futuros Cientistas (ERFC) e o EPFC – Escola Preparatória Futuro Cientista. Esse conjunto de ações promove a integração entre alunos, supervisores e escolas, fortalecendo a formação acadêmica, científica e socioemocional dos participantes.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":40,"width":"718px","height":"auto","sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full is-resized"><img src="http://localhost/wordpress/wp-content/uploads/2025/08/Captura-de-tela_24-8-2025_17266_.jpeg" alt="" class="wp-image-40" style="width:718px;height:auto"/></figure>
<!-- /wp:image -->`} />
  </div>);
}
