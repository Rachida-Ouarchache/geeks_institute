let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()
// output:
// ==SEQUENTIAL START==
// starting slow promise
// (wait 2 seconds)
// slow promise is done
// slow 
// starting fast promise
// (wait 1 second)
// fast promise is done
// fast 
// Total time: ~3 seconds

