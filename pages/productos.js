const data_location = "/data/productos_ropa.json" // direccion del archivo JSON que contiene la ropa
const data_location2 = "/data/productos_accesorios.json"

const getData = async () => { // Funcion para cargar los datos de el archivo JSON en la variable data
    const dataObject1 = await fetch(data_location);
    const dataObject2 = await fetch(data_location2);
    const ropa = await dataObject1.json(); // <- variable data
    const accesorios = await dataObject2.json();
    return [ropa, accesorios] // devolvemos la variable
}

const mapData = async () => { // Funcion para mapear los datos de la variable data
    const data = await getData();
    console.log(data)

    const gridContainer = document.getElementById('item-container');
    const gridContainer2 = document.getElementById('item-container_acc');
    
    
    data[0].map(item => { // Generamos una etiqueta div para mostrar los cuadros con la ropa
    
      const div = document.createElement('div'); // se crea la etiqueta
      div.classList.add('grid-item');
      
      // especificamos los datos de la ropa (direccion de la imagen - nombre del articulo - precio)
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

    data[1].map(item => { // Generamos una etiqueta div para mostrar los cuadros con los accesorios
    
        const div = document.createElement('div'); // se crea la etiqueta
        div.classList.add('grid-item');
        
        // especificamos los datos de los accesorios (direccion de la imagen - nombre del articulo - precio)
        div.innerHTML = `
        <div class="items_img__container">
          <img class="items_img" src=${item.src}></img>
        </div>
        <div>
          <h3 class="item_name">${item.nombre}</h3>
          <h3 class="item_name">₡${item.precio}</h3>
        </div>
        `;
        gridContainer2.appendChild(div);
      });
}


mapData(); // ejecutamos la funcion

  