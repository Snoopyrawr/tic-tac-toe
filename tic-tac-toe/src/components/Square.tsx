
type Props = {
    onSquareClick: () => void
    value: string
    color: string
}

const Square = ({ value, onSquareClick, color }: Props) => {

    return (
        <button className={`p-5 ${color} rounded-sm min-w-12`} onClick={onSquareClick}>{value}</button>
    )
}

export default Square