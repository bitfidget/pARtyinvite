function createReindeer(posz, targetEl, reindeerScale, rudolf) {

	console.log('building reindeer')

	let reindeerEl = document.createElement('a-entity');
	reindeerEl.setAttribute('reindeer', '');
	reindeerEl.setAttribute('position', {x: 0, y: 0, z: posz});
	reindeerEl.setAttribute('scale', reindeerScale);

	let reindeerHeadEl = document.createElement('a-entity');
	reindeerHeadEl.setAttribute('lathe', '');
	reindeerHeadEl.setAttribute('scale', {x: 1.6, y: .7, z: 1.9});
	reindeerHeadEl.setAttribute('rotation', {x: 0, y: 0, z: 115});
	reindeerHeadEl.setAttribute('position', {x: 0, y: .2, z: 0});
	reindeerEl.appendChild(reindeerHeadEl);

	let reindeerNeckEl = document.createElement('a-entity');
	reindeerNeckEl.setAttribute('lathe', '');
	reindeerNeckEl.setAttribute('scale', {x: 1.6, y: 1.3, z: 0.9});
	reindeerNeckEl.setAttribute('rotation', {x: 0, y: 0, z: -135});
	reindeerNeckEl.setAttribute('position', {x: -.9, y: .4, z: 0});
	reindeerEl.appendChild(reindeerNeckEl);

	let reindeerBodyEl = document.createElement('a-entity');
	reindeerBodyEl.setAttribute('lathe', '');
	reindeerBodyEl.setAttribute('scale', {x: 3, y: 1.2, z: 1.8});
	reindeerBodyEl.setAttribute('rotation', {x: 0, y: 0, z: -80});
	reindeerBodyEl.setAttribute('position', {x: 1, y: -3, z: 0});
	reindeerEl.appendChild(reindeerBodyEl);

	let frontLegZ = [.7, -.7]
	let backLegZ = [.6, -.6]

	for (let i = 0; i < 2; i++) {
		let frontLeg = document.createElement('a-entity');
		frontLeg.setAttribute('anileg', '');
		frontLeg.setAttribute('position', {x: 1.85, y: -3.2, z: 0});

		let frontLegTopEl = document.createElement('a-entity');
		frontLegTopEl.setAttribute('lathe', '');
		frontLegTopEl.setAttribute('scale', {x: 2, y: .65, z: 1.7});
		frontLegTopEl.setAttribute('rotation', {x: 0, y: 0, z: 160});
		frontLegTopEl.setAttribute('position', {x: 0, y: 1, z: 0});
		frontLeg.appendChild(frontLegTopEl);

		let frontLegBottomEl = document.createElement('a-entity');
		frontLegBottomEl.setAttribute('lathe', '');
		frontLegBottomEl.setAttribute('scale', {x: .8, y: .9, z: 0.5});
		frontLegBottomEl.setAttribute('rotation', {x: 0, y: 0, z: 175});
		frontLegBottomEl.setAttribute('position', {x: -.8, y: -1, z: 0});
		frontLeg.appendChild(frontLegBottomEl);

		frontLeg.setAttribute('position', {z: frontLegZ[i]});
		reindeerEl.appendChild(frontLeg);

		let backLeg = document.createElement('a-entity');
		backLeg.setAttribute('anileg', '');
		backLeg.setAttribute('position', {x: 5.7, y: -3.1, z: 0});

		let backLegTopEl = document.createElement('a-entity');
		backLegTopEl.setAttribute('lathe', '');
		backLegTopEl.setAttribute('scale', {x: 2.3, y: .7, z: 1.4});
		backLegTopEl.setAttribute('rotation', {x: 0, y: 0, z: 210});
		backLegTopEl.setAttribute('position', {x: -1, y: 1, z: 0});
		backLeg.appendChild(backLegTopEl);

		let backLegBottomEl = document.createElement('a-entity');
		backLegBottomEl.setAttribute('lathe', '');
		backLegBottomEl.setAttribute('scale', {x: .8, y: .9, z: .6});
		backLegBottomEl.setAttribute('rotation', {x: 0, y: 0, z: 170});
		backLegBottomEl.setAttribute('position', {x: .3, y: -1.3, z: 0});
		backLeg.appendChild(backLegBottomEl);

		backLeg.setAttribute('position', {z: backLegZ[i]});
		reindeerEl.appendChild(backLeg);
	}

	let reindeerTailEl = document.createElement('a-entity');
	reindeerTailEl.setAttribute('lathe', '');
	reindeerTailEl.setAttribute('scale', {x: 1, y: .4, z: 1});
	reindeerTailEl.setAttribute('rotation', {x: 0, y: 0, z: -60});
	reindeerTailEl.setAttribute('position', {x: 5, y: -2.4, z: 0});
	reindeerEl.appendChild(reindeerTailEl);

	let reindeerNoseEl = document.createElement('a-entity');
	reindeerNoseEl.setAttribute('sphere', {color: rudolf ? colours.red : colours.black});
	reindeerNoseEl.setAttribute('scale', {x: .3, y: .3, z: .3});
	reindeerNoseEl.setAttribute('position', {x: -2.8, y: -1.1, z: 0});
	reindeerEl.appendChild(reindeerNoseEl);

	if (rudolf) {
		let rudolfNoseEl = document.createElement('a-entity');
		rudolfNoseEl.setAttribute('sphere', {color: colours.red})
		rudolfNoseEl.setAttribute('scale', {x: .3, y: .3, z: .3});
		rudolfNoseEl.setAttribute('position', {x: -2.8, y: -1.1, z: 0});
		rudolfNoseEl.setAttribute('material', 'opacity: 0.3; color: #F33;');
		rudolfNoseEl.setAttribute('animation', 'property: scale; to: 2 2 2; loop: true; dur: 5000; direction: alternate');
		reindeerEl.appendChild(rudolfNoseEl);
	}

	let antlerData = [
		{
			rot: [30, 0, 0],
			pos: [0, .5, 0.4],
			scale: [.2, .5, 0.2]
		},
		{
			rot: [40, 0, 20],
			pos: [0, 2.2, 1.3],
			scale: [0.2, .4, 0.2]
		},
		{
			rot: [-9, 0, 15],
			pos: [0, 2.2, 1.3],
			scale: [0.2,.3, 0.2]
		},
		{
			rot: [-30, 0, 0],
			pos: [0, .5, -.4],
			scale: [0.2, 0.5, 0.2]
		},
		{
			rot: [-40, 0, 20],
			pos: [0, 2.2, -1.3],
			scale: [0.2, 0.4, 0.2]
		},
		{
			rot: [9, 0, 15],
			pos: [0, 2.2, -1.3],
			scale: [0.2, 0.3, 0.2]
		},
	]

	for (let i = 0; i < antlerData.length; i++) {
		let antlerBit = document.createElement('a-entity');
		antlerBit.setAttribute('lathe', {color: colours.black})
		antlerBit.setAttribute('scale', {x: antlerData[i].scale[0], y: antlerData[i].scale[1], z: antlerData[i].scale[2]});
		antlerBit.setAttribute('position', {x: antlerData[i].pos[0], y: antlerData[i].pos[1], z: antlerData[i].pos[2]});
		antlerBit.setAttribute('rotation', {x: antlerData[i].rot[0], y: antlerData[i].rot[1], z: antlerData[i].rot[2]});
		reindeerEl.appendChild(antlerBit);
	}

	targetEl.appendChild(reindeerEl);
	
}