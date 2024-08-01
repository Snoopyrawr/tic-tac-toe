import { useState } from "react"
import Square from "./Square"

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [squareColors, setSquareColors] = useState(Array(9).fill(''))

    const handleClick = (i: number) => {
        if (squares[i]) {
            return
        }
        const nextSquares = squares.slice()
        const nextColors = squareColors.slice()
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        nextColors[i] = 'bg-yellow-500'
        setSquares(nextSquares)
        setSquareColors(nextColors)
        setXIsNext(!xIsNext)
    }

    const colors = [
        'bg-yellow-500/10',
        'bg-yellow-500/20',
        'bg-yellow-500/30',
        'bg-yellow-500/40',
        'bg-yellow-500/50',
        'bg-yellow-500/60',
        'bg-yellow-500/70',
        'bg-yellow-500/80',
        'bg-yellow-500/90'
    ]

    return (
        <>
            <div className="flex justify-center items-center">
                <div>
                    <div className="grid grid-cols-3 gap-5 min-w-60 min-h-20 mx-auto">
                        <Square
                            value={squares[0]}
                            onSquareClick={() => handleClick(0)}
                            color={squareColors[0] || colors[0]} />
                        <Square
                            value={squares[1]}
                            onSquareClick={() => handleClick(1)}
                            color={squareColors[1] || colors[1]} />
                        <Square
                            value={squares[2]}
                            onSquareClick={() => handleClick(2)}
                            color={squareColors[2] || colors[2]} />
                    </div>
                    <div className="grid grid-cols-3 gap-5 min-w-60 min-h-20 mx-auto m-5">
                        <Square
                            value={squares[3]}
                            onSquareClick={() => handleClick(3)}
                            color={squareColors[3] || colors[3]} />
                        <Square
                            value={squares[4]}
                            onSquareClick={() => handleClick(4)}
                            color={squareColors[4] || colors[4]} />
                        <Square
                            value={squares[5]}
                            onSquareClick={() => handleClick(5)}
                            color={squareColors[5] || colors[5]} />
                    </div>
                    <div className="grid grid-cols-3 gap-5 min-w-60 min-h-20 mx-auto m-5">
                        <Square
                            value={squares[6]}
                            onSquareClick={() => handleClick(6)}
                            color={squareColors[6] || colors[6]} />
                        <Square
                            value={squares[7]}
                            onSquareClick={() => handleClick(7)}
                            color={squareColors[7] || colors[7]} />
                        <Square
                            value={squares[8]}
                            onSquareClick={() => handleClick(8)}
                            color={squareColors[8] || colors[8]} />
                    </div>
                </div>
            </div>
        <p className="text-center font-bold m-5">
            <span className="text-yellow-400">HINT:</span> Click the box to get started.
        </p>
        </>
    )
}

export default Board