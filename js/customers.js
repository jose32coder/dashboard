const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeTogglerMobile = document.querySelector('.theme-toggler-mobile');
const blurBody = document.querySelector('#blur');
const popUs = document.querySelector('.pop-up');
const markOrder = document.querySelector('#mark-order');
const orderSelect = document.querySelectorAll('.filter ul li');
const selectDiv = document.querySelectorAll('#pop-up ul li');
let progressBar = document.querySelector("#progress-bar");
const btnPopUp = document.querySelector('.filter-agg');
const closeBtnPopUp = document.querySelector('.btn-modal');
const card = document.querySelectorAll('.card');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
const registerDiv =  document.querySelector('#card1')
const serviceDiv =  document.querySelector('#card2');
const inputSearch = document.querySelector('#search');
const celdas = document.getElementsByTagName('tr');




var widthBar = 0;




// LLamar funciones necesarias

mostrarMenu()
cambiarTemaMobile();
moveOrder();

// Funcion para animar el apartado del pop-up




// Muestra y cierra el modal en el html
function toggleModal(){
    blurBody.classList.toggle('active')
    popUs.classList.toggle('active')
    gsapRegisterOff();
    gsapServicesOff();
    ocultarDivTwo();
    progressBar.style.width = 0 + "%"
};
  

// Mostrar barra lateral
function mostrarMenu(){
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    })

    // Ocultar barra lateral
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    })
}

// Cambiar modo nocturno en celulares

function cambiarTemaMobile(){
    themeTogglerMobile.addEventListener('click', () =>{
        document.body.classList.toggle('dark-theme-variables');
        const dark = document.querySelector('.sidebar');
        dark.classList.add('option2');
    
        themeTogglerMobile.querySelector('span:nth-child(1)').classList.toggle('active');
        themeTogglerMobile.querySelector('span:nth-child(2)').classList.toggle('active');
    
        if (document.body.classList.contains('dark-theme-variables')) {
            localStorage.setItem('dark-mode', 'true');
        }
        else{
            localStorage.setItem('dark-mode', 'false');
        }
    });
    
    
    if (localStorage.getItem("dark-mode") === null){
        localStorage.setItem("dark-mode", "false"); 
    }
    let localData = localStorage.getItem("dark-mode"); 
    if (localData === "false"){
        
        document.body.classList.remove('dark-theme-variables');
        themeTogglerMobile.querySelector('span:nth-child(1)').classList.add('active');
        themeTogglerMobile.querySelector('span:nth-child(2)').classList.remove('active'); 
    }
    else if (localData === "true"){
    
        document.body.classList.add('dark-theme-variables');
        themeTogglerMobile.querySelector('span:nth-child(1)').classList.remove('active');
        themeTogglerMobile.querySelector('span:nth-child(2)').classList.add('active');
    }
}




function moveOrder(event){
    if (markOrder.style.left == 0 || markOrder.style.width == 0) {
        markOrder.style.left = 10 + "px";
        markOrder.style.width = 310 + "px";
    }
    else{
        markOrder.style.left = event.offsetLeft + "px";
        markOrder.style.width = event.offsetWidth + "px";
    }
}

orderSelect.forEach(select =>{
    select.addEventListener('click', e =>{
        e.preventDefault();
        moveOrder(e.target);
        console.log(e.target);
    })
})


// EVENTO PARA EL INPUT BUSQUEDA

inputSearch.addEventListener('keyup', e =>{
    let text = e.target.value;
    console.log(text);
    let er = new RegExp(text, "i");

    for(let i = 0; i < celdas.length; i++){
        let valor = celdas[i]
        console.log(valor)
        if(er.test(valor.innerText)){
            valor.classList.remove('ocultar');
        }
        else{
            
            console.log(valor[0]);
            valor.classList.add('ocultar')
        }
    };
});



$(document).ready( function () {
    $('#table_id').DataTable(
        {
            language:{
                url: `../js/jQuery/DataTables.config.json`
              },
              responsive: true
        }
    );
} );




// ANIMACION DE NEW USER

selectDiv.forEach(select =>{
    const id = setInterval(
        btnPopUp.addEventListener('click', () =>{
            ocultarDivTwo();
            progressBar.style.width = 50 + "%";
            progressBarActive(false)
            gsapRegister();
            gsapServicesOff();

        }),
        select.addEventListener('click', e =>{
            console.log(e.target)
            if(e.target.id === "register"){
                console.log(e.target)
                if(widthBar >= 100){
                    clearInterval(id);
                }
                else if(widthBar <= 50){
                    gsapRegister();
                    gsapServicesOff();
                    ocultarDivTwo();
                    widthBar++;
                    progressBar.style.width = 50 + "%";
                    progressBarActive(false);
                }
            }
            if(e.target.id === "service"){
                console.log(e.target)
                gsapRegisterOff();
                gsapServices();
                ocultarDivOne();
                if(widthBar <= 50){
                    progressBar.style.width = 100 + "%";
                    progressBarActive(true);
                }
            }
        }),
        btnNext.addEventListener('click', e =>{
            gsapRegisterOff();
            gsapServices();
            ocultarDivOne();
            progressBar.style.width = 100 + "%";
            progressBarActive(true);
        }),
        btnBack.addEventListener('click', e =>{
            gsapRegister();
            gsapServicesOff;
            ocultarDivTwo();
            progressBar.style.width = 50 + "%";
            progressBarActive(false);
        })
    );

})

