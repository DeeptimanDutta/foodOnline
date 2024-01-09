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
            <form id="order-form" style="max-width: 400px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9; display: flex; flex-direction: column;">
                <h3 style="text-align: center; margin-bottom: 15px;">Delivery Details</h3>

                <div style="display: flex; flex-wrap: wrap; gap: 15px;">
                    <div style="flex: 1; min-width: 48%;">
                        <label for="address">Address:</label>
                        <input type="text" id="address" name="address" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>

                    <div style="flex: 1; min-width: 48%;">
                        <label for="city">City:</label>
                        <input type="text" id="city" name="city" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>

                    <div style="flex: 1; min-width: 48%;">
                        <label for="state">State:</label>
                        <input type="text" id="state" name="state" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>

                    <div style="flex: 1; min-width: 48%;">
                        <label for="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="zipCode" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>

                    <div style="flex: 1; min-width: 48%;">
                        <label for="country">Country:</label>
                        <input type="text" id="country" name="country" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                    </div>
                </div>

                <div style="margin-bottom: 15px;">
                    <label for="contact">Contact Number:</label>
                    <input type="tel" id="contact" name="contact" pattern="[0-9]{10}" style="width: 100%; padding: 8px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px;" required>
                </div>

                <div style="display: flex; justify-content: space-between;">
                    <button type="button" onclick="submitOrder()" style="background-color: #4caf50; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;">Submit Order</button>
                    <button type="button" onclick="cancelOrder()" style="background-color: #f44336; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>
                </div>
            </form>
        `;

        // Reset the form when replaced
        formContainer.querySelector('form').reset();

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