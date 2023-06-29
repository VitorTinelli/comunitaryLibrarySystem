import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../css/login.css"

export default function Cadastrar(){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")
    const [edition, setEdition] = useState("")
    const [pages, setPages] = useState("")
    const [language, setLanguage] = useState("")
    const [image, setImage] = useState("")
    const [wikipedia, setWiki] = useState("")

    const navigateTo = useNavigate()
    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/livros/', {
            title,
            author,
            genre,
            year,
            edition,
            pages,
            language,
            image,
            wikipedia,
          });

          if (response.status === 201) {
            
            if (localStorage.teste == 1){
              navigateTo('/index/adm')
            } else if (localStorage.teste == 2){
            navigateTo('/index')
            } else {
              window.alert('Você precisa estar logado para doar livros!');
              navigateTo('/')
            }
          } } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
            <main>
                <div>
                    <form action="" method="post" onSubmit={handleCadastro} style={{margin: 50,}}>
                        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/401/8395286401_1fea63a5-e908-45e6-8121-62c66b93ece7.png?cb=1685991735" alt="Logotipo" width="150"/>
                        <h1>Doação de livros</h1>
                        <input type="text" name="title" id="title" placeholder="Título" required value={title} onChange={(titulo) => setTitle(titulo.target.value)}/> 
                        <input type="text" name="author" id="author" placeholder="Autor" required value={author} onChange={(autor) => setAuthor(autor.target.value)}/>
                        <input type="text" name="genre" id="genre" placeholder="Gênero" required value={genre} onChange={(genero) => setGenre(genero.target.value)}/>
                        <input type="text" name="year" id="year" placeholder="Ano" maxLength="4" required value={year} onChange={(ano) => setYear(ano.target.value)}/> 
                        <input type="text" name="edition" id="edition" placeholder="Edição" required value={edition} onChange={(edicao) => setEdition(edicao.target.value)}/>
                        <input type="text" name="pages" id="pages" placeholder="Páginas" required value={pages} onChange={(page) => setPages(page.target.value)}/>
                        <input type="text" name="language" id="language" placeholder="Idioma" required value={language} onChange={(lang) => setLanguage(lang.target.value)}/> 
                        <input type="text" name="link" id="link" placeholder="Link imagem" required value={image} onChange={(img) => setImage(img.target.value)}/>
                        <input type="text" name="wiki" id="wiki" placeholder="Link wiki" required value={wikipedia} onChange={(wikis) => setWiki(wikis.target.value)}/>
                        <input className="cadastrar" type="submit" value="Cadastrar"/>
                    </form>
                </div>
            </main>
        </>
    )
}