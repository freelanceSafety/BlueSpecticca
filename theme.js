function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

console.log("Coffee")
console.log("Hi "+window.location.hostname)
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


