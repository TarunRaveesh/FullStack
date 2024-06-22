function hollowTriangle(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i === 1 || i === n) {
                str += '*';
            } else {
                if (j === 1 || j === i) {
                    str += '*';
                } else {
                    str += ' ';
                }
            }
        }
        str += '\n';
    }
    console.log(str);
}

hollowTriangle(6);