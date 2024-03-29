//#region // *** Basics *** //
const cnv = document.querySelector('.cnv')
const ctx = cnv.getContext('2d', { alpha: false })
const width = 800
const height = 800
cnv.width = width
cnv.height = height
let doLoop = false
let time = 0
const delta = 1 / 60
//#endregion

//#region // *** Variables *** //

// const z = new Complex(0, 1)
// z.print('z:')
// const w = new Complex(0, 1)
// w.print('w:')

// const p = new Polynomial([0, 1, 0, 3, 0, 5])
const p = new Polynomial(new Array(10).fill().map(() => round(random([random(-1, 1) * random(10), 0]), 3)))
p.print('p:')

const n = new Newton(p)

const plane = new Plane({ x: 0, y: 0 }, { x: width, y: height }, { x: 1, y: 1 }, true)
//#endregion

//#region // *** Setup *** //
function setup() {
	translate(width * 0.5, height * 0.5)
	loop()
}
//#endregion

//#region // *** Update *** //
function update(t) {}
//#endregion

//#region // *** Render *** //
function render() {
	background('hsla(0, 0%, 20%, 1)')

	plane.background()
	// plane.render()
    //	plane.graph(p)
    plane.drawNewton(p, 3)
}
//#endregion

//#region // *** Loop *** //
setup()
function loop() {
	update((time += delta))
	render()
	;(doLoop && setTimeout(loop, delta * 1000)) || console.log(`%c${'loop ended'}`, 'font-size: 1rem; color: lightblue')
}
//#endregion
