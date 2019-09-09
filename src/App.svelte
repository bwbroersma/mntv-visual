<script>
	import { scale, fade } from 'svelte/transition';

	const seats = 11;
	export let nomination = seats;
	export let avgVoteCount = 9;

	export let candidatesBlue = seats + 1;
	export let candidatesRed = 2;
	export let supportRed = 0.63;
	$: supportBlue = 1 - supportRed;
	export let nominationRed = 0;
	$: nominationBlue = nomination - nominationRed;
	export let votingRed = 'random';
	export let circleRadius = 20;
	$: candidatesTotal = candidatesBlue + candidatesRed;

	$: if (nominationRed > candidatesRed) {
		nominationRed = candidatesRed;
	}
	$: if (nominationRed > nomination) {
		nominationRed = nomination;
	}
	$: if (nomination > candidatesBlue + nominationRed) {
		nominationRed = nomination - candidatesBlue;
	}

	let electedCount = 0;
	let fiftyCount = 0;

	let candidates = [];
	$: {
		function addVote(candidate) {
			let red;
			switch (votingRed) {
				case 'random':
				{
					if (candidate.color == 'red') {
						red = Math.min(1, avgVoteCount / candidatesRed);
						break;
					}
					let left = avgVoteCount - candidatesRed;
					red = left > 0 && candidate.id <= nomination ?
							Math.min(1, left / nominationBlue) :
							Math.max(0, (left - nominationBlue) / (candidatesBlue - nominationBlue));
					break;
				}
				case 'bullet':
					red = candidate.color == 'red' ? Math.min(1, avgVoteCount / candidatesRed) : 0;
					break;
				case 'ordered':
				{
					if (candidate.color == 'red') {
						red = candidate.id <= nominationRed && candidate.id < avgVoteCount ||
							  candidate.id <= nominationBlue + avgVoteCount ? 1 : 0;
						break;
					}
					let left = avgVoteCount - candidatesRed;
					red = left > 0 && candidate.id <= candidatesRed + left ? 1 : 0;
					break;
				}
			}
			let blue = Math.min(1,
						candidate.id <= nomination ?
							avgVoteCount / nomination :
							Math.max(0, (avgVoteCount - nomination) / (candidatesTotal - nomination))
					   );

			return {
				...candidate,
				fifty: blue * supportBlue + red * supportRed > 0.5,
				total: blue * supportBlue * 100 + red * supportRed * 100,
				blue: blue * supportBlue * 100,
				red: red * supportRed * 100,
			};
		}

		const arr = [];
		for (let i = 0; i < candidatesTotal; i++) {
			arr.push(addVote({
				id: i+1,
				color: (i >= nominationRed && i < nomination || i >= candidatesRed + nominationBlue) ? 'blue' : 'red',
			}));
		}
		const electedIds = new Set(arr.slice().filter(x=>x.fifty).sort((a,b)=>b.total-a.total).map(x=>x.id).slice(0, seats));
		for (let i = 0; i < arr.length; i++) {
			arr[i].elected = electedIds.has(arr[i].id);
		}
		electedCount = electedIds.size;
		fiftyCount = arr.filter(x=>x.fifty).length;
		candidates = arr;
	}
</script>

