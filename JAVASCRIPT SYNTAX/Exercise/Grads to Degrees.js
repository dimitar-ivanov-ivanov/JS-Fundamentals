function gradsToDegrees(grads) { 
    let degrees = grads * 0.9 % 360;
    if(degrees < 0){
        degrees =  360 + degrees;
    }
    console.log(degrees);
}

gradsToDegrees(100);
gradsToDegrees(400);
gradsToDegrees(850);
gradsToDegrees(-50);