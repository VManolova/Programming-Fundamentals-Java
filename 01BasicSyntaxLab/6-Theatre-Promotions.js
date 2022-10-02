function teatre(day, age) {

    if (age < 0 || age > 1000) {
        console.log("Error!");
        return;
    }

    if (0 <= age && age <= 18) {
        if (day === "Weekday") console.log(`12$`);
        else if (day === "Weekend") console.log(`15$`);
        else console.log(`5$`);
    } else if (age <= 64) {
        if (day === "Weekday") console.log(`18$`);
        else if (day === "Weekend") console.log(`20$`);
        else console.log(`12$`);
    } else if (age <= 122) {
        if (day === "Weekday") console.log(`12$`);
        else if (day === "Weekend") console.log(`15$`);
        else console.log(`10$`);
    }
}

teatre('Holiday', -15)