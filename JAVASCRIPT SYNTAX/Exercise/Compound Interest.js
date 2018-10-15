function compoundInterest(nums){
    let principalSum = nums[0];
    let interestRate = nums[1] / 100;
    let compoundingPeriod = nums[2];
    let totalTimespan = nums[3];

    let compoundFrequency = 12 / compoundingPeriod; 

    let f = principalSum * Math.pow((1 + interestRate / compoundFrequency),
    compoundFrequency * totalTimespan);

    console.log(Number(f).toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);