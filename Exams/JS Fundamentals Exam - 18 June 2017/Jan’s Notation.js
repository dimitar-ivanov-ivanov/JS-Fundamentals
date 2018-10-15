function playNotation(input) {
    let nums = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (Number.isInteger(current)) {
            nums.push(current);
            continue;
        }

        if (nums.length < 2) {
            console.log("Error: not enough operands!");
            return;
        }

        let a = nums.pop();
        let b = nums.pop();
        let c = 0;

        switch (current) {
            case"+":
                c = b + a;
                break;
            case "-":
                c = b - a;
                break;
            case "*":
                c = b * a;
                break;
            case "/":
                c = b / a;
                break;
        }

        nums.push(c);
    }

    if (nums.length > 1) {
        console.log("Error: too many operands!");
        return;
    }

    console.log(nums.pop());
}

playNotation([3,
    4,
    '+']
);

playNotation([5,
    3,
    4,
    '*',
    '-']
);

playNotation([7,
    33,
    8,
    '-']
);

playNotation([15,
    '/']
);

playNotation([31,
    2,
    '+',
    11,
    '/']
);

playNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
);