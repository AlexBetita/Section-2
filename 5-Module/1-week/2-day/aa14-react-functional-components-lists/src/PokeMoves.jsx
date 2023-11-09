import { moves } from './data.js'
import PokeMoveCard from './PokeMoveCard.jsx'

function PokeMoves() {
	return (
		<h1>
			<ul>
				{moves.map((item) => <PokeMoveCard key={item.id} {...item}/>)}
			</ul>
		</h1>
	)
}


export default PokeMoves
