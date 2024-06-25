function downTriangle(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            str += '*';
        }
        str += '\n';
    }
    console.log(str);
}

downTriangle(5);