// ===============================
// COURIER LUGGAGE – script.js
// ===============================

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const pickup = document.getElementById('pickup').value.trim();
    const dropoff = document.getElementById('dropoff').value.trim();
    const luggageSize = document.getElementById('size').value;
    const date = document.getElementById('date').value;

    if (!pickup || !dropoff || !luggageSize || !date) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    alert('Luggage delivery request submitted successfully!');
    bookingForm.reset();
  });
}

// Scroll Animation for Sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
