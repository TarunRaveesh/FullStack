function pyramidStar(n) {
    let str = "";
    for (let i = 2; i <= n; i++) {
        for (j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
}

pyramidStar(3);