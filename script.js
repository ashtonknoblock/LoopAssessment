var numbersToBeMultiplied;
document.write("<table>");

for (var x = 1; x < 11; x++) {
    document.write("<tr>");

    for (var y = 1; y < 11; y++) {
        if(x == 1 || y == 1) {
            numbersToBeMultiplied = "#800000";
        }
        else {
            numbersToBeMultiplied = "#FF0000";
        }

        document.write("<td style ='background-color:" + numbersToBeMultiplied + "'>" + x*y + "</td>");
    }
     document.write("</tr>");
}
document.write("</table>");