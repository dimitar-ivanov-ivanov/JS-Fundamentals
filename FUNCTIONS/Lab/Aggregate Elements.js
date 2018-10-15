function aggregate(nums) {

    function sum(nums) {
        let sumNums = 0;
        for (let i = 0; i < nums.length; i++) {
            sumNums += nums[i];
        }

        return sumNums;
    }

    function inverseSum(nums) {
        let sumNums = 0;
        for (let i = 0; i < nums.length; i++) {
            sumNums += 1 / nums[i];
        }

        return sumNums;
    }

    function concat(nums) {
        let str = "";
        for (let i = 0; i < nums.length; i++) {
            str += nums[i].toString();
        }

        return str;
    }

    console.log(sum(nums));
    console.log(inverseSum(nums));
    console.log(concat(nums));
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);