function calcConeVolumeAndSurfaceArea(r,h){
    let volume =( Math.PI * r * r * h ) / 3;
    let slantHeight = Math.sqrt(r * r + h * h);
    let baseSurfaceArea = Math.PI * r *r ;
    let lateralSurfaceArea = Math.PI * r * slantHeight;
    let surfaceArea = baseSurfaceArea + lateralSurfaceArea;
 
    console.log("volume = " + volume);
    console.log("area = "  + surfaceArea);
}

calcConeVolumeAndSurfaceArea(3,5);
calcConeVolumeAndSurfaceArea(3.3,7.8);