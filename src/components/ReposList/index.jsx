import { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(resJson);
        }, 3000);
      });
  }, [nomeUsuario]);

  return (
    <div class="container">
      {estaCarregando ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.listName}>
                <b>Nome:</b> {name}
              </div>
              <div className={styles.listLanguage}>
                <b>Linguagem</b> {language}
              </div>
              <div className={styles.listLink}>
                <a className={styles.listLink} href={html_url} target="_blank">
                  Visitar no GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
