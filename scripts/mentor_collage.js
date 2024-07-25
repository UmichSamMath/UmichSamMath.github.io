document.addEventListener("DOMContentLoaded", () => {
  const photos = [
      'images/Collage1.png',
      'images/Collage2.png',
      'images/Collage3.png',
      'images/Collage4.png',
      'images/Collage5.png'
  ];
  
  const randomIndex = Math.floor(Math.random() * photos.length);
  const randomPhoto = photos[randomIndex];

      document.getElementById('collage_photo').src = randomPhoto;
  });