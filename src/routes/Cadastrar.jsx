import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/cadastrar.css"

export default function Cadastrar(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigateTo = useNavigate()
    const goLogin = () => {
        navigateTo("/")
    }
    return (
        <body>
            <header>
                {/* Sem header */}
            </header>
            <main>
                <div>
                    <form action="" method="post">
                        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/401/8395286401_1fea63a5-e908-45e6-8121-62c66b93ece7.png?cb=1685991735" alt="Logotipo" width="150"/>
                        <h1>Bem-vindo(a) à biblioteca!</h1>
                        <input type="text" name="nome" id="nome" placeholder="Nome" required value={username} onChange={(user) => setUsername(user.target.value)}/> 
                        <input type="text" name="email" id="email" placeholder="E-mail" required value={email} onChange={(mail) => setEmail(mail.target.value)}/>
                        <input type="password" name="senha" id="senha" placeholder="Senha" required value={password} onChange={(pass) => setPassword(pass.target.value)}/>
                        <input type="submit" value="Cadastrar"/>
                        <small onClick={goLogin}>Já tem uma conta? Entre aqui.</small>
                    </form>
                </div>
            </main>
            <footer>
                {/* Sem footer */}
            </footer>
        </body>
    )
}