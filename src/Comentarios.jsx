import { createEffect } from 'solid-js';
import { createStore } from "solid-js/store";
import {fetchComments} from './fetchService';
import {formatForLogging} from './constants'

function Comentarios () {
    const [comments, setComments] = createStore([]);
    
    async function fetchData () {
        setComments(await fetchComments());
    }
    
    fetchData();

    createEffect(() => console.log(`${formatForLogging}${comments.length} comments loaded`));

    return (
        <section>
            <h3>Comentarios</h3>
            <textarea placeholder='Deja tu comentario'></textarea>
            <Show when={comments.length > 0}>
                <ul>
                    <For each={comments}>
                        {comment => <li>{comment}</li>}
                    </For>
                </ul>
            </Show>
        </section>
    )
}

export default Comentarios;