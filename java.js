const handleMouseClick = (event) => {
    const point = document.createElement("div");
    point.className = "point";
  
    let leftPosition = event.clientX - 5;
    let topPosition = event.clientY - 5;
  
    point.style.left = `${leftPosition}px`;
    point.style.top = `${topPosition}px`;
  
    document.body.appendChild(point);
  };
  
  document.addEventListener("click", handleMouseClick);

 

