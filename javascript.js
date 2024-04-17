var a = document.getElementById("nav-links");

function showmenu() {
    a.style.right = "0";
}
function hidemenu() {
    a.style.right = "-200px";
}


/*---------footer-----------*/
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get the email input value
    var email = document.getElementById('email').value;
  
    // Here you can perform validation on the email address if needed
  
    // Display subscription message
    var message = document.getElementById('subscribe-message');
    message.textContent = 'Thank you for subscribing!'; // You can customize this message
  
    // Clear the email input field after submission
    document.getElementById('email').value = '';
  });


  // Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide back-to-top button based on scroll position
window.onscroll = function() {
    var btn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


