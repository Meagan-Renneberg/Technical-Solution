//function takes in a string of numbers and a delimiter
//removes all new lines in string given
//returns 0 if string is empty, otherwise returns sum of the numbers
function Add(num) {
    //get the delimiter by splitting the given string at its first \n
    //remove leading '//' from the delimiter string
    delimiter = num.split('\n')[0];
    delimiter = delimiter.replace("//", '');
    
    //remove leading slashes and delimiter from the given string
    // and split it into an array given the new delimiter
    num = num.replace("//"+delimiter+'\n', '');
    newString = num.replace('\n\g','');
    array = newString.split(delimiter);
    count = 0;
    if(newString == "") {
        return 0;
    }
    for (var i=0; i < array.length; i++) {
            count += parseInt(array[i]);
    }
    return count;
}



//Test with 1 number 
testOne = Add("//;\n1");
if(testOne != 1) {
    console.log("testOne failed");
}
//Test with multple numbers and different delimiter
testMult = Add("//#\n1#3#4");
if(testMult != 8) {
    console.log("testMult failed ");
}
//Test with multple numbers and multple newlines
testBoth = Add("//@\n\n-1\n@1@\n2@-9");
if(testBoth != -7) {
    console.log("testBoth failed");
}
//Test with empty strings
testEmpty = Add("//*\n");
if(testEmpty != 0) {
    console.log("testEmpty failed");
}
