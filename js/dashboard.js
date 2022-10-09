const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const btnM1 = document.querySelector('.btn-modal-1');
const btnM2 = document.querySelector('.btn-modal-2');
const modal = document.querySelector('.container-modal');
const disabledBtn = document.querySelector('.disabled');
const blurBody = document.querySelector('#blur');
const popUs = document.querySelector('.pop-up');
const inputSearch = document.querySelector('#search');
const celdas = document.querySelectorAll('.containt__text');
let progressBar = document.querySelector("#progress-bar");
const btnClose = document.querySelector('span.btn-modal');
const btnOpen = document.querySelector('.btn-open');
const btnMore = document.querySelector('.btn-more');


var widthBar = 0;


// Mostrar barra lateral
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

// Ocultar barra lateral
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})


// Validando campos de notas con jQuery

$(function(){
    $('#div-form').validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent(element))
            return false
        },
        rules:{
            titulo: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages:{
            titulo: {
                required: 'Campo vacio'
            },
            message: {
                required: 'Campo vacío'
            }
        }
    })
})





inputSearch.addEventListener('keyup', e =>{
    let text = e.target.value;
    console.log(text);
    let er = new RegExp(text, "i");

    for(let i = 0; i<celdas.length; i++){
        let valor = celdas[i]
        console.log(valor)
        if(er.test(valor.innerText)){
            valor.classList.remove('ocultar');
        }
        else{
            console.log(valor);
            valor.classList.add('ocultar')
        }
    };
});

btnClose.addEventListener('click', e => {
    progressBar.style.width = 0 + "%";
    gsapRegisterOff();
})
btnOpen.addEventListener('click', e => {
    progressBar.style.width = 100 + "%"
    gsapRegister();
})
btnMore.addEventListener('click', e => {
    progressBar.style.width = 100 + "%"
    gsapRegister();
})

function gsapRegister() {
    let animatedRegister = gsap.timeline({
        repeat: 0
    });
    animatedRegister.to('.inputs1', { 
        delay: 0,
        transition: .5,
        opacity: 1,
        y: -10,
        ease: 'ease.InOut',
    }, '');
    animatedRegister.to('.inputs2', { 
        delay: 0,
        transition: .5,
        opacity: 1,
        y: -10,
        ease: 'ease.InOut',
    }, '-=.3');
    animatedRegister.to('.inputs3', { 
        delay: 0,
        transition: .5,
        opacity: 1,
        y: -10,
        ease: 'ease.InOut',
    }, '-=.4');
    animatedRegister.to('.inputs-btn', { 
        delay: 0,
        y: 0,
        duration: .5,
        ease: 'ease.InOut',
        transition: 1,
        opacity: 1,
        visibility: 'visible'
    }, '');
    animatedRegister.to('.containt-notes', {
        delay: 0,
        y: 0,
        duration: .5,
        ease: 'ease.InOut',
        transition: 1,
        opacity: 1,
        visibility: 'visible'
    }, '')
}

function gsapRegisterOff() {
    let animatedRegister = gsap.timeline({
        repeat: 0
    });
    animatedRegister.to('.inputs1', { 
        delay: 0,
        transition: 1.5,
        opacity: 0,
        y: -20,
        ease: 'ease.InOut',
    }, '-=1');
    animatedRegister.to('.inputs2', { 
        delay: 0,
        transition: 1.5,
        opacity: 0,
        y: -20,
        ease: 'ease.InOut',
    }, '-=2');
    animatedRegister.to('.inputs3', { 
        delay: 0,
        transition: 1.5,
        opacity: 0,
        y: -20,
        ease: 'ease.InOut',
    }, '-=1.5');
    animatedRegister.to('.inputs-btn', { 
        delay: 0,
        transition: 1.5,
        y: -20,
        opacity: 0,
        ease: 'ease.InOut',
    }, '-=3');
    animatedRegister.to('.containt-notes', {
        delay: 0,
        transition: 1.5,
        y: -20,
        opacity: 0,
        ease: 'ease.InOut',
    }, '')
}



function toggleModal(){
    blurBody.classList.toggle('active')
    popUs.classList.toggle('active')
}



// Desactivar la totalidad de ventas, costos y ganancias




Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                    <td>${order.cedula}</td>
                    <td>${order.clientName}</td>
                    <td>${order.problem}</td>
                    <td>${order.date}</td>
                    <td>${order.price}</td>
                    <td class='${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : order.shipping === 'Delivered' ? 'success': 'primary'}'>${order.shipping}</td>
                    <td class='primary'><a href="./customers.html">Details</a></td>
                    `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)
})