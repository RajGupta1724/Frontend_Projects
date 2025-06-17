// Show login form when login button is clicked
document.querySelector('.login-btn').addEventListener('click', () => {
    document.getElementById('loginPopup').style.display = 'flex'; // Show the login form
});

// Close the login form when clicking outside the popup
window.addEventListener('click', (e) => {
    const loginPopup = document.getElementById('loginPopup');
    if (e.target === loginPopup) {
        loginPopup.style.display = 'none'; // Close the form
    }
});

// Submit the form without any alert on submit
document.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Assume login is successful
    if (email && password) {
        // After successful login, close the form
        document.getElementById('loginPopup').style.display = 'none';
    }
});

// Zoom-in effect when menu items are loaded
const menuItems = document.querySelectorAll('.menu-item');
window.addEventListener('load', () => {
    menuItems.forEach(item => {
        item.classList.add('show');
    });
});








// Event listener for the arrow click to toggle content visibility
document.querySelectorAll('.order-box .arrow').forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        const content = document.querySelectorAll('.order-box .order-content')[index];
        
        // Toggle visibility of the content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});







// Function to scroll to the Order Section
function scrollToOrder() {
    // Get the element with ID 'order'
    const orderSection = document.getElementById('order');
    
    // Scroll smoothly to the Order section
    orderSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}