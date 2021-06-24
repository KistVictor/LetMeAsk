import copyImg from '../assets/images/copy.svg'

import '../styles/RoomCode.scss'

type RoomCodeProps = {
    code: string,
}

export function RoomCode(props: RoomCodeProps) {

    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)
    }

    return(
        <button className="room-code">
            <div onClick={copyRoomCodeToClipboard}>
                <img src={copyImg} alt="copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}