document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.service-item');
  const previewImg = document.getElementById('service-preview-img');

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imgsrc = item.getAttribute('data-preview');
      previewImg.src = imgsrc;
      previewImg.style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
      previewImg.style.opacity = '0';
    });
  });
});
