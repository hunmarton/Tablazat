$(document).ready(function () {
  function makeTable(num) {
    var numArr = [];
    for (var i = 0; i < num; i++) {
      numArr.push([]);
    }
    var firstCol = 0;
    var lastCol = num - 1;
    var firstRow = 0;
    var lastRow = num - 1;
    var counter = 1;
    while (firstCol <= lastCol && firstRow <= lastRow) {
      for (var i = firstCol; i <= lastCol; i++) {
        numArr[firstRow][i] = counter;
        counter++;
      }
      firstRow++;
      for (var i = firstRow; i <= lastRow; i++) {
        numArr[i][lastCol] = counter;
        counter++;
      }
      lastCol--;
      for (var i = lastCol; i >= firstCol; i--) {
        numArr[lastRow][i] = counter;
        counter++;
      }
      lastRow--;
      for (var i = lastRow; i >= firstRow; i--) {
        numArr[i][firstCol] = counter;
        counter++;
      }
      firstCol++;
    }
    var table = $("#table");
    var tr, td;
    for (var i = 0; i < numArr[0].length; i++) {
      tr = $("<tr>");
      for (var x = 0; x < numArr.length; x++) {
        td = $("<td>").text(numArr[i][x]);
        tr.append(td);
      }
      table.append(tr);
    }
    return numArr;
  }
  $("#btn").on("click", function () {
    var n = $("#num").val();
    var regex = /\b(0?[1-9]|1[0-9]|2[0-5])\b/g;
    var okN = regex.test(n);
    if (okN) {
      $("#table").html("");
      makeTable(n);
    } else {
      console.log(123);
    }
  });
});
