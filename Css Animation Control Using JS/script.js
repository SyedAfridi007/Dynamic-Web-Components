let dynamicStyles = null;

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }
  
  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

addAnimation(`
  @keyframes myAnimation { 
    0% { transform: rotate(0); }
    20% { transform: rotate(${ 360 * Math.random() }deg); }
    60% { transform: rotate(${ -360 * Math.random() }deg); }
    90% { transform: rotate(${ 360 * Math.random() }deg); }
    100% { transform: rotate(${ 0 }deg); }
  }
`);

document.getElementById("circle").style.animation = 'myAnimation 3s infinite';