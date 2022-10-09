const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const markOrder = document.querySelector('#mark-order');
const orderSelect = document.querySelectorAll('.filter ul li');
const btnPopUp = document.querySelector('#button1');
const btnPopUp2 = document.querySelector('#button2');
const themeTogglerMobile = document.querySelector('.theme-toggler-mobile');
const inputSearch = document.querySelector('#search');
let progressBar = document.querySelector("#progress-bar");
let progressBar2 = document.querySelector("#progress-bar2");
const selectDiv = document.querySelector('#pop-up ul li');
const celdas = document.getElementsByTagName('tr');
const blurBody = document.querySelector('#blur');
const popUp = document.querySelector('.pop-up');
const popUp2 = document.querySelector('#pop-up2');




mostrarMenu();
moveOrder()






function toggleModal(){
    blurBody.classList.toggle('active');
    popUp.classList.toggle('active');
    progressBar.style.width = 0 + "%"
};

function toggleModal2(){
    blurBody.classList.toggle('active');
    popUp2.classList.toggle('active');
    progressBar2.style.width = 0 + "%"
};





function mostrarMenu(){
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    })

    // Ocultar barra lateral
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    })
}

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


// Evento para el input de busqueda

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




// Relleno de la barra superior de la ventana modal

const id = setInterval(
    btnPopUp.addEventListener('click', () =>{
        progressBar.style.width = 100 + "%";
    }),
)

const id2 = setInterval(
    btnPopUp2.addEventListener('click', () =>{
        progressBar2.style.width = 100 + "%";
    }),
)



// Paginacion de tabla con jQuery

$(document).ready( function () {
    $('.table').DataTable(
        {
            language:{
                url: `../js/jQuery/DataTables.config.json`
              },
              "pageLength": 5
        }
    );
} );


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
        id: '1',
        descriptionM: 'Description Model 1',
        idMarca: '04241113325',
        status: 'Activo', 
    },
    {
        id: '2',
        descriptionM: 'Description Model 2',
        idMarca: '04241113325',
        status: 'Activo',
    },
    {
        id: '3',
        descriptionM: 'Description Model 3',
        idMarca: '04241113325',
        status: 'Activo',
    },
    {
        id: '4',
        descriptionM: 'Description Model 4',
        idMarca: '04241113325',
        status: 'Activo',
    },
    {
        id: '5',
        descriptionM: 'Description Model 5',
        idMarca: '04241113325',
        status: 'Inactivo',
    },
    {
        id: '6',
        descriptionM: 'Description Model 6',
        idMarca: '04241113325',
        status: 'Activo',
    },
    {
        id: '7',
        descriptionM: 'Description Model 7',
        idMarca: '04241113325',
        status: 'Inactivo',
    },
    {
        id: '8',
        descriptionM: 'Description Model 8',
        idMarca: '04241113325',
        status: 'Activo', 
    },
    {
        id: '9',
        descriptionM: 'Description Model 9',
        idMarca: '04241113325',
        status: 'Inactivo',
    },
    {
        id: '10',
        descriptionM: 'Description Model 10',
        idMarca: '04241113325',
        status: 'Inactivo',
    }
    ]

    Orders.forEach(order =>{
        const tr = document.createElement('tr');
        const trContent = `
                        <td class="containt__text tr1">${order.id}</td>
                        <td class="containt__text tr1">${order.descriptionM}</td>
                        <td>${order.idMarca}</td>
                        <td class='tr1 ${order.status === 'Activo' ? 'success' : order.status === 'Inactivo' ? 'danger': ''}'>${order.status}</td>
                        <td class='tr1'><span class="material-symbols-sharp cursor-pointer">settings</span> <span class="material-symbols-sharp cursor-pointer">delete</span></td>
                        `
        tr.innerHTML = trContent;
        tr.classList.add('containt-notes')
        document.querySelector('table tbody').appendChild(tr)
    })

const Models = [   
    {
        id: '1',
        descriptionB: 'Description Brand 1',
        status: 'Activo', 
    },
    {
        id: '2',
        descriptionB: 'Description Brand 2',
        status: 'Activo',
    },
    {
        id: '3',
        descriptionB: 'Description Brand 3',
        status: 'Activo',
    },
    {
        id: '4',
        descriptionB: 'Description Brand 4',
        status: 'Activo',
    },
    {
        id: '5',
        descriptionB: 'Description Brand 5',
        status: 'Inactivo',
    },
    {
        id: '6',
        descriptionB: 'Description Brand 6',
        status: 'Activo',
    },
    {
        id: '7',
        descriptionB: 'Description Brand 7',
        status: 'Inactivo',
    },
    {
        id: '8',
        descriptionB: 'Description Brand 8',
        status: 'Activo', 
    },
    {
        id: '9',
        descriptionB: 'Description Brand 9',
        status: 'Inactivo',
    },
    {
        id: '10',
        descriptionB: 'Description Brand 10',
        status: 'Inactivo',
    }
    ]

    Models.forEach(order =>{
        const tr = document.createElement('tr');
        const trContent = `
                        <td class="containt__text">${order.id}</td>
                        <td class="containt__text">${order.descriptionB}</td>
                        <td class='${order.status === 'Activo' ? 'success' : order.status === 'Inactivo' ? 'danger': ''}'>${order.status}</td>
                        <td class=''><span class="material-symbols-sharp cursor-pointer">settings</span> <span class="material-symbols-sharp cursor-pointer">delete</span></td>
                        `
        tr.innerHTML = trContent;
        tr.classList.add('containt-notes')
        document.querySelector('.table2 tbody').appendChild(tr)
    })