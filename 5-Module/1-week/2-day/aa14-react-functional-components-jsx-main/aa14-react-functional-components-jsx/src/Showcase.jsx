import grassType from './images/bulbasaur.jpg'
import './App.css'

function Showcase() {

	const favPokemon = 'Charizard'
	const pokeCharacteristics = {
		"type": "fire",
		"move": "fly"
	}

	const spanStyleObject1 = {
		backgroundColor: "green",
		color: "white"
	}

	const spanStyleObject2 = {
		backgroundColor: "#fffff",
		color: "#008000"
	}

	return (
		<div>
			<h1 className='red'>Showcase Component</h1>

			<img src={grassType} alt='missing file' style={{
				height: '80px',
				width: '80px',
			}} />

			<h2>{favPokemon}&apos;s move set</h2>

			<span style={spanStyleObject1}>
				Type: {pokeCharacteristics.type}
			</span>
			<br></br>

			<span style={spanStyleObject2}>
				Move: {pokeCharacteristics.move}
			</span>
		</div>
	);
}

export default Showcase;
