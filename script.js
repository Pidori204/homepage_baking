document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('registrationModal');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('registrationForm');

    // Modal functions
    window.showRegistrationModal = () => {
        modal.style.display = 'block';
    }

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Registration submitted successfully!');
        modal.style.display = 'none';
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.querySelector('a[href="#booking"]').addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector('#booking').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});