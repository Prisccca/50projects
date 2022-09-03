const container = document.getElementById('container')
const colors = ['#C0C0C0', '#6495ED', '#00BFFF', '#00FFFF', '#7FFFD4', '#7FFF00', '#DAA520', '#FF00FF', '#FF69B4', '#B22222', '#FF8C00', '#FFFF00']
const SQUARES = 700

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
