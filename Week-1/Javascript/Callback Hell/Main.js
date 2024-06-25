setTimeout(function getMed1() {
    console.log("Medicine 1 received")
    setTimeout(function getMed2() {
        console.log("Medicine 2 received")
        setTimeout(function getMed3() {
            console.log("Medicine 3 received")
        }, 1000);
    }, 1000);
}, 1000); // Async Call Chaining