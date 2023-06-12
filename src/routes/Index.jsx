import "../css/index.css"

export default function Index() {
    
    return (
        <>
            <header>
                <h3>Biblioteca De Banana</h3>
                <div>
                    <form action="" method="post" class="form_header">
                        <input type="text" name="nome" id="nome" placeholder="Nome do livro" required/>
                        <input type="submit" value="Pesquisar" />
                    </form>
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
            <h1 class="titulo">Últimas Publicações</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Autor</th>
                        <th>Assusto</th>
                        <th>Ano</th>
                        <th>Edição</th>
                        <th>N° páginas</th>
                        <th>Idioma</th>
                        <th>Saiba mais</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>O Senhor dos Anéis: A sociedade do anel</td>
                        <td>J. R. R. Tolkien</td>
                        <td>Fantásia</td>
                        <td>1954</td>
                        <td>1°</td>
                        <td>584</td>
                        <td>Português</td>
                        <td>Wikipédia</td>
                        <td>PDF</td>
                    </tr>
                </tbody>
            </table>
            <h1 class="titulo">Livros Mais Baixados</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Autor</th>
                        <th>Assusto</th>
                        <th>Ano</th>
                        <th>Edição</th>
                        <th>N° páginas</th>
                        <th>Idioma</th>
                        <th>Saiba mais</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>O Senhor dos Anéis: A sociedade do anel</td>
                        <td>J. R. R. Tolkien</td>
                        <td>Fantásia</td>
                        <td>1954</td>
                        <td>1°</td>
                        <td>584</td>
                        <td>Português</td>
                        <td>Wikipédia</td>
                        <td>PDF</td>
                    </tr>
                </tbody>
            </table>
            <h1 class="titulo">Todos Os Livros</h1>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Autor</th>
                        <th>Assusto</th>
                        <th>Ano</th>
                        <th>Edição</th>
                        <th>N° páginas</th>
                        <th>Idioma</th>
                        <th>Saiba mais</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>O Senhor dos Anéis: A sociedade do anel</td>
                        <td>J. R. R. Tolkien</td>
                        <td>Fantásia</td>
                        <td>1954</td>
                        <td>1°</td>
                        <td>584</td>
                        <td>Português</td>
                        <td>Wikipédia</td>
                        <td>PDF</td>
                    </tr>
                </tbody>
            </table>
            <footer>
                <p>Organização Não Governamental</p>
            </footer>
        </>
    )
}