function parseFormInput () {
    let input = new FormData();
    input.append("num1", document.getElementById("num1").value);
    input.append("num2", document.getElementById("num2").value);
    let nums = [];
    for (let num of input.values()) {
        nums.push(num);
    }
    return nums;
}

function factor(x) {
    let factors = [];
    for (let i = 1; i < Math.floor(Math.sqrt(x)); i++) {
        if (x % i == 0) {
            factors.push(i);
            factors.push(x / i);
        }
    }
    factors = factors.sort((a, b) => a > b);
    factors.pop();
    return factors;
}

function displayFactors(facs1, facs2) {
    let facstr = "First number factors: " + createArrayString(facs1) + "\nSecond number factors: " + createArrayString(facs2);
    alert(facstr);
}

function createArrayString(arr) {
    let str = "["
    for(let i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    str += "]";
    return str;
}

function add(total, n) {
    return total + n;
}

function isAmicable(n1, facs1, n2, facs2) {
    return n1 == facs2.reduce(add) &&  n2 == facs1.reduce(add);
}

function setAmicableString(n1, n2, amicable) {
    return `${"The numbers: " + n1 + " and " + n2 + " are " + (amicable ? "" : "not ") + "amicable."}`
}

function main() {
    document.getElementById("numberInput").addEventListener('submit', (event) => event.preventDefault());
    let nums = parseFormInput();
    let num1Facs = factor(nums[1]);
    let num2Facs = factor(nums[0]);
    displayFactors(num1Facs, num2Facs);
    let amicable = isAmicable(nums[1], num1Facs, nums[0], num2Facs);
    let resultString = setAmicableString(nums[1], nums[0], amicable);
    document.getElementById("amicable").innerHTML = resultString;
}