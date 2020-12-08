
/*
EXTRUSION component
*/

AFRAME.registerComponent('extrusion', {
	schema: {
		color: {
			default: colours.white
		},
		shape: {
			default: letterH
		},
		depth: {
			default: 1
		},
		bevel: {
			default: false
		},
		wire: {
			default: false
		}
	},

	update: function () {

		function extrudeSettings(depth, bevel) {
			let ret = {};
			let bevelSettings = { bevelSegments: 2, steps: 2, bevelSize: depth / 10, bevelThickness: depth / 10 };
			ret.depth = depth;
			ret.bevelEnabled = bevel;
			if (bevel) {
				ret = {
					...ret,
					...bevelSettings
				}
			}
			return ret;
		}

		let material = new THREE.MeshBasicMaterial({
			color: this.data.color,
			wireframe: this.data.wire
		});

		let geometry = new THREE.ExtrudeBufferGeometry(this.data.shape, extrudeSettings(this.data.depth, this.data.bevel));

		this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
	},

	remove: function () {
		this.el.removeObject3D('mesh');
	}
});

/*
SPHERE component
*/

AFRAME.registerComponent('sphere', {
	schema: {
		color: {
			default: colours.white
		},
		size: {
			default: 1
		},
		wire: {
			default: false
		}
	},

	update: function () {

		const geometry = new THREE.SphereGeometry(this.data.size, 8, 8);

		let material = new THREE.MeshPhongMaterial({
			color: this.data.color,
			wireframe: this.data.wire
		});

		this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
	},

	remove: function () {
		this.el.removeObject3D('mesh');
	}
});

/*
LATHE component
*/

AFRAME.registerComponent('lathe', {
	multiple: true,

	schema: {
		color: {
			default: colours.tan
		},
		profile: {
			default: limbPoints
		},
		tickFunc: {
			default: function log(a, b) {
				return;
			}
		}
	},

	update: function () {

		const geometry = new THREE.LatheGeometry(this.data.profile);

		let material = new THREE.MeshPhongMaterial({
			color: this.data.color,
		});

		this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
	},

	tick: function (time, timeDelta) {
		this.data.tickFunc(time, timeDelta);
	},

	remove: function () {
		this.el.removeObject3D('mesh');
	}
});

/*
ANILEG component - for animating leg movement
*/

AFRAME.registerComponent('anileg', {
	multiple: true,
	clockwise: false,


	update: function () {

	},

	tick: function (time, timeDelta) {
		let prop = this.el.object3D.rotation.z;

		if (prop >= .5) {
			this.clockwise = true;
		}

		if (prop <= -.5) {
			this.clockwise = false;
		}

		if (this.clockwise) {
			this.el.object3D.rotation.z -= 0.01
		} else {
			this.el.object3D.rotation.z += 0.01
		}
	},

	remove: function () {
		this.el.removeObject3D('mesh');
	}
});

/*
ANIMATE component - generic animation holder
*/

AFRAME.registerComponent('animate-float', {
	multiple: true,
	schema: {
		startFrame: {
			default: 0
		},
		returnFrame: {
			default: 50
		}
	},

	init: function() {
		this.tick = AFRAME.utils.throttleTick(this.tick, 100, this);
	},

	update: function () {

	},

	tick: function () {
		this.doAnimation();
	},

	doAnimation: (function() {

		return function () {
			

		};
	}
		
	)(),

	remove: function () {
		this.el.removeObject3D('mesh');
	}
});

/*
ANIMATE WRAPPER component - master wrapper for all animations
*/

AFRAME.registerComponent('animate-wrapper', {

	init: function() {
		this.tick = AFRAME.utils.throttleTick(this.tick, 50, this);
	},

	update: function () {

	},

	tick: function () {
		if (animationFrame < 100) {
			animationFrame += 1;
		} else {
			animationFrame = 0;
		}

		console.log(animationFrame)

		this.doAnimations();

	},

	doAnimations: (function() {		

		return function () {

			if (animationFrame < 33) {
				reindeerPositions[4].object3D.position.y += 0.01;
			} else {
				reindeerPositions[4].object3D.position.y -= 0.005;
			}

			if (10 < animationFrame && animationFrame < 43) {
				reindeerPositions[3].object3D.position.y += 0.01;
			} else {
				reindeerPositions[3].object3D.position.y -= 0.005;
			}

			if (20 < animationFrame && animationFrame < 53) {
				reindeerPositions[2].object3D.position.y += 0.01;
			} else {
				reindeerPositions[2].object3D.position.y -= 0.005;
			}

			if (30 < animationFrame && animationFrame < 63) {
				reindeerPositions[1].object3D.position.y += 0.01;
			} else {
				reindeerPositions[1].object3D.position.y -= 0.005;
			}

			if (40 < animationFrame && animationFrame < 73) {
				reindeerPositions[0].object3D.position.y += 0.01;
			} else {
				reindeerPositions[0].object3D.position.y -= 0.005;
			}

			if (50 < animationFrame && animationFrame < 83) {
				santaEl.object3D.position.y += 0.01;
			} else {
				santaEl.object3D.position.y -= 0.005;
			}

			
			

		};
	}
		
	)()
});