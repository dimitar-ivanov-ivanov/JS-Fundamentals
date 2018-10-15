function pointInRect([x,y,xMin,xMax,yMin,yMax]){
  if(x >= xMin && x <= xMax && y>=yMin && y <= yMax){
      console.log("inside");
  }  
  else{
      console.log("outside");
  }
}

pointInRect([8,-1,2,12,-3, 3]);
pointInRect([12.5,-1,2,12,-3,3]);