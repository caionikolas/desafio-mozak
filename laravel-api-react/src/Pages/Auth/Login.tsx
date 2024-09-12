import { useState } from "react"

export default function Login() {

  const [formLogin, setFormLogin] = useState({
    loginEmail: '',
    loginPassword: '',
  })

  const [formRegister, setFormRegister] = useState({
    registerName: '',
    registerEmail: '',
    registerPassword: '',
  })

  //const [errosLogin, setErrosLogin] = useState({})

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const resLogin = await fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(formLogin)
    })

    const dataLogin = await resLogin.json()

      console.log(dataLogin)
  }

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const resRegister = await fetch('/api/register' , {
      method: 'post',
      body: JSON.stringify(formRegister)
    })

    const dataRegister = await resRegister.json()

    console.log(dataRegister)
  }

  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex flex-col gap-3 mt-28">
          <h1 className="text-center text-2xl font-semibold">Entre com a sua Conta</h1>
          <p className="text-sm">Entre com sua conta para participar do evento</p>
          <form 
            onSubmit={handleLogin} 
            className="w-11/12 mx-auto space-y-6"
          >
            <div>
              <p>Email</p>
              <input 
                type="text" 
                placeholder="Digite seu Email" 
                value={formLogin.loginEmail} 
                onChange={(e) => setFormLogin({...formLogin, loginEmail: e.target.value})}
              />
            </div>
            <div>
              <p>Senha</p>
              <input 
                type="text" 
                placeholder="Digite sua Senha" 
                value={formLogin.loginPassword} 
                onChange={(e) => setFormLogin({...formLogin, loginPassword: e.target.value})}
              />
            </div>
            <button className="primary-btn">Acessar</button>
          </form>
        </div>

        <div>
          <div className="flex flex-col gap-3 mt-28">
            <h1 className="text-center text-2xl font-semibold">Cadastre-se</h1>
            <p className="text-sm">Cadastre-se para participar ou criar um evento</p>
            <form 
              onSubmit={handleRegister} 
              className="w-11/12 mx-auto space-y-6"
            >
              <div>
                <p>Nome</p>
                <input 
                  type="text" 
                  placeholder="Digite seu Nome" 
                  value={formRegister.registerName} 
                  onChange={(e) => setFormRegister({...formRegister, registerName: e.target.value})}
                />
              </div>
              <div>
                <p>Email</p>
                <input 
                  type="text" 
                  placeholder="Digite seu Email" 
                  value={formRegister.registerEmail} 
                  onChange={(e) => setFormRegister({...formRegister, registerEmail: e.target.value})}
                />
              </div>
              <div>
                <p>Senha</p>
                <input 
                  type="password" 
                  placeholder="Digite sua Senha" 
                  value={formRegister.registerPassword} onChange={(e) => setFormRegister({...formRegister, registerPassword: e.target.value})}
                />
              </div>
              <button className="primary-btn">Criar Conta</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}