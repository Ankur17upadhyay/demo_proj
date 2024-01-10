import Head from 'next/head';
import Todo from './Components/Todo';
 
export default function Home() {
  return (
    <div>
      <Head>
        <title>API Details App</title>
        <meta name="description" content="Next.js Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <main>
        <h1>API Details App</h1>
        <br></br>
        <Todo />
      </main>
    </div>
  );
}