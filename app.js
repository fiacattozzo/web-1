document.addEventListener("DOMContentLoaded", () => {
  const previewBox = document.getElementById("service-preview-multi");
  const items = document.querySelectorAll(".service-item");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      // Limpio previews anteriores
      previewBox.innerHTML = "";

      // Tomo las rutas desde el atributo data-previews
      const imgs = item.getAttribute("data-previews").split(",");
      
      imgs.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        previewBox.appendChild(img);
      });

      // muestro el bloque
      previewBox.style.opacity = "1";
    });

    item.addEventListener("mouseleave", () => {
      previewBox.style.opacity = "0";
      previewBox.innerHTML = "";
    });
  });
});
