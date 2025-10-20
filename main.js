/* navbar toggle */
const menuIcons = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcons && navbar) {
    menuIcons.onclick = () => {
        menuIcons.classList.toggle('fa-bars');   // hamburger
        menuIcons.classList.toggle('fa-xmark');  // X icon
        navbar.classList.toggle('active');       // shows/hides navbar
    };
}

/* close navbar when a link is clicked (mobile) */
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcons.classList.remove('fa-xmark');
        menuIcons.classList.add('fa-bars');
        navbar.classList.remove('active');
    });
});

/* scroll reveal */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 300,
    // reset: true
});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .resume-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Website Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Contact form logic
form.addEventListener('submit', function(e) {
    e.preventDefault(); // stop page reload

    let valid = true; // assume valid

    const nameInput = form.elements['name'];
    const emailInput = form.elements['email'];
    const subjectInput = form.elements['subject'];
    const phoneInput = form.elements['phone'];
    const messageInput = form.elements['message'];

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const phoneError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');

    // reset errors
    [nameError, emailError, subjectError, phoneError, messageError].forEach(el => el.textContent = '');
    formSuccess.style.display = 'none';
    formSuccess.textContent = '';

    // validation checks
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email';
        valid = false;
    }

    if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Subject is required';
        valid = false;
    }

    if (!phoneInput.value.trim()) {
        phoneError.textContent = 'Phone number is required';
        valid = false;
    }

    if (!messageInput.value.trim()) {
        messageError.textContent = 'Message is required';
        valid = false;
    }

    // Stop submission if invalid
    if (!valid) return; // <- THIS prevents blank messages

    // if all valid
    formSuccess.style.display = 'block';
    formSuccess.textContent = 'Thank you! Your message has been sent.';
    form.reset();
});
