
// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLLING
    // This makes the page glide when you click Home, About, Skills, etc.
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the instant jump
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. CONTACT FORM SUCCESS MESSAGE
    // Matches the class "submit-btn" from our previous HTML
    const myButton = document.querySelector('.submit-btn');
    
    if (myButton) {
        myButton.addEventListener('click', (e) => {
            // Only show alert if the form is valid (if using required fields)
            alert("Hello Immy! Your message has been sent successfully.");
        });
    }

    // 3. IMAGE HOVER EFFECT
    // Makes your profile image slightly larger when you mouse over it
    const profileImg = document.querySelector('.hero-image img');
    if (profileImg) {
        profileImg.style.transition = "transform 0.3s ease";
        profileImg.addEventListener('mouseover', () => {
            profileImg.style.transform = "scale(1.05)";
        });
        profileImg.addEventListener('mouseout', () => {
            profileImg.style.transform = "scale(1)";
        });
    }
});

