import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/login.css"

export default function Index(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigateTo = useNavigate()
    const createAccount = () => {
        navigateTo("/cadastrar")
    }
    const submitLogin = () => {
        if (email == "admin" && password == "admin"){
            navigateTo("/index")
        }else{
            alert("Errou palhaço!")
        }
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
                        <input type="text" name="email" id="email" placeholder="E-mail" required value={email} onChange={(main) => setEmail(mail.target.value)}/>
                        <input type="password" name="senha" id="senha" placeholder="Senha" required value={password} onChange={(pass) => setPassword(pass.target.value)}/>
                        <small>Esqueceu sua senha?</small>
                        <input type="submit" value="Entrar" onClick={submitLogin}/>
                        <small onClick={createAccount}>Ainda não está na biblioteca? Crie uma conta.</small>
                    </form>
                </div>
            </main>
            <footer>
                {/* Sem footer */}
            </footer>
        </body>
    )
}