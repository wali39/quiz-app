var form = document.querySelector(".quizForm");
var correctAns = ["B", "B", "B", "B", "B"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var score = 0;
    const userAnswer = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];
    userAnswer.forEach((user, index) => {
        if (user === correctAns[index]) {
            score += 25;
        }
    });
    // console.log(score);

    scrollTo(0, 0);
    document.querySelector(".score-h").classList.remove("d-none");
    var scoreLast = 0;
    var timer = setInterval(() => {
        document.querySelector(".change").textContent = `${scoreLast}%`;
        if (scoreLast === score) {
            clearInterval(timer);
        } else {
            scoreLast++;
        }
    });
});