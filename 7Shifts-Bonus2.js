//function takes in a string of numbers and a delimiter of any length
//removes all new lines in string given
//throws and exception if given string contains a negative number
//numbers greater than 1000 are ignored
//returns 0 if string is empty, otherwise returns sum of the numbers
function Add(num) {
    //get the delimiter by splitting the given string at its first \n
    //remove leading '//' from the delimiter string
    delimiter = num.split('\n')[0];
    delimiter = delimiter.replace("//", '');
    
    //remove leading slashes and delimiter from the given string
    // and split it into an array given the new delimiter
    num = num.replace("//"+delimiter+'\n', '');
    newString = num.replace('\n','');
    array = newString.split(delimiter);
    count = 0;
    negativeArray = [];
    if(newString == "") {
        return 0;
    }
    for (var i=0; i < array.length; i++) {
        //keep track of any negative numbers in the given string
        if(parseInt(array[i]) < 0) {
            negativeArray.push(parseInt(array[i]));
        }
        if(parseInt(array[i]) < 1000) {
            count += parseInt(array[i]);
        }
    }
    try {
        if(negativeArray.length > 0) throw "Negatives not allowed: " + negativeArray;
    }
    catch(err) {
      console.log(err)
    }
    return count;  
}



//Test with single delimiter
testOne = Add("//;\n1001");
if(testOne != 0) {
    console.log("testOne failed");
}
//Test with longer delimiter
testMult = Add("//***\n1002***3***48080");
if(testMult != 3) {
    console.log("testMult failed ");
}
//Test with different delimiter
testMult = Add("//#####\n-1002#####3#####48080");
if(testMult != -999) {
    console.log("testMult failed ");
}
