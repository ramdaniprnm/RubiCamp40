function spiral(param1) {
    const matrix = [];
    let count = 0;

    // Generate the matrix
    for (let i = 0; i < param1; i++) {
        let row = [];
        for (let j = 0; j < param1; j++) {
            row.push(count++);
        }
        matrix.push(row);
    }

    // Initialize boundaries
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let size = matrix.length * matrix[0].length;
    let nums = [];

    // Traverse the matrix in spiral order
    while (nums.length < size) {
        for (let i = left; i <= right && nums.length < size; i++) {
            nums.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom && nums.length < size; i++) {
            nums.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left && nums.length < size; i--) {
            nums.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top && nums.length < size; i--) {
            nums.push(matrix[i][left]);
        }
        left++;
    }

    return nums;
}

// Example usage:
console.log(spiral(5));
console.log(spiral(6));
console.log(spiral(7));