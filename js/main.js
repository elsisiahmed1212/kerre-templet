let nav_scrol = document.querySelector('.navbar')
let nav_link = document.querySelectorAll('.nav-link')
let show_arrow = document.querySelector('.arrow')
let work_images =Array.from(document.querySelectorAll('.work-image'))
let pop = document.querySelector('.pop')
let bg_display = document.querySelector('.bg-display')
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let close_icon = document.querySelector('#closeicon')
let nav_item =Array.from(document.querySelectorAll('.nav-link'))
let indexofimage ;




window.addEventListener('scroll',function(){
    if(window.scrollY>100){
        show_arrow.style.display = 'block';
    }
    else{
        show_arrow.style.display = 'none';
    }
    if(window.scrollY > 100){
        nav_scrol.style.backgroundColor = 'white'
        nav_link.forEach(lnik => lnik.style.color ='black')
    }
    else{
        nav_scrol.style.backgroundColor = 'transparent'
        nav_link.forEach(lnik => lnik.style.color ='white')
    }
})


work_images.forEach(function(element){
    element.addEventListener('click',function(e){
        pop.classList.replace('d-none','d-block')
        let url = e.target.getAttribute('src')
        bg_display.style.backgroundImage = `url(${url})`
        indexofimage = work_images.indexOf(e.target)
    })
});

next.addEventListener('click',netx_image)
function netx_image(){
    indexofimage++
    if (indexofimage == work_images.length) {
        indexofimage = 0
    }
    let url = work_images[indexofimage].getAttribute('src');
        bg_display.style.backgroundImage = `url(${url})`
    
}
prev.addEventListener('click',netx_image)
function prev_image(){
    indexofimage--
    if (indexofimage < 0) {
        indexofimage = work_images.length-1
    }
    let url = work_images[indexofimage].getAttribute('src');
    bg_display.style.backgroundImage = `url(${url})`
    
}
close_icon.addEventListener('click',close_image)
function close_image() {
    pop.classList.replace('d-block','d-none')
}
pop.addEventListener('click',function(e){
    close_image()
})
bg_display.addEventListener('click',function(e){
    e.stopPropagation()
})