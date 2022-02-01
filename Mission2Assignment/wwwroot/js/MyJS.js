
$("#btnCalc").click(function () {

    //Calculate total scores
    TotalScore = ($("#AScore").val() * .55) + ($("#GPScore").val() * .05) + ($("#QScore").val() * .1) + ($("#EScore").val() * .2) + ($("#IScore").val() * .1);
    LetterGrade = " ";

    //Calculate Letter Grade
    if (TotalScore >= 94) {
        LetterGrade = "A";
    }
    else if (TotalScore >= 90) {
        LetterGrade = "A-";
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
