function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

// console.log("Coffee")
if(window.location.hostname.toLowerCase().includes('onset')){
 // console.log("Hi Onset Homes") 
}

if(window.location.hostname.toLowerCase().includes('bombaytoycompany')){
 // console.log("Hi BTC") 
}

if(window.location.hostname.toLowerCase().includes('bumberry')){
 // console.log("Hi Bumberry") ;
//  setInterval(function () {
// const list = document.getElementsByTagName("body")[0]
// list.innerHTML=""
//   }, 1000);
}

if(window.location.hostname.toLowerCase().includes('beejnetwork')){
 // console.log("Hi Beej Network") ;
//  setInterval(function () {
// const list = document.getElementsByTagName("body")[0]
// list.innerHTML=""
//   }, 1000);
}

if(window.location.hostname.toLowerCase().includes('isaaka')){

 
  function checkLoad(){
  
    let variants=document.querySelectorAll(".single-option-selector option");
  
    let selectedVariant=document.querySelector(".select-wrapper .selected-text");
  
    selectedVariant.innerHTML = selectedVariant.innerHTML.replace(/Pinkk/g,"Pink");
    selectedVariant.innerHTML = selectedVariant.innerHTML.replace(/Greenn/g, "Green");
    selectedVariant.innerHTML = selectedVariant.innerHTML.replace(/greeen/g, "Green");
  
    for(let i=0; i<variants.length;i++){
      variants[i].innerHTML = variants[i].innerHTML.replace(/Pinkk/g,"Pink");
      variants[i].innerHTML = variants[i].innerHTML.replace(/Greenn/g, "Green");
      variants[i].innerHTML = variants[i].innerHTML.replace(/greeen/g, "Green");
    }
          // document.body.innerHTML = document.body.innerHTML.replace(/Pinkk/g, "Pink");
          // document.body.innerHTML = document.body.innerHTML.replace(/Greenn/g, "Green");
          // document.body.innerHTML = document.body.innerHTML.replace(/greeen/g, "Green");
  }
        setInterval('checkLoad();', 500)
    

 
 // console.log("Hi Isaaka") ;
 setInterval(function () {
 // document.querySelector(".addly_widget_interact").style.display="none";
//   addStyle(`
//   .product-add-to-cart {
//     display: none !important;
//   }
// `);
  }, 1000);
}

if(window.location.hostname.toLowerCase().includes('essenza')){
 // console.log("Hi Beej Network") ;

 
//  setInterval(function () {


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


//   }, 1000);
}
