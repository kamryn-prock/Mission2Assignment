
document.getElementById("btnCalc").addEventListener("click", function () {
    AScore = document.getElementById("Ascore").value * .55;
    GPScore = document.getElementById("GPscore").value * .05;
    QScore = document.getElementById("Qscore").value * .1;
    EScore = document.getElementById("Escore").value * .2;
    IScore = document.getElementById("Iscore").value * .1;

    TotalScore = Ascore + GPSCore + QScore + EScore + IScore;
    LetterGrade = " ";

    if (TotalScore >= 94) {
        LetterGrade = "A";
    }
    else if (TotalScore >= 90) {
        LetterGrade = "";
    }
    else if (TotalScore >= 87) {
        LetterGrade = "B+";
    }
    else if (TotalScore >= 84) {
        LetterGrade = "B";
    }
    else if (TotalScore >= 80) {
        LetterGrade = "B-";
    }
    else if (TotalScore >= 77) {
        LetterGrade = "C+";
    }
    else if (TotalScore >= 74) {
        LetterGrade = "C";
    }
    else if (TotalScore >= 70) {
        LetterGrade = "C-";
    }
    else if (TotalScore >= 67) {
        LetterGrade = "D+";
    }
    else if (TotalScore >= 64) {
        LetterGrade = "D";
    }
    else if (TotalScore >= 60) {
        LetterGrade = "D-";
    }
    else {
        LetterGrade = "F";
    }

    alert(LetterGrade);
})
