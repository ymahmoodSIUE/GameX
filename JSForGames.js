window.onload=function(){

    // selecting the elements for which we want to add a tooltip
    const target = document.getElementById("tooltip-button");
    const tooltip = document.getElementById("tooltip-text");
    
    // change display on mouseover
    target.addEventListener('mouseover', () => {
      tooltip.style.display = 'block';
    }, false);
    
    // change display to 'none' on mouseleave
    target.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    }, false);
}

