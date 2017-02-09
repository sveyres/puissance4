var boardElement = document.getElementById("board");

for (var j = 0; j < 7; j++) {
    var columnElement = document.createElement("div");
    columnElement.className = "column";
    boardElement.appendChild(columnElement);
        for (var i = 0; i < 7; i++) {
            var caseElement = document.createElement("div");
            caseElement.className = "case";
            columnElement.appendChild(caseElement);
        }
}

var grid =  [["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""],
            ["","","","","",""]];

            
