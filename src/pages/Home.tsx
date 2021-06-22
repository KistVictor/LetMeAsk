import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {

    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração de perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="LetMeAsk" />
                    <button>
                        <img src={googleIconImg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div>Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Figite o coódigo da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}