btnNext.addEventListener('click', e =>{
    ocultarDivOne();
    gsapRegisterOff();
    gsapServices();
})
btnBack.addEventListener('click', e =>{
    ocultarDivTwo();
    gsapRegister();
    gsapServicesOff();
})



function gsapRegister() {
    let animatedRegister = gsap.timeline({
        repeat: 0
    });
    animatedRegister.to('.title-register', {
        delay: 0,
        transition: .5,
        opacity: 1,
        y: 0,
        ease: 'ease.InOut',
    });
    animatedRegister.to('.inputs1', { 
        delay: 0,
        transition: .5,
        opacity: 1,
        y: -10,
        ease: 'ease.InOut',
    }, '-=.2');
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
        y: -10,
        duration: .5,
        ease: 'ease.InOut',
        transition: 1,
        opacity: 1,
        visibility: 'visible'
    }, '-=.9');
}



function gsapRegisterOff() {
    let animatedRegister = gsap.timeline({
        repeat: 0
    });
    animatedRegister.to('.title-register', {
        delay: 0,
        transition: 1.5,
        opacity: 0,
        y: -20,
        ease: 'ease.InOut',
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
}


function gsapServices() {
    let animatedServices = gsap.timeline({
        repeat: 0
    });
    animatedServices.to('.title-services', {
        delay: 0,
        transition: 1.5,
        y: 10,
        opacity: 1,
        ease: 'ease.InOut',
    });
    animatedServices.to('textarea', {
        delay: 0,
        transition: 1.5,
        x: 0,
        opacity: 1,
        ease: 'ease.InOut',
    }, '-=1');
    animatedServices.to('.inputs-btn2', {
        delay: 0,
        transition: 1,
        y: 0,
        opacity: 1,
        ease: 'ease.InOut',
    }, '-=1.5');
}
function gsapServicesOff() {
    let animatedServices = gsap.timeline({
        repeat: 0
    });
    animatedServices.to('.title-services', {
        delay: 0,
        transition: 1.5,
        y: 0,
        opacity: 0,
        ease: 'ease.InOut',
    });
    animatedServices.to('textarea', {
        delay: 0,
        transition: 1.5,
        x: 50,
        opacity: 0,
        ease: 'ease.InOut',
    }, '-=1.3');
    animatedServices.to('.inputs-btn2', {
        delay: 0,
        transition: 1.5,
        y: -50,
        opacity: 0,
        ease: 'ease.InOut',
    }, '-=1.5');
}





function ocultarDivOne(){
    serviceDiv.classList.remove('inactive');
    serviceDiv.classList.add('active');
    registerDiv.classList.add('inactive');
    registerDiv.classList.remove('active');
}
function ocultarDivTwo(){
    serviceDiv.classList.remove('active');
    serviceDiv.classList.add('inactive');
    registerDiv.classList.add('active');
    registerDiv.classList.remove('inactive');
}


function progressBarActive(check) {
    if (check == true) {
        progressBar.classList.add('activeC')
    }
    else{
        progressBar.classList.remove('activeC')
    }
}









const Orders = [   
    {
        cedula: '27672468',
        clientName: 'José Manuel López',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Pending', 
        dateFin: '10/11/2020'
    },
    {
        cedula: '16751897',
        clientName: 'Jesús Alberto Mejias',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Declined',
        dateFin: '10/11/2020'
    },
    {
        cedula: '2659954',
        clientName: 'Jesús Mura',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Pending',
        dateFin: '10/11/2020'
    },
    {
        cedula: '10223566',
        clientName: 'Alí Camacaro',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Delivered',
        dateFin: '10/11/2020'
    },
    {
        cedula: '15867076',
        clientName: 'Yngrid López',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Delivered',
        dateFin: '10/11/2020'
    },
    {
        cedula: '13075966',
        clientName: 'Cristihan Josue Cornieles',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Pending',
        dateFin: '10/11/2020'
    },
    {
        cedula: '12345687',
        clientName: 'Pepito Clavo un Clavito',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Declined',
        dateFin: '10/11/2020'
    },
    {
        cedula: '27672468',
        clientName: 'José Manuel López',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Pending', 
        dateFin: '10/11/2020'
    },
    {
        cedula: '16751897',
        clientName: 'Jesús Alberto Mejias',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Declined',
        dateFin: '10/11/2020'
    },
    {
        cedula: '2659954',
        clientName: 'Jesús Mura',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Pending',
        dateFin: '10/11/2020'
    },
    {
        cedula: '10223566',
        clientName: 'Alí Camacaro',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Delivered',
        dateFin: '10/11/2020'
    },
    {
        cedula: '15867076',
        clientName: 'Yngrid López',
        problem: 'Un problema',
        date: '10/10/2020',
        price: '25$',
        shipping: 'Delivered',
        dateFin: '10/11/2020'
    }
    ]

    Orders.forEach(order =>{
        const tr = document.createElement('tr');
        const trContent = `
                        <td class="containt__text">${order.cedula}</td>
                        <td class="containt__text">${order.clientName}</td>
                        <td>${order.problem}</td>
                        <td>${order.date}</td>
                        <td>${order.price}</td>
                        <td class='${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : order.shipping === 'Delivered' ? 'success': 'primary'}'>${order.shipping}</td>
                        <td class=''><span class="material-symbols-sharp cursor-pointer">settings</span> <span class="material-symbols-sharp cursor-pointer">delete</span></td>
                        `
        tr.innerHTML = trContent;
        tr.classList.add('containt-notes')
        document.querySelector('table tbody').appendChild(tr)
    })