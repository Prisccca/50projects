const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile-img')
const nome = document.getElementById('nome')
const date = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgText = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)


//dados aserem inseridos
function getData() {

    header.innerHTML = '<img src="./img/pexels-max-vakhtbovych-6077368.jpg" alt=""/>'
    title.innerHTML = 'Lorem, ipsum dolor sit amet'
    excerpt.innerHTML = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium?'

    profileImg.innerHTML = '<img src="./img/pexels-tony-jamesandersson-1674752.jpg" alt="">'
    nome.innerHTML = 'Maria Silva'
    date.innerHTML = 'Aug 03,2022'

    animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animatedBgText.forEach((bg) => bg.classList.remove('animated-bg-text'))

}