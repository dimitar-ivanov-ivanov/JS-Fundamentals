function solve([x1, y1, x2, y2]) {
    let point1 = {
        x: x1,
        y: y1
    };
    let point2 = {
        x: x2,
        y: y2
    };
    let startPoint = {
        x: 0,
        y: 0
    };

    print(point1, startPoint);
    print(point2, startPoint);
    print(point1, point2);

    function distanceBetweenPoints(p1, p2) {
        let xDistance = Math.abs(p2.x - p1.x) * Math.abs(p2.x - p1.x);
        let yDistance = Math.abs(p2.y - p1.y) * Math.abs(p2.y - p1.y);

        let distance = Math.sqrt(xDistance + yDistance);

        return distance;
    }

    function isDistanceInteger(dist) {
        return Number.isInteger(dist);
    }

    function print(p1, p2) {
        let dist = distanceBetweenPoints(p1, p2);

        let isValid = "";
        if (isDistanceInteger(dist)) {
            isValid = "valid";
        } else {
            isValid = "invalid";
        }

        console.log(`{${p1.x}, ${p1.y}} to {${p2.x}, ${p2.y}} is ${isValid}`);
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);