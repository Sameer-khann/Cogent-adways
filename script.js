
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  
  // Toggle menu on button click
  menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
      }
  });
  
  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.classList.remove('active');
      });
  });
});

// Add this script to make the carousel functional
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.uni-needs-carousel-inner');
  const prevBtn = document.querySelector('.uni-needs-prev');
  const nextBtn = document.querySelector('.uni-needs-next');
  const items = document.querySelectorAll('.uni-needs-carousel-item');

  // Set the amount to scroll based on item width + gap
  const scrollAmount = 240; // adjust based on your item width + gap

  // Handle next button click
  nextBtn.addEventListener('click', function () {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Handle previous button click
  prevBtn.addEventListener('click', function () {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
});


// Add this script to make the testimonial slider functional
document.addEventListener('DOMContentLoaded', function () {
  // This is a placeholder for actual slider functionality
  // In a real implementation, you would have multiple testimonials
  // and this script would handle cycling through them

  const prevBtn = document.querySelector('.client-test-prev');
  const nextBtn = document.querySelector('.client-test-next');

  // For demo purposes, we'll just log clicks
  prevBtn.addEventListener('click', function () {
    console.log('Previous testimonial');
    // Here you would show the previous testimonial
  });

  nextBtn.addEventListener('click', function () {
    console.log('Next testimonial');
    // Here you would show the next testimonial
  });

  // Video controls simulation
  const playBtn = document.querySelector('.client-test-video-play');
  const pauseBtn = document.querySelector('.client-test-video-pause');

  playBtn.addEventListener('click', function () {
    console.log('Play video');
    // Here you would play the video
  });

  pauseBtn.addEventListener('click', function () {
    console.log('Pause video');
    // Here you would pause the video
  });
});

// This script handles form validation and submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form-container');
  const inputs = form.querySelectorAll('.contact-input, .contact-textarea');
  const submitBtn = document.querySelector('.contact-submit-btn');

  // Adjust textarea label position on page load
  const messageTextarea = document.getElementById('contact-message');
  const messageLabel = messageTextarea.nextElementSibling;

  if (messageTextarea.value.trim() !== '') {
    messageLabel.style.transform = 'translateY(-20px)';
    messageLabel.style.fontSize = '12px';
    messageLabel.style.color = '#FF5722';
  }

  // Form submission handling
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let isValid = true;
    let firstInvalid = null;

    // Simple validation
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
        input.style.borderColor = 'red';

        if (!firstInvalid) {
          firstInvalid = input;
        }
      } else {
        input.style.borderColor = '';
      }
    });

    if (!isValid) {
      // Focus the first invalid field
      firstInvalid.focus();
      return;
    }

    // Here you would typically send the form data to your server
    console.log('Form submitted successfully');

    // Optional: Show success message or reset form
    alert('Thank you for your message. We will get back to you soon!');
    form.reset();
  });

  // Reset validation styling on input
  inputs.forEach(input => {
    input.addEventListener('input', function () {
      this.style.borderColor = '';
    });
  });
});