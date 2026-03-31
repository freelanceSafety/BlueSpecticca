function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

// console.log("Coffee");
// console.log("Hi " + window.location.hostname);

if (window.location.hostname.toLowerCase().includes('onset')) {
document.addEventListener("DOMContentLoaded", () => {
  const slideshowSection = document.getElementById(
    "shopify-section-template--19891741327581__slideshow_zm9pm7"
  );

  if (slideshowSection) {
    slideshowSection.style.width = "80vw";
    slideshowSection.style.overflow = "hidden";
  }

  const mediaWrappers = document.querySelectorAll(
    ".grid__item.product__media-wrapper"
  );

  mediaWrappers.forEach((el) => {
    el.style.maxWidth = "60vw";
    el.style.overflow = "hidden";
  });

   const headers = document.querySelectorAll(
    ".header-wrapper.color-background-1.gradient.header-wrapper--border-bottom"
  );

  headers.forEach((header) => {
    header.style.minHeight = "150px";
  });
  
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes productTitle {
      0% { opacity: 1; }
      45% { opacity: 0.6; }
      50% { opacity: 0; }
      55% { opacity: 0.4; }
      70% { opacity: 0.7; }
      100% { opacity: 1; }
    }

    .product__title {
      animation: productTitle 1.5s infinite;
    }
  `;
  document.head.appendChild(style);
});

}
