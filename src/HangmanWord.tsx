import React from 'react'

const HangmanWord = () => {
	const word = 'test'
	const guessedLetters = ['t']
	return (
		<div
			style={{
				display: 'flex',
				gap: '.25em',
				fontSize: '6rem',
				fontWeight: 'bold',
				textTransform: 'uppercase',
				fontFamily: 'sans-serif',
			}}
		>
			{word.split('').map((letter, i) => (
				<span style={{ borderBottom: '.1em solid black' }} key={i}>
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
