const myMarks = 90;
const friendMarks = 85;
if (myMarks > 80) {
    if (friendMarks > 80) {
        console.log('Go for lunch');
    } else if (friendMarks >= 60) {
        console.log('Good luck next time');
    } else if (friendMarks >= 40) {
        console.log('Message unseen');
    } else if (friendMarks < 40)
        console.log('blocked');
} else {
    console.log('go to home and sleep and act sad');
}