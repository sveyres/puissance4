var boardElement = document.getElementById("board");


var gridElement = document.createElement("table");

var grid = [["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["R","R","Y","Y","",""]];

for (var j = 0; j < 7; j++) {
    var columnElement = document.createElement("div");
    columnElement.className = "column";
    boardElement.appendChild(columnElement);
    for (var i = 0; i < 7; i++) {

        var caseElement = document.createElement("div");
        caseElement.className = "case";
        columnElement.appendChild(caseElement);
        // caseElement.style.display = "block";

        if(grid[i][j] == "R") {
            caseElement.className ="red"
        }
        else if(grid[i][j] == "Y"){
            caseElement.className ="yellow"
        }
            // caseElement.addEventListener ("click", function(){
            //     this.className = "red";
            // })
        //
        //     var redCaseElement = document.createElement ("div");
        //     caseElement.className = "red";
        //     caseElement.appendChild(redCaseElement);
        //     redCaseElement.style.display = "none";
        //
        //     var yellowCaseElement = document.createElement ("div");
        //     caseElement.className ="yellow";
        //     caseElement.appendChild(yellowCaseElement);
        //     yellowCaseElement.style.display = "none";
        //
        //
        //         if (
        // grid [0][0]="red") {
        //     redCaseElement
        // }

    }
}
