/************************
 * Added some extra stuff 
 * hope thats ok.
 */
$('document').ready(() => {
    $('#begin').click(() => {
        if(results.length !== 0) {
            alert('please wait');
            return;
        }
        let num1 = $('#num1').val();
        let num2 = $('#num2').val();
        if(num1 === "" || num2 === "") {
            alert('please enter 2 seperate numbers to begin.');
        } else startChain(num1, num2);
    });
});

let results = [];
function startChain(num1, num2) {
    slowMath.add(num1, num2)
    .then(sum => {
        results.push(sum);
        console.log(`${num1} + ${num2} = ${sum}`);
        return slowMath.multiply(sum, 2);
    })
    .then(product => {
        results.push(product);
        console.log(`${results[0]} * 2 = ${product}`);
        return slowMath.divide(product, 4);
    })
    .then(quotient => {
        results.push(quotient);
        console.log(`${results[1]} / 4 = ${quotient}`);
        return slowMath.subtract(quotient, 3);
    })
    .then(difference =>  {
        results.push(difference);
        console.log(`${results[2]} - 3 = ${difference}`);
        return slowMath.add(difference, 98);
    })
    .then(sum => {
        results.push(sum);
        console.log(`${results[3]} + 98 = ${sum}`);
        return slowMath.remainder(sum, 2);
    })
    .then(remainder => {
        results.push(remainder);
        console.log(`${results[4]} / 2 has a remainder of ${remainder}`);
        return slowMath.multiply(remainder, 50);
    })
    .then(product => {
        results.push(product);
        console.log(`${results[5]} * 50 = ${product}`);
        return slowMath.remainder(product, 40);
    })
    .then(remainder => {
        results.push(remainder);
        console.log(`${results[6]} / 40 has a remainder of ${remainder}`);
        return slowMath.add(remainder, 32);
    })
    .then(sum => {
        results.push(sum);
        console.log(`${results[7]} + 32 = ${sum}. this is the final result.`);
        results = [];
    })
    .catch(tHiSiSaErRoR => {
        console.log(tHiSiSaErRoR);
        results = [];
    });
}