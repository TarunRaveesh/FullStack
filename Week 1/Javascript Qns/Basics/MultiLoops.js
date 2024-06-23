var n = 5
var str = ""
for (i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
        for(k = j; k < n; k++) {
            for(l = k; l < n; l++) {
                str += "*";
            }
            str += "\n";
        }
        str += "\n";
    }
    str += "\n";
}

console.log(str);