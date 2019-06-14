//function takes in a string of comma separated numbers and returns the sum of the numbers
//returns 0 if string is empty
//removes all new lines in string given
function Add(num) {
    newString = num.replace('\n','');
    array = newString.split(',');
    count = 0;
    if(newString == "") {
        return 0;
    }
    for (var i=0; i < array.length; i++) {
            count += parseInt(array[i]);
    }
    return count;
}



//Test with 1 number and newline
testOne = Add("9\n");
if(testOne != 9) {
    console.log("testOne failed")
}
//Test with multple numbers and one newline
testMult = Add("1\n,2,3");
if(testMult != 6) {
    console.log("testMult failed ");
}
//Test with multple numbers and multple newlines
testBoth = Add("\n-1\n,1,\n2,-9");
if(testBoth != -7) {
    console.log("testBoth failed");
}
//Test with empty string and newline
testEmpty = Add("\n");
if(testEmpty != 0) {
    console.log("testEmpty failed");
}
