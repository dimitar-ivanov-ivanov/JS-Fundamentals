function distanceOverTime(nums){
    let v1 = +nums[0];
    let v2 = +nums[1];
    let t = +nums[2] / 3600; 

    let s1 = v1 * t;
    let s2 = v2 * t; 

    let delta = Math.abs(s1 - s2);

    console.log(delta * 1000);
}

distanceOverTime([0,60,3600]);
distanceOverTime([11,10,120]);
distanceOverTime([5,-5,40]);