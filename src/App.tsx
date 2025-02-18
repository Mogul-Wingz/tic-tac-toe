import { useState, useEffect } from 'react'
import './App.css'
import MatrixBackground from './MatrixBackground'
import ConfettiBackground from './ConfettiBackground'

type Player = 'X' | 'O'
type BoardState = (Player | null)[]

function calculateWinner(squares: BoardState): Player | null {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ]

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Square({ value, onSquareClick }: { value: Player | null, onSquareClick: () => void }) {
  const [fired, setFired] = useState(false)
  const [frozen, setFrozen] = useState(false)

  // Added to show emoji immediately when value is set
  useEffect(() => {
    if (value === 'X' && !fired) {
      setFired(true)
    } else if (value === 'O' && !frozen) {
      setFrozen(true)
    }
  }, [value])

  const handleClick = () => {
    if (value === 'X' && !fired) {
      setFired(true)
    } else if (value === 'O' && !frozen) {
      setFrozen(true)
    } else if (!value) {
      onSquareClick()
    }
  }

  const display = value === 'X' && fired ? '🔥' :
                  value === 'O' && frozen ? '❄️' :
                  value
  return (
    <button className="square" onClick={handleClick}>
      {display}
    </button>
  )
}

export default function App() {
  const [squares, setSquares] = useState<BoardState>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(squares)
  const isDraw = !winner && squares.every(square => square !== null)
  const status = winner ? `Winner: ${winner}` : 
                 isDraw ? "Game is a draw!" :
                 `Next player: ${xIsNext ? 'X' : 'O'}`

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return

    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  function handleReset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <>
      <MatrixBackground />
      {winner && <ConfettiBackground />}
      <div className="game">
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
        <div className="board">
          {squares.map((square, i) => (
            <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
          ))}
        </div>
        <button className="reset-button" onClick={handleReset}>Reset Game</button>
      </div>
    </>
  )
}
