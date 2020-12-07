
// letters
const letterH = new THREE.Shape()
	.moveTo(0, 0)
	.lineTo(.8, 0)
	.lineTo(.8, .6)
	.lineTo(1.2, .6)
	.lineTo(1.2, 0)
	.lineTo(2.0, 0)
	.lineTo(2.0, 2)
	.lineTo(1.2, 2)
	.lineTo(1.2, 1.4)
	.lineTo(.8, 1.4)
	.lineTo(.8, 2)
	.lineTo(0, 2)
	.lineTo(0, 0)

// lettterO is a function so you can specify inner/outer diameters
function letterO(outerDia, innerDia) {

	const outerShape = new THREE.Shape()
		.moveTo(0, outerDia)
		.quadraticCurveTo(outerDia, outerDia, outerDia, 0)
		.quadraticCurveTo(outerDia, - outerDia, 0, - outerDia)
		.quadraticCurveTo(- outerDia, - outerDia, - outerDia, 0)
		.quadraticCurveTo(- outerDia, outerDia, 0, outerDia);

	const innerShape = new THREE.Shape()
		.moveTo(0, innerDia)
		.quadraticCurveTo(innerDia, innerDia, innerDia, 0)
		.quadraticCurveTo(innerDia, - innerDia, 0, - innerDia)
		.quadraticCurveTo(- innerDia, - innerDia, - innerDia, 0)
		.quadraticCurveTo(- innerDia, innerDia, 0, innerDia);

	return outerShape.holes.push(innerShape);
}

// sleigh
const sleigh = new THREE.Shape()
	.moveTo( 0, 0 )
	.absarc(0, 1, 1, 270 * Math.PI / 180, 90 * Math.PI / 180, true )
	.quadraticCurveTo( 2, 1.5, 3, 2.2 )
	.quadraticCurveTo( 4.5, 3.5, 7, 3 )
	.lineTo(6, 0.5)
	.quadraticCurveTo( 5.8, 0, 5.5, 0 )
	.lineTo(0, 0)

// sleds
const sled = new THREE.Shape()
	.moveTo( -0, 1 )
	.absarc(0, 1, 1, 180 * Math.PI / 180, 270 * Math.PI / 180, false )
	.lineTo(9, 0)
	.lineTo(9, 0.1)
	.lineTo(0, 0.1)
	.absarc(0, 1, 0.9, 270 * Math.PI / 180, 180 * Math.PI / 180, true )
	.lineTo( -0, 1 )

// profiles for lathe
// hat is a cone
const conePoints = [
	{x: -0.8, y: 0},
	{x: 0, y: 2.4}
];

// reindeer are made of a limb shape
const limbPoints = [
	{x: -0.3, y: 0},
	{x: -0.5, y: 0.8},
	{x: -0.28, y: 2.8},
	{x: -0.1, y: 4}
];

