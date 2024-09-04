const weight = 80;
const height = 1.72;
const bmi = weight / (height * height);
if (bmi < 18.5) {
    console.log('underweight');
} else {
    if (bmi <= 24.9) {
        console.log('you are normal');
    } else {
        if (bmi <= 29.9) {
            console.log('you are overweight');
        } else {
            console.log('you are obese');
        }
    }

}