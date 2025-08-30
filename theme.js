function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

 console.log("Coffee")
 console.log("Hi "+window.location.hostname)

if(window.location.hostname.toLowerCase().includes('outback.life')){
  // document.getElementById('SiteHeader').style.display="hidden"
}
