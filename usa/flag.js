(function(){
  var starRows = Array.prototype.slice.call(document.getElementsByClassName("star-row"));
  setStarRowHeight(starRows);
  drawAllStars(starRows);

  function setStarRowHeight(rows) {
    rows.forEach(function(row, index){
      row.setAttribute("y", (index * 16.2 + 8.1));
    });
  }

  function drawAllStars(rows) {
    rows.forEach(function(row, index) {
      drawStarsInRow(row, index);
    });
  }

  function drawStarsInRow(row, rowIndex) {
    var stars = Array.prototype.slice.call(row.children);
    var firstLeftPoint = 0;
    if (rowIndex % 2 === 0) firstLeftPoint += 9.45;
    if (rowIndex % 2 === 1) firstLeftPoint += 27.95;
    stars.forEach(function(star, index) {
      star.setAttribute("fill", "#F6F1FD");
      star.setAttribute("points", pointsForStar(firstLeftPoint + (index * 37.8)));
    });
  }

  function pointsForStar(leftPoint) {
    var xSpacer = 4.62;
    var ySpacer = 6.16;
    var points = [
      pointStringFromNums(leftPoint, ySpacer),
      pointStringFromNums(leftPoint + xSpacer, ySpacer),
      pointStringFromNums(leftPoint + xSpacer * 2, 0),
      pointStringFromNums(leftPoint + xSpacer * 3, ySpacer),
      pointStringFromNums(leftPoint + xSpacer * 4, ySpacer),
      pointStringFromNums(leftPoint + xSpacer * 3, ySpacer * 2),
      pointStringFromNums(leftPoint + xSpacer * 4, ySpacer * 3),
      pointStringFromNums(leftPoint + xSpacer * 2, ySpacer * 2),
      pointStringFromNums(leftPoint, ySpacer * 3),
      pointStringFromNums(leftPoint + xSpacer * 1, ySpacer * 2)
    ];
    return points.join(", ");
  }

  function pointStringFromNums(x, y) {
    return x.toString() + " " + y.toString();
  }
})();