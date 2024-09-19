// Simulación del JSON con varios items
const jsonData = [
    { name: 'Item 1', description: 'Descripción del Item 1' },
    { name: 'Item 2', description: 'Descripción del Item 2' },
    { name: 'Item 3', description: 'Descripción del Item 3' },
    { name: 'Item 4', description: 'Descripción del Item 4' },
    { name: 'Item 5', description: 'Descripción del Item 5' },
    { name: 'Item 6', description: 'Descripción del Item 6' },
    { name: 'Item 7', description: 'Descripción del Item 7' },
    { name: 'Item 8', description: 'Descripción del Item 8' }
  ];

const data_location = "/data/productos.json"

const getData = async () => {
    const dataObject = await fetch(data_location);
    const data = await dataObject.json();
    return data
}


const mapData = async () => {
    const data = await getData();
    console.log(data)

    const gridContainer = document.getElementById('item-container');
    
    
    data.map(item => {
    
      const div = document.createElement('div');
      div.classList.add('grid-item');
      
      div.innerHTML = `
      <div class="items_img__container">
        <img class="items_img" src=${item.src}></img>
      </div>
      <div>
        <h3 class="item_name">${item.nombre}</h3>
        <h3 class="item_name">₡${item.precio}</h3>
      </div>
      `;
    
      gridContainer.appendChild(div);
    });
}


mapData();

  