<style>
	.controls {
		position: absolute;
		right: 1em;
	}
	.controls h2 {
		font-size: 1rem;
		font-weight: bold;
		margin: 0 0 0.3rem 0;
	}
	.controls label input[type="radio"] {
		margin-right: 0.5rem;
	}
	svg { width: 100%; height: 100%; margin: -8px }
	.candidate.red  circle { fill: #ff3300 }
	.candidate.blue circle { fill: #0066ff }
	rect.red { fill: #F30; }
	rect.blue { fill: #06F; }
	.candidate.fifty circle { stroke: #000; stroke-width: 2px; }
	.candidate.fifty.elected circle { stroke: #000; stroke-width: 4px !important; }

	.candidate text {
		text-anchor: middle;
		fill: #FFF;
		font-weight: bold;
	}
	.candidate.score text {
		fill: #000;
		font-weight: normal;
		font-size: 0.8rem;
	}
	.candidate text.legenda {
		fill: #000;
		text-anchor: start;
	}
	.nomination text.start {
		text-anchor: start;
		font-style: italic;
	}
	.nomination text.end {
		text-anchor: end;
	}

</style>


<div class="controls">
	<h1>Parameters</h1>
	<label>
		<h2>Voordracht aantal ({nomination})</h2>
		<input type="range" min="0" max="{candidatesTotal}" bind:value={nomination} step="1">
	</label>
	<label>
		<h2>Blauwe kandidaten ({candidatesBlue})</h2>
		<input type="range" min="1" max="{seats * 3}" bind:value={candidatesBlue} step="1">
	</label>
	<label>
		<h2>Rode kandidaten ({candidatesRed})</h2>
		<input type="range" min="1" max="{seats * 3}" bind:value={candidatesRed} step="1">
	</label>
	<label>
		<h2>Rode kandidaten in voordracht ({nominationRed})</h2>
		<input type="range" min="0" max="{candidatesRed}" step="1" bind:value={nominationRed}>
	</label>
	<label>
		<h2>Steun rode kandidaten ({Math.round(supportRed * 100)}%)</h2>
		<input type="range" min="0" max="1" step="0.01" bind:value={supportRed}>
	</label>
	<label>
		<h2>Gemiddeld aantal stemmen ({avgVoteCount})</h2>
		<input type="range" min="0" max="{seats}" step="1" bind:value={avgVoteCount}>
	</label>

	<h2>Rood stemtactiek</h2>
	<label>
		<input type=radio bind:group={votingRed} value='random'>Geen / random
	</label>
	<label>
		<input type=radio bind:group={votingRed} value='bullet'>Bullet
	</label>
	<label>
		<input type=radio bind:group={votingRed} value='ordered'>Op volgorde
	</label>
</div>
<svg>
	<g class="fifty" >
		<line y1=225 y2=225 x1=0 x2="80%" stroke-width="1" stroke="black" stroke-opacity="1" style="shape-rendering: crispEdges" />
		<text x="10" y="222">50%</text>
	</g>
	<g class="nomination" >
		<line y1=300 y2=375 x1={100 + (2.5 * nomination - 0.25) * circleRadius} x2={100 + (2.5 * nomination - 0.25) * circleRadius} stroke-width="2" stroke="black" stroke-opacity="1" style="shape-rendering: crispEdges" stroke-dasharray="10,10" />
		<text class="end" x="{100 + (2.5 * nomination - 0.5) * circleRadius}" y="370">voordracht</text>
		<text class="start" x="{100 + (2.5 * nomination) * circleRadius}" y="370">niet voorgedragen</text>
	</g>
	{#each candidates as candidate, i}
		<g class="candidate score" transform="translate({100 + i * circleRadius * 2.5}, 175)">
			 <rect class="red" in:scale out:fade
		     	x=0
		        y={100-candidate.total}
		        width={circleRadius*2}
		        height={candidate.red}
        	><title>{candidate.red.toFixed(1)}% punt door rood</title></rect>
			 <rect class="blue" in:scale out:fade
		     	x=0
		        y={100-candidate.blue}
		        width={circleRadius*2}
		        height={candidate.blue}
		        title="{candidate.blue.toFixed(1)}% punt door blauw"
        	><title>{candidate.blue.toFixed(1)}% punt door blauw</title></rect>
        	<text x="{circleRadius}" y="117">{candidate.total.toFixed(1)}%</text>
		</g>
	{/each}
	{#each candidates as {id, color, fifty, elected}, i}
		<g class="candidate {color}" class:fifty={fifty} class:elected={elected} transform="translate({100 + i * circleRadius * 2.5}, 300)">
			<circle cx={circleRadius} cy={circleRadius} r={circleRadius} transition:scale />
			<text y="{1.3 * circleRadius}" x="{circleRadius}">{id}</text>
		</g>
	{/each}
	<g class="candidate fifty" transform="translate({circleRadius}, {circleRadius})">
		<circle cx={circleRadius} cy={circleRadius} r={circleRadius} transition:scale fill="#fff" />
		<text class="legenda" y="{1.3 * circleRadius}" x="{2.5 * circleRadius}">50%+1 ({fiftyCount}/{seats})</text>
	</g>
	<g class="candidate fifty elected" transform="translate({circleRadius}, {circleRadius * 3.5})">
		<circle cx={circleRadius} cy={circleRadius} r={circleRadius} transition:scale fill="#fff" />
		<text class="legenda" y="{1.3 * circleRadius}" x="{2.5 * circleRadius}">verkozen ({electedCount}/{seats})</text>
	</g>
</svg>