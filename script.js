const list = document.querySelector('ul')
const showAllButton = document.querySelector('.showAll')
const discountButton = document.querySelector('.map-discount')
let myLi = ''


function showAll (productArray) {
    myLi = ''
productArray.forEach((product) =>{
    myLi += `
         <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>    
    `
})
list.innerHTML = myLi
}


function mapAllItems(){
    const newPrices = menuOptions.map ((product) => ({
        ...product,
        price: product.price * 0.9,
        
    }));
    
    
    showAll(newPrices)
}





showAllButton.addEventListener('click', () => showAll(menuOptions))
discountButton.addEventListener('click', mapAllItems )
