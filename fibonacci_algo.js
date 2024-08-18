function fibonacciGenerator(n){
    var fibonacci = [];
    

    if (n == 1){
            fibonacci.push(0);
        }
    else if (n == 2){
            fibonacci.push(0, 1);
        }
    else {
        fibonacci.push(0, 1);
        for (let i = fibonacci.length; i <= n-1; i++) {
                if (fibonacci.length == 2){
                    fibonacci.push(fibonacci[0] + fibonacci[1]);
                }
                else {
                    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
                }
        }
    }

    console.log(fibonacci);
    
    }
var n = prompt("Enter max numbers");
fibonacciGenerator(n);
