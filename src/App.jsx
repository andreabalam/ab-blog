import logo from './logo.svg';
import styles from './App.module.css';
import Blog from './Blog';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        SolidJS Starter pack
      </header>
      <main>
        <Blog />
      </main>
      <footer class={styles.footer}>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </footer>
    </div>
  );
}

export default App;
