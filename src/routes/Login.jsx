import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/login.css"
import axios from "axios"

export default function Index(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigateTo = useNavigate()
    const createAccount = () => {
        navigateTo("/cadastrar")
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/login/', {
            email,
            password
          });

          if (response.status === 201) {
            console.log('Login realizado com sucesso!');
          } } catch (error) {
          console.error(error);
        }
      };
    
    return (
        <>
            <main>
                <div>
                    <form action="" method="post" onSubmit={handleLogin}>
                        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/401/8395286401_1fea63a5-e908-45e6-8121-62c66b93ece7.png?cb=1685991735" alt="Logotipo" width="150"/>
                        <h1>Bem-vindo(a) à biblioteca!</h1>
                        <input type="text" name="email" id="email" placeholder="E-mail" required value={email} onChange={(mail) => setEmail(mail.target.value)}/>
                        <input type="password" name="senha" id="senha" placeholder="Senha" required value={password} onChange={(pass) => setPassword(pass.target.value)}/>
                        <small>Esqueceu sua senha?</small>
                        <input type="submit" value="Entrar"/>
                        <small onClick={createAccount}>Ainda não está na biblioteca? Crie uma conta.</small>
                    </form>
                </div>
            </main>
        </>
    )
}