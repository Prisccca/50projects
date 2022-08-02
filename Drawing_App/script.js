
//toolbox
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');


//Canvas API
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


//variables initialized
let size = 10;
let isPressed = false
let color = 'black'
let x
let y


//events
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

//clear
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

//event color
colorEl.addEventListener('change', (e) => color = e.target.value)

//event and function size increase
increaseBtn.addEventListener('click', () => {
    size += 5

    if (size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

//event and function size decrease
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if (size > 5) {
        size = 5
    }
    updateSizeOnScreen()
})




//functions
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}


