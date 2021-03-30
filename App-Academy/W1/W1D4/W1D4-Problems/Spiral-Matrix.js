function spiralOrder(mat) {
    let arr = [];
    let i = 0;
    let j = 0;
    let rowStart = 0;
    let rowEnd = mat[0].length-1;
    let colStart = 1;
    let colEnd = mat.length-1;
    let finalLength = mat.length*mat[0].length;
    while (arr.length !== finalLength) {
      // Left to Right
      while (j <= rowEnd) {
             arr.push(mat[i][j]);
            j++;
      }
      if (arr.length == finalLength) return arr;
      i++;
      j--;
      rowEnd--;
      // Top to Bottom
      while (i <= colEnd) {
        arr.push(mat[i][j]);
        i++;
      }
      if (arr.length == finalLength) return arr;
      j--;
      i--;
      colEnd--;
      // Right to Left
      while (j >= rowStart) {
        arr.push(mat[i][j]);
        j--;
      }
      if (arr.length == finalLength) return arr;
      i--;
      j++;
      rowStart++;
      // Bottom to Top
      while (i >= colStart) {
        arr.push(mat[i][j]);
        i--;
      }
      if (arr.length == finalLength) return arr;
      i++;
      j++;
      colStart++;
    }
    return arr;
  }
