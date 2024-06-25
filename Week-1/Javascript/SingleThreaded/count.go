package main

import (
    "fmt"
    "time"
)

func main() {
    startTime := time.Now()

    count := 0
    sum := 0

    for i := 1; i <= 10000000000; i++ {
        count++
        sum += i
    }

    endTime := time.Now()
    duration := endTime.Sub(startTime).Seconds()

    fmt.Printf("Count: %d\n", count)
    fmt.Printf("Sum: %d\n", sum)
    fmt.Printf("Time taken: %.2f seconds\n", duration)
}
