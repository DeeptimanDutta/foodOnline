let total = 0;
console.log(alert("Welcome to our menu section"));
const menu = {
    'Chicken Biryani': 150,
    'Veg Pizza': 115,
    'Mutton Biryani': 250,
    'Chicken Pizza': 150,
    'Mixed Fried Rice': 130,
    'Veg Fried Rice': 100,
    'Chicken Hakka Noodles': 120,
    'Veg Hakka Noodles': 100,
    'Veg Pulao': 150,
    'Chicken Chilli': 170,
    'Paneer Chilli': 170,
    'Chicken Butter Masala': 200,
    'Paneer Butter Masala': 190,
    'Garlic Nun': 15,
    'Plain Nun': 10,
    'Roomali Roti': 15,
    'Plain Roti': 10,
    'Plain Rice': 30,
    'Dal Makhni': 115,
    'Paneer Tikka': 175,
    'Chicken Tandoori': 350,
    'Chicken Tikka Masala': 250,
};

function addToOrder(item) {
    const orderList = document.getElementById('order-list');
    const listItem = document.createElement('li');
    const price = menu[item];

    if (price) {
        listItem.textContent = `${item} - ₹${price.toFixed(2)}`;
        orderList.appendChild(listItem);

        total += price;
        document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    } else {
        console.error(`Price not found for item: ${item}`);
    }
}

function placeOrder() {
    if (total > 0) {
        const confirmation = confirm(`Your order is placed successfully!\nTotal Amount: ₹${total.toFixed(2)}`);
        if (confirmation) {
            // You can add additional logic here, such as sending the order to a server.
            // Reset the order list and total after placing the order
            document.getElementById('order-list').innerHTML = '';
            document.getElementById('total').textContent = '₹0.00';
            total = 0;
        }
    } else {
        alert('Your order is empty. Please add items to your order before placing it.');
    }
}