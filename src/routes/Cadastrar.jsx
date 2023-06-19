import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../css/login.css"
import axios from "axios"



export default function Cadastrar(){
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigateTo = useNavigate()
    const goLogin = () => {
        navigateTo("/")
    }
    
    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/usuarios/', {
            username,
            email,
            password
          });

          if (response.status === 201) {
            console.log('Cadastro realizado com sucesso!');
            navigateTo('/')
          } } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
            <main>
                <div>
                    <form action="" method="post" onSubmit={handleCadastro}>
                        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/401/8395286401_1fea63a5-e908-45e6-8121-62c66b93ece7.png?cb=1685991735" alt="Logotipo" width="150"/>
                        <h1>Bem-vindo(a) à biblioteca!</h1>
                        <input type="text" name="nome" id="nome" placeholder="Nome" required value={username} onChange={(user) => setUsername(user.target.value)}/> 
                        <input type="text" name="email" id="email" placeholder="E-mail" required value={email} onChange={(mail) => setEmail(mail.target.value)}/>
                        <input type="password" name="senha" id="senha" placeholder="Senha" required value={password} onChange={(pass) => setPassword(pass.target.value)}/>
                        <input type="submit" className="cadastrar" value="Cadastrar"/>
                        <small onClick={goLogin}>Já tem uma conta? Entre aqui.</small>
                    </form>
                </div>
            </main>
        </>
    )
}