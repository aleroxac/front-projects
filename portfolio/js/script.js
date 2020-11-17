/*global Power4*/

const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubbterBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubbterBand')
}))




const dockerBar = document.querySelector('.bar-docker')
const shellBar = document.querySelector('.bar-shell')
const pythonBar = document.querySelector('.bar-python')

var t1 = new TimelineLite()

t1.fromTo(dockerBar, .80, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.ease4})
    .fromTo(shellBar, .80, {width: `calc(0% - 6px)`}, {width: `calc(40% - 6px)`, ease: Power4.ease4})
    .fromTo(pythonBar, .80, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.ease4})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)




const showRequiredCategory = event => {
    const getId = event.id

    const links = document.querySelectorAll('.work-category button')
    for (i=0; i<links.length; i++) {
        if (links[i].hasAttribute('class')){
            links[i].classList.remove('active')
        }
    } 

    event.classList.add('active')
    const getCategory = document.querySelector(`.${getId}`)

    const categories = document.querySelectorAll('div[class ^= "category-"]')
    for (i=0; i<categories.length; i++) {
        if (categories[i].hasAttribute('class')){
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')
        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')
}
