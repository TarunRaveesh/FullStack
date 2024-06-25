let counter = 1

function stopwatch() {
    console.clear();
    console.log(counter++);
}

setInterval(stopwatch, 1000);