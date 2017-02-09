var boardElement = document.getElementById("board");


var gridElement = document.createElement("table");

var grid = [["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["R","R","Y","Y","",""]];

for (var j = 0; j < 7; j++) {
// LES COLONNES
    var columnElement = document.createElement("div");
    columnElement.className = "column";
    boardElement.appendChild(columnElement);
    var clicElement = document.createElement("div");
    clicElement.className = "truc";
    clicElement.id = j;
    columnElement.appendChild(clicElement);
    for (var i = 0; i < 6; i++) {
// LES LIGNES
        var caseElement = document.createElement("div");
        caseElement.className = "case";
        columnElement.appendChild(caseElement);
        // caseElement.style.display = "block";



        clicElement.addEventListener ("click", function(){
            for (var k = grid.length-1; k > 0; k--) {
                if(grid[k][this.id]==""){
                    caseElement.className ="red";
                }

                // if(grid[i][j] == "R") {
                //     caseElement.className ="red";
                // }
                // else if(grid[i][j] == "Y"){
                //     caseElement.className ="yellow";
                // }
            }

        });

    }
}
