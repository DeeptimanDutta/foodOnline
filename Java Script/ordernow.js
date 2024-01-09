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
        const formContainer = document.createElement('div');
        formContainer.innerHTML = `
            <form id="order-form" style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9; font-family: 'Arial', sans-serif;">
                <h3 style="text-align: center; color: #333;">Delivery Details</h3>
                
                <div style="display: flex; justify-content: space-between;">
                    <div style="width: 48%;">
                        <label for="fullName" style="display: block; margin-top: 10px; color: #555;">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" style="width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                    <div style="width: 48%;">
                        <label for="contact" style="display: block; margin-top: 10px; color: #555;">Contact Number:</label>
                        <input type="tel" id="contact" name="contact" pattern="[0-9]{10}" style="width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                </div>

                <div style="display: flex; justify-content: space-between;">
                    <div style="width: 32%;">
                        <label for="street" style="display: block; margin-top: 10px; color: #555;">Street:</label>
                        <input type="text" id="street" name="street" style="width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                    <div style="width: 32%;">
                        <label for="city" style="display: block; margin-top: 10px; color: #555;">City:</label>
                        <input type="text" id="city" name="city" style="width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                    <div style="width: 32%;">
                        <label for="state" style="display: block; margin-top: 10px; color: #555;">State:</label>
                        <input type="text" id="state" name="state" style="width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                </div>

                <div style="display: flex; justify-content: space-between;">
                    <div style="width: 48%;">
                        <label for="zipCode" style="display: block; margin-top: 10px; color: #555;">Pin Code:</label>
                        <input type="text" id="zipCode" name="zipCode" pattern="[0-9]{5}" style="width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                    <div style="width: 48%;">
                        <label for="country" style="display: block; margin-top: 10px; color: #555;">Country:</label>
                        <input type="text" id="country" name="country" style="width: 100%; padding: 8px; margin-bottom: 15px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                </div>
                <div class="form-buttons" style="display: flex; justify-content: space-between; margin-top: 20px;">
                    <button type="button" onclick="submitOrder()" onmouseover="this.style.backgroundColor='#45a049'" onmouseout="this.style.backgroundColor='#4caf50'" style="background-color: #4caf50; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;">Submit Order</button>
                    <button type="button" onclick="cancelOrder()" onmouseover="this.style.backgroundColor='#b53939'" onmouseout="this.style.backgroundColor='#f44336'" style="background-color: #f44336; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
                </div>
            </form>
        `;

        // Replace the existing order container with the form
        const orderContainer = document.querySelector('.order-container');
        orderContainer.innerHTML = '';
        orderContainer.appendChild(formContainer);
    } else {
        alert('Your order is empty. Please add items to your order before placing it.');
    }
}

function submitOrder() {
    // Retrieve form data
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    // Check if address and contact are provided
    if (address.trim() === '' || contact.trim() === '') {
        alert('No details given. Order canceled.');
        cancelOrder();
        return;
    }

    // Validate form data as needed

    // Add your logic here to handle the submitted order with address and contact details
    const confirmationMessage = `Your order is placed successfully!\nTotal Amount: ₹${total.toFixed(2)}\nAddress: ${address}\nContact: ${contact}`;
    alert(confirmationMessage);

    // Reset the order list and total after placing the order
    document.getElementById('order-list').innerHTML = '';
    document.getElementById('total').textContent = '₹0.00';
    total = 0;
}
function cancelOrder() {
    // Reload the page to cancel the order
    location.reload();
}