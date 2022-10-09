const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const blurBody = document.querySelector('#blur');
const popUs = document.querySelector('.pop-up');
const inputSearch = document.querySelector('#search');
const celdas = document.getElementsByTagName('tr');


// LLamar funciones

mostrarMenu();





// Muestra y cierra el modal en el html
function toggleModal(){
    const blurBody = document.querySelector('#blur');
    blurBody.classList.toggle('active')
    const popUs = document.querySelector('.pop-up');
    popUs.classList.toggle('active');
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
};

// Cambiar modo nocturno en pantallas grandes




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


const Orders = [   
    {
        numero: '1',
        numberItem: '24456',
        nameOfProduct: 'Mica Samsung J5',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32', 
        dateFin: '10/11/2020'
    },
    {
        numero: '2',
        numberItem: '12368',
        nameOfProduct: 'Pantalla Huawei P30',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '58',
        dateFin: '10/11/2020'
    },
    {
        numero: '3',
        numberItem: '99001',
        nameOfProduct: 'USB tipo C',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32',
        dateFin: '10/11/2020'
    },
    {
        numero: '4',
        numberItem: '00567',
        nameOfProduct: 'Router TP-Link 3364',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '10',
        dateFin: '10/11/2020'
    },
    {
        numero: '5',
        numberItem: '32684',
        nameOfProduct: 'Forros Samsung',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '10',
        dateFin: '10/11/2020'
    },
    {
        numero: '6',
        numberItem: '64995',
        nameOfProduct: 'Pin de carga Xiaomi',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32',
        dateFin: '10/11/2020'
    },
    {
        numero: '7',
        numberItem: '97451',
        nameOfProduct: 'Cargador iPhone',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '58',
        dateFin: '10/11/2020'
    },
    {
        numero: '1',
        numberItem: '24456',
        nameOfProduct: 'Mica Samsung J5',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32', 
        dateFin: '10/11/2020'
    },
    {
        numero: '2',
        numberItem: '12368',
        nameOfProduct: 'Pantalla Huawei P30',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '58',
        dateFin: '10/11/2020'
    },
    {
        numero: '3',
        numberItem: '99001',
        nameOfProduct: 'USB tipo C',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32',
        dateFin: '10/11/2020'
    },
    {
        numero: '4',
        numberItem: '00567',
        nameOfProduct: 'Router TP-Link 3364',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '10',
        dateFin: '10/11/2020'
    },
    {
        numero: '5',
        numberItem: '32684',
        nameOfProduct: 'Forros Samsung',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '10',
        dateFin: '10/11/2020'
    },
    {
        numero: '6',
        numberItem: '64995',
        nameOfProduct: 'Pin de carga Xiaomi',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32',
        dateFin: '10/11/2020'
    },
    {
        numero: '7',
        numberItem: '97451',
        nameOfProduct: 'Cargador iPhone',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '58',
        dateFin: '10/11/2020'
    },
    {
        numero: '1',
        numberItem: '24456',
        nameOfProduct: 'Mica Samsung J5',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32', 
        dateFin: '10/11/2020'
    },
    {
        numero: '2',
        numberItem: '12368',
        nameOfProduct: 'Pantalla Huawei P30',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '58',
        dateFin: '10/11/2020'
    },
    {
        numero: '3',
        numberItem: '99001',
        nameOfProduct: 'USB tipo C',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32',
        dateFin: '10/11/2020'
    },
    {
        numero: '4',
        numberItem: '00567',
        nameOfProduct: 'Router TP-Link 3364',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '10',
        dateFin: '10/11/2020'
    },
    {
        numero: '5',
        numberItem: '32684',
        nameOfProduct: 'Forros Samsung',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '10',
        dateFin: '10/11/2020'
    },
    {
        numero: '6',
        numberItem: '64995',
        nameOfProduct: 'Pin de carga Xiaomi',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '32',
        dateFin: '10/11/2020'
    },
    {
        numero: '7',
        numberItem: '97451',
        nameOfProduct: 'Cargador iPhone',
        model: 'Modelo',
        price: '25$',
        cost: '10$',
        stock: '58',
        dateFin: '10/11/2020'
    }
    ]

    Orders.forEach(order =>{
        const tr = document.createElement('tr');
        const trContent = `
                        <td>${order.numero}</td>
                        <td>${order.numberItem}</td>
                        <td>${order.nameOfProduct}</td>
                        <td>${order.model}</td>
                        <td>${order.price}</td>
                        <td>${order.cost}</td>
                        <td>${order.stock}</td>
                        <td class=''><span class="material-symbols-sharp cursor-pointer" onclick="toggleModal()">settings</span></td>
                        `
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr)
    })