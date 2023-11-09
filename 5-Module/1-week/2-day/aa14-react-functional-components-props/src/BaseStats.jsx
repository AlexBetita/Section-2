function BaseStats({stats, clicker}) {
	return(
		<div className='base-stats'>
			<h1>
				BaseStats
				<button className='sp-stats' onClick={clicker}> Check Special Stats </button>
				<table>
					<tbody>
						<tr>
							<td>Hit Points</td>
							<td>{stats.hp}</td>
						</tr>
						<tr>
							<td>Attack</td>
							<td>{stats.attack}</td>
						</tr>
						<tr>
							<td>Defense</td>
							<td>{stats.defense}</td>
						</tr>
						<tr>
							<td>Speed</td>
							<td>{stats.speed}</td>
						</tr>
					</tbody>
				</table>
			</h1>
		</div>
	)
}

export default BaseStats
