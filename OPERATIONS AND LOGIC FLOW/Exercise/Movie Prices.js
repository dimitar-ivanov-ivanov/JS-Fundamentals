function moviePrices([title,day]){
   title = title.toLowerCase();
   day = day.toLowerCase();

   let titles = {
       "the godfather" : [12,10,15,12.5,15,25,30],
       "schindler's list" : [8.5,8.5,8.5,8.5,8.5,15,15],
       "casablanca" : [8,8,8,8,8,10,10],
       "the wizard of oz" : [10,10,10,10,10,15,15]
    };

    let dayIndex  = -1;
    switch(day){
        case "monday":dayIndex = 0; break;
        case "tuesday": dayIndex = 1; break;
        case "wednesday": dayIndex = 2; break;
        case "thursday": dayIndex = 3; break;
        case "friday": dayIndex = 4; break;
        case "saturday": dayIndex = 5; break;
        case "sunday": dayIndex = 6; break;
    }

    let movie = titles[title];
    
    if(movie == undefined || dayIndex === -1){
       console.log("error");
       return;
    }

    let result = titles[title][dayIndex];

    console.log(result);
}

moviePrices(['The Godfather', 'Friday']);
moviePrices(['casablanca', 'sunday']);
moviePrices(['Schindler\'s LIST', 'monday']);
moviePrices(['SoftUni', 'Nineday']);