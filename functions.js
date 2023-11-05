function getCartValue(fieldId) {
    const cartField = document.getElementById(fieldId);
    const cartValue = cartField.innerText
    const value = parseFloat(cartValue)
    return value
}

function getCartName(fieldId) {
    const cartField = document.getElementById(fieldId);
    const cartValue = cartField.innerText
    return cartValue
}

const cart = {};
document.getElementById("product1-btn").addEventListener('click', addCart);
function addCart() {
    const value = getCartValue("productPrice1");
    const name = getCartName("productName1");
    const newPara = document.createElement("p")
    const cartDiv = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice1 = getCartValue("totalPrice")
    const total = totalPrice1 + value
    document.getElementById("totalPrice").innerText = total
    const totalPrice2 = getCartValue("totalPrice2")
    const total2 = totalPrice2 + value
    document.getElementById("totalPrice2").innerText = total2
    const productName = name; // Replace with the actual product name
    if (cart[productName]) {
        cart[productName]++;
    } else {
        cart[productName] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}




// function for 2nd button



document.getElementById("product2-btn").addEventListener('click', addCart2);
function addCart2() {
    const value = getCartValue("productPrice2");
    const name = getCartName("productName2");
    const newPara = document.createElement("p")
    const cartDiv = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice1 = getCartValue("totalPrice")
    const total = totalPrice1 + value
    document.getElementById("totalPrice").innerText = total
    const totalPrice2 = getCartValue("totalPrice2")
    const total2 = totalPrice2 + value
    document.getElementById("totalPrice2").innerText = total2
    const productName = name; // Replace with the actual product name
    if (cart[productName]) {
        cart[productName]++;
    } else {
        cart[productName] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}



// function for 3rd button



document.getElementById("product3-btn").addEventListener('click', addCart3);
function addCart3() {
    const value3 = getCartValue("productPrice3");
    const name3 = getCartName("productName3");
    const newPara3 = document.createElement("p")
    const cartDiv3 = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara3)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice3 = getCartValue("totalPrice")
    const total3 = totalPrice3 + value3
    document.getElementById("totalPrice").innerText = total3
    const totalPriceNew3 = getCartValue("totalPrice2")
    const totalNew3 = totalPriceNew3 + value3
    document.getElementById("totalPrice2").innerText = totalNew3
    const productName3 = name3; // Replace with the actual product name
    if (cart[productName3]) {
        cart[productName3]++;
    } else {
        cart[productName3] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}





// function for 4th button



document.getElementById("product4-btn").addEventListener('click', addCart3);
function addCart3() {
    const value3 = getCartValue("productPrice4");
    const name3 = getCartName("productName4");
    const newPara3 = document.createElement("p")
    const cartDiv3 = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara3)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice3 = getCartValue("totalPrice")
    const total3 = totalPrice3 + value3
    document.getElementById("totalPrice").innerText = total3
    const totalPriceNew3 = getCartValue("totalPrice2")
    const totalNew3 = totalPriceNew3 + value3
    document.getElementById("totalPrice2").innerText = totalNew3
    const productName3 = name3; // Replace with the actual product name
    if (cart[productName3]) {
        cart[productName3]++;
    } else {
        cart[productName3] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}




// function for 5th button



document.getElementById("product5-btn").addEventListener('click', addCart3);
function addCart3() {
    const value3 = getCartValue("productPrice5");
    const name3 = getCartName("productName5");
    const newPara3 = document.createElement("p")
    const cartDiv3 = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara3)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice3 = getCartValue("totalPrice")
    const total3 = totalPrice3 + value3
    document.getElementById("totalPrice").innerText = total3
    const totalPriceNew3 = getCartValue("totalPrice2")
    const totalNew3 = totalPriceNew3 + value3
    document.getElementById("totalPrice2").innerText = totalNew3
    const productName3 = name3; // Replace with the actual product name
    if (cart[productName3]) {
        cart[productName3]++;
    } else {
        cart[productName3] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}


// function for 6th button



document.getElementById("product6-btn").addEventListener('click', addCart3);
function addCart3() {
    const value3 = getCartValue("productPrice6");
    const name3 = getCartName("productName6");
    const newPara3 = document.createElement("p")
    const cartDiv3 = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara3)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice3 = getCartValue("totalPrice")
    const total3 = totalPrice3 + value3
    document.getElementById("totalPrice").innerText = total3
    const totalPriceNew3 = getCartValue("totalPrice2")
    const totalNew3 = totalPriceNew3 + value3
    document.getElementById("totalPrice2").innerText = totalNew3
    const productName3 = name3; // Replace with the actual product name
    if (cart[productName3]) {
        cart[productName3]++;
    } else {
        cart[productName3] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}




// function for 7th button



document.getElementById("product7-btn").addEventListener('click', addCart3);
function addCart3() {
    const value3 = getCartValue("productPrice7");
    const name3 = getCartName("productName7");
    const newPara3 = document.createElement("p")
    const cartDiv3 = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara3)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice3 = getCartValue("totalPrice")
    const total3 = totalPrice3 + value3
    document.getElementById("totalPrice").innerText = total3
    const totalPriceNew3 = getCartValue("totalPrice2")
    const totalNew3 = totalPriceNew3 + value3
    document.getElementById("totalPrice2").innerText = totalNew3
    const productName3 = name3; // Replace with the actual product name
    if (cart[productName3]) {
        cart[productName3]++;
    } else {
        cart[productName3] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}



// function for 8th button



document.getElementById("product8-btn").addEventListener('click', addCart3);
function addCart3() {
    const value3 = getCartValue("productPrice8");
    const name3 = getCartName("productName8");
    const newPara3 = document.createElement("p")
    const cartDiv3 = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara3)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice3 = getCartValue("totalPrice")
    const total3 = totalPrice3 + value3
    document.getElementById("totalPrice").innerText = total3
    const totalPriceNew3 = getCartValue("totalPrice2")
    const totalNew3 = totalPriceNew3 + value3
    document.getElementById("totalPrice2").innerText = totalNew3
    const productName3 = name3; // Replace with the actual product name
    if (cart[productName3]) {
        cart[productName3]++;
    } else {
        cart[productName3] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}



// function for 9th button



document.getElementById("product9-btn").addEventListener('click', addCart3);
function addCart3() {
    const value3 = getCartValue("productPrice9");
    const name3 = getCartName("productName9");
    const newPara3 = document.createElement("p")
    const cartDiv3 = document.getElementById("cartDiv")
    cartDiv.appendChild(newPara3)
    // newDiv.innerHTML = `<h2 class= "flex flex-col justify-center text-xl ml-16"> ${name} </h2>`;
    const totalPrice3 = getCartValue("totalPrice")
    const total3 = totalPrice3 + value3
    document.getElementById("totalPrice").innerText = total3
    const totalPriceNew3 = getCartValue("totalPrice2")
    const totalNew3 = totalPriceNew3 + value3
    document.getElementById("totalPrice2").innerText = totalNew3
    const productName3 = name3; // Replace with the actual product name
    if (cart[productName3]) {
        cart[productName3]++;
    } else {
        cart[productName3] = 1;
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cartDiv');
    cartElement.innerHTML = '';

    for (const product in cart) {
        const quantity = cart[product];
        const itemText = `${product} ${quantity > 1 ? ` x ${quantity}` : ''}`;
        cartDiv.innerHTML = `<h2 class= "text-xl p-10"> ${itemText} </h2>`;
    }
}















