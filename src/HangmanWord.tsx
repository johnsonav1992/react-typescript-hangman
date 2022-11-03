import React from 'react'

type HangmanWordProps = {
  guessedLetters: string[],
  wordToGuess: string
}
const HangmanWord: React.FC<HangmanWordProps> = ({ guessedLetters, wordToGuess }) => {
	const word = 'test'

	return (
		<div
			style={{
				display: 'flex',
				gap: '.25em',
				fontSize: '6rem',
				fontWeight: 'bold',
				textTransform: 'uppercase',
				fontFamily: 'monospace',
			}}
		>
			{wordToGuess.split('').map((letter, i) => (
				<span style={{ borderBottom: ".1em solid black" }} key={i}>
					<span
						style={{
							visibility: guessedLetters.includes(letter)
								? 'visible'
								: 'hidden',
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	)
}

export default HangmanWord
