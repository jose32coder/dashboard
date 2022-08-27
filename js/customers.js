const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeTogglerMobile = document.querySelector('.theme-toggler-mobile');
const themeToggler = document.querySelector('.theme-toggler');
const btn1 = document.querySelector('.all-order');
const btn2 = document.querySelector('.declined');
const btn3 = document.querySelector('.pending');
const btn4 = document.querySelector('.delivered');




// LLamar funciones

mostrarMenu()
cambiarTema()
evitarRecarga()






// Muestra y cierra el modal en el html
function toggleModal(){
    const blurBody = document.querySelector('#blur');
    blurBody.classList.toggle('active')
    const popUs = document.querySelector('.pop-up');
    popUs.classList.toggle('active')
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

// Cambiar modo nocturno en pantallas grandes

function cambiarTema(){
    themeToggler.addEventListener('click', () =>{
        document.body.classList.toggle('dark-theme-variables');
        const dark = document.querySelector('.sidebar');
        dark.classList.add('option2');

        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    });

    // Cambiar modo nocturno en responsive

    themeTogglerMobile.addEventListener('click', () =>{
        document.body.classList.toggle('dark-theme-variables');
        const dark = document.querySelector('.sidebar');
        dark.classList.add('option2');

        themeTogglerMobile.querySelector('span:nth-child(1)').classList.toggle('active');
        themeTogglerMobile.querySelector('span:nth-child(2)').classList.toggle('active');
    });
}

function evitarRecarga(){
    btn1.addEventListener('click', e => {
        e.preventDefault()
    });
    btn2.addEventListener('click', e => {
        e.preventDefault()
    });
    btn3.addEventListener('click', e => {
        e.preventDefault()
    });
    btn4.addEventListener('click', e => {
        e.preventDefault()
    });
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
    }
    ]

    Orders.forEach(order =>{
        const tr = document.createElement('tr');
        const trContent = `
                        <td>${order.cedula}</td>
                        <td>${order.clientName}</td>
                        <td>${order.problem}</td>
                        <td>${order.date}</td>
                        <td>${order.price}</td>
                        <td class='${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : order.shipping === 'Delivered' ? 'success': 'primary'}'>${order.shipping}</td>
                        <td class=''><span class="material-symbols-sharp cursor-pointer">settings</span> <span class="material-symbols-sharp cursor-pointer">expand_less</span></td>
                        `
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr)
    })