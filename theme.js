function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

// console.log("Coffee");
// console.log("Hi " + window.location.hostname);

// if (window.location.hostname.toLowerCase().includes('onset')) {
//   if (window.location.href.includes('products')) {
//     setTimeout(() => {
//       window.location.reload();
//     }, 1500); 
//   }
// }

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  /* 1. Set width for slideshow section */
  const slideshowSection = document.getElementById(
    "shopify-section-template--19891741327581__slideshow_zm9pm7"
  );

  if (slideshowSection) {
    slideshowSection.style.width = "80vw";
    slideshowSection.style.margin = "0 auto";
  }

  /* 2. Set width for product media wrapper */
  const mediaWrappers = document.querySelectorAll(
    ".grid__item.product__media-wrapper"
  );

  mediaWrappers.forEach((el) => {
    el.style.width = "80vw";
    el.style.margin = "0 auto";
  });

  /* 3. Inject flicker animation for product title */
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes productTitleFlicker {
      0% { opacity: 1; }
      45% { opacity: 0.6; }
      50% { opacity: 0; }
      55% { opacity: 0.4; }
      70% { opacity: 0.7; }
      100% { opacity: 1; }
    }

    .product__title {
      animation: productTitleFlicker 3s infinite;
    }
  `;
  document.head.appendChild(style);
});
