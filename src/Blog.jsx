import { createSignal, createEffect, onMount } from 'solid-js';
import {fetchArticle} from './fetchService';
import Comentarios from './Comentarios';
import {formatForLogging} from './constants'


function Blog () {
    const [title, setTitle] = createSignal('Cargando...');
    const [article, setArticle] = createSignal();

    async function fetchData () {
        const { titleData, articleData } = await fetchArticle();
        setTitle(titleData);
        setArticle(articleData);
    }
    
    onMount(() => {
        fetchData();
    });

    createEffect(() => {
        if(article()) { 
            console.log(`${formatForLogging} article loaded at ${performance.now()} ms`)
        }
    });

    return (
        <div>
            <section>
                <h1>Bienvenidos!</h1>
                <article>
                    <h3>{title()}</h3>
                    <p>{article()}</p>
                </article>
            </section>
            <hr />
            <Comentarios />
        </div>
    );
}

export default Blog;