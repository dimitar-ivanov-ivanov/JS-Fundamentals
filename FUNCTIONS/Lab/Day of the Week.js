function dayOfTheWeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let index = days.indexOf(day);

    console.log(index === -1 ? "error" : index + 1);
}

dayOfTheWeek("Friday");
dayOfTheWeek("Monday");
dayOfTheWeek("Frabjoyousday");