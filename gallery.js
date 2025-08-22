const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close');

let currentIndex = 0;

// Open lightbox when image is clicked
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(currentIndex);
  });
});

function openLightbox(index) {
  lightbox.style.display = 'flex';
  lightboxImg.src = galleryImages[index].src;
  lightboxCaption.textContent = galleryImages[index].alt;
}

// Close lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Event listeners
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') {
      // Next image
      currentIndex = (currentIndex + 1) % galleryImages.length;
      openLightbox(currentIndex);
    } else if (e.key === 'ArrowLeft') {
      // Previous image
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      openLightbox(currentIndex);
    } else if (e.key === 'Escape') {
      // Close lightbox
      closeLightbox();
    }
  }
});
