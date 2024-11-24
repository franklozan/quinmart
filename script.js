document.addEventListener('DOMContentLoaded', () => {
    const productos = [
        { id: 1, name: '1023', category: 'COCA COLA', image: 'productos/1023.jpeg', description: '296 ml VIDRIO Caja*24uni', price: 'S/. 30' },
        { id: 2, name: '301', category: 'COCA COLA', image: 'productos/301.jpeg', description: '300 ml  Paquete*6uni', price: 'S/. 7.5' },
        { id: 3, name: '746', category: 'COCA COLA', image: 'productos/746.jpeg', description: '500 ml Paquete*15uni', price: 'S/. 31' },
        { id: 4, name: '1041', category: 'COCA COLA', image: 'productos/1041.jpeg', description: '625 ml VIDRIO Caja*12uni', price: 'S/. 26' },
        { id: 5, name: '1025', category: 'COCA COLA', image: 'productos/1025.jpeg', description: '1 L VIDRIO Caja*24uni', price: 'S/. 39' },
        { id: 6, name: '6183', category: 'COCA COLA', image: 'productos/6183.jpeg', description: '1.5 L Paquete*6uni', price: 'S/. 34' },
        { id: 7, name: '6181', category: 'COCA COLA', image: 'productos/6181.jpeg', description: '2 L Retornable Caja*8uni', price: 'S/. 41' },
        { id: 8, name: '5243', category: 'COCA COLA', image: 'productos/5243.jpeg', description: '2.25 L Paquete*6uni', price: 'S/. 42' },
        { id: 9, name: '1627', category: 'COCA COLA', image: 'productos/1627.jpeg', description: '3 L Paquete*4uni', price: 'S/. 39' },
        { id: 10, name: '102', category: 'INCA KOLA', image: 'productos/102.jpeg', description: '296 ml VIDRIO Caja*24uni', price: 'S/. 30' },
        { id: 11, name: '2037', category: 'INCA KOLA', image: 'productos/2037.jpeg', description: '300 ml  Paquete*6uni', price: 'S/. 7.5' },
        { id: 12, name: '747', category: 'INCA KOLA', image: 'productos/747.jpeg', description: '500 ml Paquete*15uni', price: 'S/. 31' },
        { id: 13, name: '114', category: 'INCA KOLA', image: 'productos/114.jpeg', description: '625 ml VIDRIO Caja*12uni', price: 'S/. 26' },
        { id: 14, name: '131', category: 'INCA KOLA', image: 'productos/131.jpeg', description: '1 L VIDRIO Caja*24uni', price: 'S/. 39' },
        { id: 15, name: '538', category: 'INCA KOLA', image: 'productos/538.jpeg', description: '1.5 L Paquete*6uni', price: 'S/. 34' },
        { id: 16, name: '101', category: 'INCA KOLA', image: 'productos/101.jpeg', description: '2 L Retornable Caja*8uni', price: 'S/. 41' },
        { id: 17, name: '873', category: 'INCA KOLA', image: 'productos/873.jpeg', description: '2.25 L Paquete*6uni', price: 'S/. 42' },
        { id: 18, name: '291', category: 'INCA KOLA', image: 'productos/291.jpeg', description: '3 L Paquete*4uni', price: 'S/. 39' }
        // Añade más productos aquí...
    ];
    
        const searchInput = document.getElementById('search');
        const categoryFilter = document.getElementById('categoryFilter');
        const productosDiv = document.getElementById('productos');
    
        const displayProductos = (productos) => {
            productosDiv.innerHTML = '';
            productos.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');
                productoDiv.innerHTML = `
                    <img src="${producto.image}" alt="${producto.name}">
                    <h3>${producto.name}</h3>
                    <p>${producto.description}</p>
                    <p>${producto.price}</p>
                    <p>${producto.category}</p>
                `;
                productosDiv.appendChild(productoDiv);
            });
        };
    
        const filterProductos = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const filteredProductos = productos.filter(producto => 
                (producto.name.toLowerCase().includes(searchTerm) || 
                producto.category.toLowerCase().includes(searchTerm)) && 
                (selectedCategory === '' || producto.category === selectedCategory)
            );
            displayProductos(filteredProductos);
        };
    
        searchInput.addEventListener('input', filterProductos);
        categoryFilter.addEventListener('change', filterProductos);
    
        displayProductos(productos);
    });
    