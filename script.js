const ctx = document.getElementById('marketChart').getContext('2d');
    const marketChart = new Chart(ctx, {
        type: 'bar', // Choose the chart type (bar, line, pie, etc.)
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'], // X-axis labels
            datasets: [{
                label: 'Pediatric Healthcare Market Growth (in $ Billions)',
                data: [100, 120, 150, 180, 220], // Fake data for market size
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
                borderColor: 'rgba(54, 162, 235, 1)', // Border color
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true, // Y-axis starts at 0
                }
            }
        }
    });

// Add click or scroll-triggered interaction if needed
document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('click', () => {
        const tooltip = milestone.querySelector('.milestone-info');
        tooltip.classList.toggle('hidden');
    });
});
