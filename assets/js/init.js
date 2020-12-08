// global animation counter
let animationFrame = 0;

// reindeer deets
const reindeerData = [
	{
		posz: 1,
		posx: 0
	},
	{
		posz: -1,
		posx: 0
	},
	{
		posz: 1,
		posx: 1
	},
	{
		posz: -1,
		posx: 1
	},
	{
		posz: 1,
		posx: 2
	},
	{
		posz: -1,
		posx: 2
	},
	{
		posz: 1,
		posx: 3
	},
	{
		posz: -1,
		posx: 3
	},
	{
		posz: 0,
		posx: 4,
		rudolf: true
	}
];
let reindeerPositions = [];
const reindeerScale = {x: .1, y: .1, z: .1};

// where we build it all to
let sceneEl, 
	santaEl,
	sleighEl,
	sledL,
	sledR,
	hatEl,
	masterEl

function init() {

	masterEl = document.querySelector('#position-wrapper');
	sceneEl = document.querySelector('a-scene');
	santaEl = document.querySelector('#santa');
	santaEl.setAttribute('position', {x: 1.3, y: -1.3, z: 0})

	sleighEl = document.querySelector('#sleigh');
	sleighEl.setAttribute('extrusion', {shape: sleigh, color: colours.red, depth: 4, bevel: true})
	sleighEl.setAttribute('scale', {x: .15, y: .15, z: .15})
	sleighEl.setAttribute('position', {x: 0, y: 1, z: -.285})

	sledL = document.querySelector('#sledshoe-left');
	sledL.setAttribute('extrusion', {shape: sled, color: colours.gold, depth: 0.3, bevel: false})
	sledL.setAttribute('position', {x: -.17, y: .7, z: -.35})

	sledR = document.querySelector('#sledshoe-right');
	sledR.setAttribute('extrusion', {shape: sled, color: colours.gold, depth: 0.3, bevel: false})
	sledR.setAttribute('position', {x: -.17, y: .7, z: .35})

	hatEl = document.querySelector('#hat');
	hatEl.setAttribute('lathe', {profile: conePoints, color: colours.red})
	hatEl.setAttribute('rotation', {x: 0, y: 0, z: -40})
	hatEl.setAttribute('position', {x: 0.27, y: .47, z: 0})




	// build 5 placeholder elements for reindeer
	for (let i = 0; i < 5; i++) {
		console.log(i);
		let pos = document.createElement('a-entity');
		pos.setAttribute('position', {x: -i, y: 0, z: 0});
		pos.setAttribute('scale', {x: .8, y: .8, z: .8});
		reindeerPositions.push(pos);
		masterEl.appendChild(pos);
	}

	// build all the reindeer and add them to positions
	for (let i = 0; i < reindeerData.length; i++) {
		createReindeer(reindeerData[i].posz * 0.3, reindeerPositions[reindeerData[i].posx], reindeerScale, reindeerData[i].rudolf)	
	}

	
}