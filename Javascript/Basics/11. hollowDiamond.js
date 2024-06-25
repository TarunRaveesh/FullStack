function diamond(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            if (k == 1 || k == 2 * i - 1) {
                str += "*";
            } else {
                str += " ";
            }
        }

        str += "\n";
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            str += " ";
        }
        for (let k = 0; k < 2 * (n - i) - 1; k++) {
            if (k == 0 || k == 2 * (n - i) - 2) {
                str += "*";
            } else {
                str += " ";
            }
        }
        str += "\n";
    }
    console.log(str);
}

diamond(5);
