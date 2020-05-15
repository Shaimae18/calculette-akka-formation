var firstValue = 0;
var secondValue=null;
var operator;
$(function () {
    $("button").on("click", ClickButton);
});

function ClickButton() {
    var buttonValue = $(this).text();
    $("#afficheur").text(firstValue);
    console.log(buttonValue);
    if (parseFloat(buttonValue) >= 0) {
        secondValue = (secondValue == null) ? buttonValue : secondValue + buttonValue;
        console.log("val1= " + secondValue)
        $("#afficheur").text(secondValue);
    }
    else
        switch (buttonValue) {
            case "/":
                case "*":
            case "+":
            case "-":
           
                console.log(secondValue)
                if (firstValue == 0)
                    firstValue = parseFloat(secondValue);
                else
                    firstValue = Calculator(firstValue, parseFloat(secondValue), operator);
                console.log(firstValue);
                $("#afficheur").text(firstValue);
                operator = buttonValue;
                secondValue = "";
                break;
            case "=":
                if (firstValue == 0)
                    firstValue = parseFloat(secondValue);
                else
                    firstValue = Calculator(firstValue, parseFloat(secondValue), operator);
                $("#afficheur").text(firstValue);
                secondValue = firstValue;
                $("#afficheur").text(firstValue);
                firstValue = 0;

                break;
            case "C":
                firstValue = 0;
                secondValue = "";
                operator = null;
                $("#afficheur").text(0);
                break;
            default:
                break;

        }
}

function Calculator(firstVal, secondVal, operator) {

    if (operator === '*')
        return firstVal * secondVal;
    if (operator === '+')
        return firstVal + secondVal;
    if (operator === '-')
        return firstVal - secondVal;
    if (operator === '/')
        return firstVal / secondVal;
}