import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/index.css"

export default function Aprovar() {
  const [livros, setLivros] = useState([]);
  const [imagem, setImagem] = useState("");
  const [idioma, setIdioma] = useState("");
  const [pagina, setPagina] = useState("");
  const [edicao, setEdicao] = useState("");
  const [genero, setGenero] = useState("");
  const [autor, setAutor] = useState("");
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState("");
  const [wikipedia, setWikipedia] = useState("");
  const [livroEscolhido, setLivroEscolhido] = useState(null);

  const navigateTo = useNavigate();

  useEffect(() => {
    mostrarLivros();
  }, []);

  useEffect(() => {
    verLogin();
  }, []);

  const verLogin = () => {
    if (localStorage.teste == 0) {
        window.alert('Você precisa estar logado!');
        navigateTo("/");
    }
    if (localStorage.teste == 2) {
      window.alert('Você não tem acesso a essa página!');
        navigateTo("/index");
    }
}

  const mostrarLivros = async () => {
    try {
      const response = await axios.get('http://localhost:8000/livros/');
      setLivros(response.data);
      setLivroEscolhido(null)
    } catch (error) {
      console.error(error);
    }
  };

  const deletar = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/livros/${id}`);
      if (response.status === 204) {
        mostrarLivros();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const aceitar = async (id) => {
    try {
      await axios.post('http://localhost:8000/aceitos/', {
        title: titulo,
        author: autor,
        genre: genero,
        year: ano,
        edition: edicao,
        pages: pagina,
        language: idioma,
        image: imagem,
        wikipedia: wikipedia,
      });
      await axios.delete(`http://localhost:8000/livros/${id}`);
      mostrarLivros();
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (livro) => {
    setLivroEscolhido(livro);
  };

  return (
    <div>
      <h2 className="titulo">Lista de Livros:</h2>
      {livroEscolhido !== null && (
        <div className="modal" style={{width: '100%', position: "absolute", justifyContent: "center", top: 0, maxHeight: '100vh', backgroundColor: "#fff", flexDirection: "column",}}>
          <h2 style={{textAlign: "center", margin: 20,}}>Completar</h2>
          <input
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Título"
            required
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            value={titulo}
            onChange={(titu) => setTitulo(titu.target.value)}
          />
          <input
            type="text"
            name="autor"
            id="autor"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            placeholder="Autor"
            required
            value={autor}
            onChange={(auto) => setAutor(auto.target.value)}
          />
          <input
            type="text"
            name="genero"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            id="genero"
            placeholder="Gênero"
            required
            value={genero}
            onChange={(gen) => setGenero(gen.target.value)}
          />
          <input
            type="text"
            name="ano"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            id="ano"
            placeholder="Ano"
            required
            value={ano}
            onChange={(an) => setAno(an.target.value)}
          />
          <input
            type="text"
            name="edicao"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            id="edicao"
            placeholder="Edição"
            required
            value={edicao}
            onChange={(edic) => setEdicao(edic.target.value)}
          />
          <input
            type="text"
            name="pagina"
            id="pagina"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            placeholder="Página"
            required
            value={pagina}
            onChange={(pag) => setPagina(pag.target.value)}
          />
          <input
            type="text"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            name="idioma"
            id="idioma"
            placeholder="Idioma"
            required
            value={idioma}
            onChange={(idio) => setIdioma(idio.target.value)}
          />
          <input
            type="text"
            name="imagem"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            id="imagem"
            placeholder="Link imagem"
            required
            value={imagem}
            onChange={(img) => setImagem(img.target.value)}
          />
          <input
            type="text"
            name="wiki"
            id="wiki"
            style={{display: "block", margin: 'auto', marginBottom: 10,}}
            placeholder="Link wiki"
            required
            value={wikipedia}
            onChange={(wiki) => setWikipedia(wiki.target.value)}
          />
          <br />
          <button className='botaoverde1'  onClick={() => aceitar(livroEscolhido.id)}>Aceitar</button>
          <button className='botaovermelho1' onClick={() => setLivroEscolhido(null)}>Cancelar</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Gênero</th>
            <th>Ano</th>
            <th>Edição</th>
            <th>Páginas</th>
            <th>Idioma</th>
            <th>Imagem</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.id}</td>
              <td>{livro.title}</td>
              <td>{livro.author}</td>
              <td>{livro.genre}</td>
              <td>{livro.year}</td>
              <td>{livro.edition}</td>
              <td>{livro.pages}</td>
              <td>{livro.language}</td>
              <td style={{width: 100,}}>{livro.image}</td>
              <td>
                <button className='botaoverde' onClick={() => openModal(livro.id)}>Completar</button>
                <button className="botaovermelho" onClick={() => deletar(livro.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}