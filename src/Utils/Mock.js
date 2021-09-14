const productos = [
    { id: 1, titulo: 'Torta Multicolor', precio: '1000', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-arcoiris.png'},
    { id: 2, titulo: 'Torta Chocolate', precio: '1500', imagen:'https://www.bettycrocker.lat/wp-content/uploads/2020/12/BClatam-recipe-pastel-de-chocolate-con-glaseado-de-chocolate.png'},
    { id: 3, titulo: 'Torta tiramisú', precio: '2000', imagen: 'https://www.bettycrocker.lat/wp-content/uploads/2021/04/BCL-Tiramisu_Recipe_770x514.jpg'}
  ];


export  const get = new Promise((res,rej) => {
    let respuesta = '200';
    if (respuesta === '200'){
      setTimeout(() => {
        res(productos);
      }, 2000);
    } else {
        rej('404')
    }
})
