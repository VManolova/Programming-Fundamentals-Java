function formatGrade(grade) {
    let appraisal = '';
    if (grade < 3.00) {
        appraisal = 'Fail';
        grade = 2;
    } else if (grade < 3.50) {
        appraisal = 'Poor';
    } else if (grade < 4.50) {
        appraisal = 'Good';
    } else if (grade < 5.50) {
        appraisal = 'Very good';
    } else if (grade >= 5.50) {
        appraisal = 'Excellent';
    }

    if (grade != 2) {
        console.log(`${appraisal} (${grade.toFixed(2)})`);
    } else {
        console.log(`${appraisal} (${(grade)})`);
    }

}

formatGrade(2.99)