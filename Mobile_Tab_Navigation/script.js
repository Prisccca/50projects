const contents = document.querySelectorAll('.content')
const listItens = document.querySelectorAll('nav ul li')

listItens.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    listItens.forEach(item => item.classList.remove('active'))
}