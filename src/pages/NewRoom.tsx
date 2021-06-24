import { useState } from 'react'
import { FormEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'
import { database } from '../services/firebase'
import { useAuth } from '../hooks/useAuth'

import '../styles/auth.scss'

export function NewRoom() {

    const { user } = useAuth()
    const history = useHistory()
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) { //event serve para acessar os campos dentro do <form>
        event.preventDefault() //previne que a pagina de reload (padrao do onSubmit)

        if (newRoom.trim() === '') { //retira os espacos e verifica se esta vazio
            return
        }

        const roomRef = database.ref('rooms') //cria tipo uma linha(rooms) no banco de dados para armazenar rooms

        const firebaseRoom = await roomRef.push({   //coloca o codgio a seguir na linha rooms
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`) //apos o push, os dados sao armazenados em um espaco que e identificado por key
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}> {/* chamada da funcao sempre dentro do form para usar os dados do input */}
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)} 
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}