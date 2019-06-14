//function takes in a string of comma separated numbers and returns the sum of the numbers
//returns 0 if string is empty
function Add(num) {
    array = num.split(',');
    count = 0;
    if(num == "") {
        return 0;
    }
    for (var i=0; i < array.length; i++) {
            count += parseInt(array[i]);
    }
    return count;
}

//Test with 1 number
testOne = Add("9");
if(testOne != 9) {
    console.log("testOne failed")
}
//Test with multple numbers
testMult = Add("1,2,3");
if(testMult != 6) {
    console.log("testMult failed " + testMult);
}
//Test with negative number
testNeg = Add("-6");
if(testNeg != -6) {
    console.log("testNeg failed");
}
//Test with positive and negative numbers
testBoth = Add("-1,1,2,-9");
if(testBoth != -7) {
    console.log("testBoth failed");
}
//Test with empty string
testEmpty = Add("");
if(testEmpty != 0) {
    console.log("testEmpty failed");
}
