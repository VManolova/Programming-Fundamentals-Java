function vacation(numPeople, typeGroup, day) {
    let price = 0;
    switch (typeGroup) {
        case "Students":
            if (day === "Friday") {
                price += numPeople * 8.45;
            } else if (day === "Saturday") {
                price += numPeople * 9.80;
            } else {
                price += numPeople * 10.46;
            }

            if (numPeople >= 30) price -= 0.15 * price;
            break;
        case "Business":
            if (numPeople >= 100) numPeople -= 10;

            if (day === "Friday") {
                price += numPeople * 10.90;
            } else if (day === "Saturday") {
                price += numPeople * 15.60;
            } else {
                price += numPeople * 16;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                price += numPeople * 15;
            } else if (day === "Saturday") {
                price += numPeople * 20;
            } else {
                price += numPeople * 22.50;
            }
            if (numPeople >= 10 && numPeople <= 20) price -= price * 0.05;
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")