// Add click or scroll-triggered interaction if needed
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('click', () => {
        const tooltip = milestone.querySelector('.milestone-info');
        tooltip.classList.toggle('hidden');
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden'); // Toggle visibility of mobile menu
});



