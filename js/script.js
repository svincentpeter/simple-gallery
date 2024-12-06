// Dynamic Image Gallery Loader
const galleryContainer = document.getElementById('gallery-container');

// List of image URLs
const images = [
    'https://source.unsplash.com/300x300/?nature',
    'https://source.unsplash.com/300x300/?city',
    'https://source.unsplash.com/300x300/?animals',
    'https://source.unsplash.com/300x300/?forest',
    'https://source.unsplash.com/300x300/?mountain',
    'https://source.unsplash.com/300x300/?beach',
  ];
  

// Load images dynamically
images.forEach((image, index) => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('overflow-hidden', 'rounded-lg', 'shadow-lg', 'hover-zoom', 'bg-white');
  galleryItem.innerHTML = `
    <img src="${image}" alt="Gallery Image ${index + 1}" class="w-full h-64 object-cover">
  `;
  galleryContainer.appendChild(galleryItem);
});
