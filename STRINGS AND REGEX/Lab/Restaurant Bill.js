function restaurantBill(input) {
    let restaurants = input
        .filter((item, i) => i % 2 === 0)
        .join(", ");

    let sum = input
        .filter((item, i) => i % 2 !== 0)
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);

    console.log(`You purchased ${restaurants} for a total sum of ${sum}`);
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);