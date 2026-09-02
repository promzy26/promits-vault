// Intercept clicks globally to show a pop-up for under-development apps
document.addEventListener('click', function(event) {
    // Find if the clicked element or its parent is a link with #U_D
    const targetLink = event.target.closest('a');
    
    if (targetLink && targetLink.getAttribute('href') === '#U_D') {
        event.preventDefault(); // Stop the link from opening anything
        
        // Show a clean pop-up alert
        alert("🚧 This app is currently under development and not ready for download yet!");
    }
});
