const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const markOrder = document.querySelector('#mark-order');
const orderSelect = document.querySelectorAll('.filter ul li');
const btnPopUp = document.querySelector('.filter-agg');
const themeTogglerMobile = document.querySelector('.theme-toggler-mobile');
const inputSearch = document.querySelector('#search');
const btnReset = document.querySelector('.filter-search a')
let progressBar = document.querySelector("#progress-bar");
const selectDiv = document.querySelector('#pop-up ul li');
const celdas = document.getElementsByTagName('tr');
const blurBody = document.querySelector('#blur');
const popUs = document.querySelector('.pop-up');




mostrarMenu();
moveOrder()




function toggleModal(){
    blurBody.classList.toggle('active');
    popUs.classList.toggle('active');
    progressBar.style.width = 0 + "%"
};


// Paginacion de tabla con jQuery

$(document).ready( function () {
    $('#table_id').DataTable(
        {
            language:{
                url: `../js/jQuery/DataTables.config.json`
              }
        }
    );
} );



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


const id = setInterval(
    btnPopUp.addEventListener('click', () =>{
        progressBar.style.width = 100 + "%";
    })
)



function moveOrder(event){
    if (markOrder.style.left == 0 || markOrder.style.width == 0) {
        markOrder.style.left = 10 + "px";
        markOrder.style.width = 230 + "px";
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









const Orders = [   
    {
        cedula: '27672468',
        technicalName: 'José Manuel López',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo', 
    },
    {
        cedula: '16751897',
        technicalName: 'Jesús Alberto Mejias',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo',
    },
    {
        cedula: '2659954',
        technicalName: 'Jesús Mura',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo',
    },
    {
        cedula: '10223566',
        technicalName: 'Alí Camacaro',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo',
    },
    {
        cedula: '15867076',
        technicalName: 'Yngrid López',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Inactivo',
    },
    {
        cedula: '13075966',
        technicalName: 'Cristihan Josue Cornieles',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo',
    },
    {
        cedula: '12345687',
        technicalName: 'Pepito Clavo un Clavito',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Inactivo',
    },
    {
        cedula: '27672468',
        technicalName: 'José Manuel López',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo', 
    },
    {
        cedula: '16751897',
        technicalName: 'Jesús Alberto Mejias',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Inactivo',
    },
    {
        cedula: '2659954',
        technicalName: 'Jesús Mura',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Inactivo',
    },
    {
        cedula: '10223566',
        technicalName: 'Alí Camacaro',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo',
    },
    {
        cedula: '15867076',
        technicalName: 'Yngrid López',
        telephone: '04241113325',
        direction: 'Araure, Avenida 23, calle 1',
        status: 'Activo',
    }
    ]

    Orders.forEach(order =>{
        const tr = document.createElement('tr');
        const trContent = `
                        <td class="containt__text">${order.cedula}</td>
                        <td class="containt__text">${order.technicalName}</td>                        <td>${order.telephone}</td>
                        <td>${order.direction}</td>
                        <td class='${order.status === 'Activo' ? 'success' : order.status === 'Inactivo' ? 'danger': ''}'>${order.status}</td>
                        <td class=''><span class="material-symbols-sharp cursor-pointer">settings</span> <span class="material-symbols-sharp cursor-pointer">delete</span></td>
                        `
        tr.innerHTML = trContent;
        tr.classList.add('containt-notes')
        document.querySelector('table tbody').appendChild(tr)
    })