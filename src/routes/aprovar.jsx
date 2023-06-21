import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Aprovar() {
  const [livros, setLivros] = useState([]);
  const [wikipedia, setWikipedia] = useState("");
  const [livroEscolhido, setLivroEscolhido] = useState(null);

  useEffect(() => {
    mostrarLivros();
  }, []);

  const mostrarLivros = async () => {
    try {
      const response = await axios.get('http://localhost:8000/livros/');
      setLivros(response.data);
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
      const livroSelecionado = livros.find((livro) => livro.id === id);
      await axios.post('http://localhost:8000/aceitos/', {
        title: livroSelecionado.title,
        author: livroSelecionado.author,
        genre: livroSelecionado.genre,
        year: livroSelecionado.year,
        edition: livroSelecionado.edition,
        pages: livroSelecionado.pages,
        language: livroSelecionado.language,
        image: livroSelecionado.image,
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
      <h2>Lista de Livros:</h2>
      {livroEscolhido !== null && (
        <div className="modal">
          <h2>Detalhes do Livro:</h2>
          <p>Título: {livroEscolhido.title}</p>
          <p>Autor: {livroEscolhido.author}</p>
          <p>Ano: {livroEscolhido.year}</p>
          <p>Edição: {livroEscolhido.edition}</p>
          <p>Páginas: {livroEscolhido.pages}</p>
          <p>Idioma: {livroEscolhido.language}</p>
          <p>Imagem: {livroEscolhido.image}</p>
          <input
            type="text"
            name="wiki"
            id="wiki"
            placeholder="Wikipedia"
            required
            value={wikipedia}
            onChange={(wiki) => setWikipedia(wiki.target.value)}
          />
          <br />
          <button onClick={() => aceitar(livroEscolhido.id)}>Aceitar</button>
          <button onClick={() => setLivroEscolhido(null)}>Cancelar</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Autor</th>
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
              <td>{livro.year}</td>
              <td>{livro.edition}</td>
              <td>{livro.pages}</td>
              <td>{livro.language}</td>
              <td>{livro.image}</td>
              <td>
                <button onClick={() => openModal(livro)}>Completar</button>
                <button onClick={() => deletar(livro.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
