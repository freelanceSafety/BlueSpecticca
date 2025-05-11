function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

// console.log("Coffee")
// console.log("Hi "+window.location.hostname)

(function () {
  if (window.location.hostname.includes("rorosaur.com")) {
  //    const bar = document.querySelector('.announcement__bar-holder');
  // if (bar) {
  //   bar.style.display = 'none';
  // }
    setInterval(() => {
      const buttons = document.querySelectorAll('.product__submit__buttons');
      buttons.forEach(button => {
        if (button.style.display === "none") {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
      });
    }, 2000);
  }
})();


if(window.location.hostname.toLowerCase().includes('brandname')){
 // console.log("Hi Brand Name") 
}


 


// addStyle(`
//   section {
//     all: unset
//   }
// `);

// addStyle(`
//   .elementor-65 {
//     display:none
//   }
// `);

// addStyle(`
//   .eael-creative-button.eael-creative-button--winona {
//     display:none
//   }
// `);


