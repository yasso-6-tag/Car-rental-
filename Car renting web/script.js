// Get all elements
const mainSection = document.querySelector('.main-section');
const ourSection = document.querySelector('.our-section');
const cardSection = document.querySelector('.card-section');
const testimonialSection = document.querySelector('.testimonial-section');
const footer = document.querySelector('footer');

// Add event listeners to buttons
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
});

// Add event listeners to testimonial buttons
document.querySelector('.prev-button').addEventListener('click', () => {
  console.log('Prev button clicked!');
});

document.querySelector('.next-button').addEventListener('click', () => {
  console.log('Next button clicked!');
});

// Add animation to main section background image
mainSection.addEventListener('scroll', () => {
  const imgCar = document.getElementById('img-car');
  imgCar.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});

// Add animation to card items
cardSection.addEventListener('scroll', () => {
  const cardItems = document.querySelectorAll('.card-item');
  cardItems.forEach(cardItem => {
    const cardItemTop = cardItem.offsetTop;
    const cardItemHeight = cardItem.offsetHeight;
    if (window.scrollY + window.innerHeight > cardItemTop + cardItemHeight / 2) {
      cardItem.classList.add('animate');
    } else {
      cardItem.classList.remove('animate');
    }
  });
});

// Add animation to testimonial section
testimonialSection.addEventListener('scroll', () => {
  const cardTestimonial = document.querySelector('.card-testimonial');
  const cardTestimonialTop = cardTestimonial.offsetTop;
  const cardTestimonialHeight = cardTestimonial.offsetHeight;
  if (window.scrollY + window.innerHeight > cardTestimonialTop + cardTestimonialHeight / 2) {
    cardTestimonial.classList.add('animate');
  } else {
    cardTestimonial.classList.remove('animate');
  }
});