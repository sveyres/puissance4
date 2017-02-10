var boardElement = document.getElementById("board");
var gridElement = document.createElement("table");
var grid = [["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","","","","",""]];

for (var j = 0; j < 7; j++) {
// LES COLONNES
    var columnElement = document.createElement("div");
    columnElement.className = "column";
    boardElement.appendChild(columnElement);
    var clicElement = document.createElement("div");
    clicElement.className = "truc";
    clicElement.id = j;
    columnElement.appendChild(clicElement);

    clicElement.addEventListener ("click", function(){
        var col = this.id;
        var lig = 5;
        console.log(lig+"-"+col);
        while (grid[lig][col]!=="") {
            lig = lig - 1;
        }
        var laCase = document.getElementById("case"+lig+"-"+col)
        laCase.className = "red";
        grid[lig][col]="R";

    });
    clicElement.addEventListener ("click", function(){
        var col = this.id;
        var lig = 5;
        console.log(lig+"-"+col);
        while (grid[lig][col]!=="") {
            lig = lig - 1;
        }
        var laCase = document.getElementById("case"+lig+"-"+col)
        laCase.className = "yellow";
        grid[lig][col]="Y";

    });

    for (var i = 0; i < 6; i++) {
// LES LIGNES
        var caseElement = document.createElement("div");
        caseElement.className = "case";
        caseElement.id = "case"+i+"-"+j;
        columnElement.appendChild(caseElement);

        //
        // if(grid[i][j]=="Y"){
        //     caseElement.className = "yellow";
        // }else if (grid[i][j]=="R") {
        //     caseElement.className = "red";
        //
        // }
    }
}





// if(grid[i][this.id]==""){
//     caseElement.className ="red";

//
// for (var k = grid.length-1; k > 0; k--) {
//     }

// if(grid[i][j] == "R") {
//     caseElement.className ="red";
// }
// else if(grid[i][j] == "Y"){
//     caseElement.className ="yellow";
// }
