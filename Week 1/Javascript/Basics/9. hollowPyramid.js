function hollowPyramid(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k == 1 || k == 2 * i - 1 || i == n) {
                str += "*";
            } else {
                str += " ";
            }
        }
        str += "\n";
    }
    console.log(str);
}
hollowPyramid(5);