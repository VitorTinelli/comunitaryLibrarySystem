import "../css/index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Index() {
    const [livros, setLivros] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [livrosFiltrados, setLivrosFiltrados] = useState([]);
    const navigateTo = useNavigate();

    const goLivros = () => {
        navigateTo("/cadastrar/livros");
    };

    useEffect(() => {
        mostrarLivros();
    }, []);

    const mostrarLivros = async () => {
        try {
            const response = await axios.get("http://localhost:8000/aceitos/");
            setLivros(response.data);
            setLivrosFiltrados(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const pesquisarLivros = (event) => {
        event.preventDefault();
        const livrosFiltrados = livros.filter((livro) =>
            livro.title.toLowerCase().includes(pesquisa.toLowerCase())
        );
        setLivrosFiltrados(livrosFiltrados);
    };

    const limparPesquisa = () => {
        setPesquisa("");
        setLivrosFiltrados(livros);
    };

    return (
        <>
            <header>
                <h3>Biblioteca De Banana</h3>
                <div>
                    <form action="" method="post" className="form_header" onSubmit={pesquisarLivros}>
                        <input
                            type="text"
                            name="Título"
                            id="Título"
                            placeholder="Título do livro"
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                        />
                        <input type="submit" value="Pesquisar" />
                    </form>
                    <span className="cad_livro" onClick={goLivros}>
                        Cadastrar Livros
                    </span>
                    <span>Desconectar</span>
                </div>
            </header>
            <main>
                <section class="banner">
                    <div>
                        <h3>Melhor plataforma de livros virtuais</h3>
                        <h1>Os livros são uma extensão da <span>memória e da imaginação.</span></h1>
                        <p>Livros em inglês e português!</p>
                        <button>Saiba mais</button>
                    </div>
                    <img src="https://livrariascuritiba.vteximg.com.br/arquivos/ids/2098145-1000-1000/kit14_Livros_DiarioBanana123.jpg?v=638077687004100000" alt="Imagem" width="40%" />
                </section>
            </main>
            <h1 className="titulo">Todos Os Livros</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Assunto</th>
                        <th>Ano</th>
                        <th>Edição</th>
                        <th>N° páginas</th>
                        <th>Idioma</th>
                        <th>Capa</th>
                    </tr>
                </thead>
                <tbody>
                    {livrosFiltrados
                        .sort((livroA, livroB) => livroA.id - livroB.id)
                        .map((livro) => (
                            <tr key={livro.id}>
                                <td>{livro.title}</td>
                                <td>{livro.author}</td>
                                <td>{livro.genre}</td>
                                <td>{livro.year}</td>
                                <td>{livro.edition}</td>
                                <td>{livro.pages}</td>
                                <td>{livro.language}</td>
                                <td>
                                    <a href={livro.image}>Clique Aqui</a>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <h1 className="titulo">Últimas Doações</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Assunto</th>
                        <th>Ano</th>
                        <th>Edição</th>
                        <th>N° páginas</th>
                        <th>Idioma</th>
                        <th>Capa</th>
                    </tr>
                </thead>
                <tbody>
                    {livros
                        .sort((livroA, livroB) => livroB.id - livroA.id)
                        .slice(0, 5)
                        .map((livro) => (
                            <tr key={livro.id}>
                                <td>{livro.title}</td>
                                <td>{livro.author}</td>
                                <td>{livro.genre}</td>
                                <td>{livro.year}</td>
                                <td>{livro.edition}</td>
                                <td>{livro.pages}</td>
                                <td>{livro.language}</td>
                                <td>
                                    <a href={livro.image}>Clique Aqui</a>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <h1 className="titulo">Livros Mais Baixados</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Assunto</th>
                        <th>Ano</th>
                        <th>Edição</th>
                        <th>N° páginas</th>
                        <th>Idioma</th>
                        <th>Capa</th>
                    </tr>
                </thead>
                <tbody>
                    {livros
                        .sort((livroA, livroB) => livroB.id - livroA.id)
                        .slice(0, 5)
                        .map((livro) => (
                            <tr key={livro.id}>
                                <td>{livro.title}</td>
                                <td>{livro.author}</td>
                                <td>{livro.genre}</td>
                                <td>{livro.year}</td>
                                <td>{livro.edition}</td>
                                <td>{livro.pages}</td>
                                <td>{livro.language}</td>
                                <td>
                                    <a href={livro.image}>Clique Aqui</a>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            
            <footer>
                <p>Organização Não Governamental</p>
            </footer>
        </>
    );
}
