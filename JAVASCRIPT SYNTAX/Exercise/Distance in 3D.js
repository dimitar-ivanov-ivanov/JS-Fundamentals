function distanceBetweenPointsIn3D(nums){
 let x1 = nums[0];
 let y1 = nums[1];
 let z1 = nums[2];
 let x2 = nums[3];
 let y2 = nums[4];
 let z2 = nums[5];

 let sum = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2- z1);
 let distance = Math.sqrt(sum);

 console.log(distance);
}

distanceBetweenPointsIn3D([1, 1, 0, 5, 4, 0]);
distanceBetweenPointsIn3D([3.5, 0, 1, 0, 2, -1]);