import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import { ChangeEvent, useEffect, useState } from 'react'
import { At, Camera, LockSimple, User } from 'phosphor-react'

function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) 
      setConfirmaSenha("")                  
    }
  }

  return (
    <>
      <div className="bg-azul-bg w-full h-screen pt-10 pb-20">
      <div className="ml-20 relative w-4/6">
          <img src="/bg3.jpg" alt="Imagem de fundo ilustração" className="rounded-[50px]"/>
        </div>
        <div className="flex w-96 h-5/6 font-bold absolute items-center bg-branco top-60 right-40 pt-10 p-10 mr-20 rounded-[22px] shadow">
          <form className="flex justify-center items-center flex-col w-full gap-4" onSubmit={cadastrarNovoUsuario}>
            <h2 className='text-cinza-e text-3xl'>Bem-vindo</h2>

            <div className="flex flex-col w-full text-cinza-texto">
            <label htmlFor="nome" className="text-cinza-text">Nome</label>
            <div className="flex items-center border rounded-lg border-cinza-e pl-2">
            <User size={25} className="text-cinza-e"/>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-none rounded p-2 text-cinza-e outline-none"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            </div>

            <div className="flex flex-col w-full text-cinza-texto">
            <label htmlFor="usuario" className="text-cinza-text">Usuário</label>
            <div className="flex items-center border rounded-lg border-cinza-e pl-2">
            <At size={25} className="text-cinza-e"/>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-none rounded p-2 text-cinza-e outline-none"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            </div>

            <div className="flex flex-col w-full text-cinza-texto">
            <label htmlFor="foto" className="text-cinza-text">Foto</label>
            <div className="flex items-center border rounded-lg border-cinza-e pl-2">
            <Camera size={25} className="text-cinza-e"/>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-none rounded p-2 text-cinza-e outline-none"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            </div>

            <div className="flex flex-col w-full text-cinza-texto">
            <label htmlFor="senha" className="text-cinza-text">Senha</label>
            <div className="flex items-center border rounded-lg border-cinza-e pl-2">
            <LockSimple size={25} className="text-cinza-e"/>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-none rounded p-2 text-cinza-e outline-none"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            </div>

            <div className="flex flex-col w-full text-cinza-texto">
            <label htmlFor="confirmarSenha" className="text-cinza-text">Confirmar Senha</label>
            <div className="flex items-center border rounded-lg border-cinza-e pl-2">
            <LockSimple size={25} className="text-cinza-e"/>
              <input
                 type="password"
                 id="confirmarSenha"
                 name="confirmarSenha"
                 placeholder="Confirmar Senha"
                 className="border-none rounded p-2 text-cinza-e outline-none"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            </div>
            <div className="flex justify-around w-full gap-8">
              <button className='rounded text-branco bg-turqueza hover:bg-verde-e w-1/2 py-2' onClick={back}>
                Cancelar
              </button>
              <button className='rounded text-branco bg-vermelho-login-button hover:bg-vermelho-ho w-1/2 py-2' type='submit'>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro