//function takes in a string of numbers and one or more delimiters
//removes all new lines in string given
//throws and exception if given string contains a negative number
//numbers greater than 1000 are ignored
//returns 0 if string is empty, otherwise returns sum of the numbers
function Add(num) {
    //get the delimiter by splitting the given string at its first \n
    //remove leading '//' from the delimiter string
    delimiter = num.split('\n')[0];
    delimiter = delimiter.replace("//", '');

    delimiterList = delimiter.split(',');
    
    //remove leading slashes and delimiter from the given string
    // and split it into an array given the new delimiter
    num = num.replace("//"+delimiter+'\n', '');
    newString = num.replace('\n','');
    
    for (var i=0; i<delimiterList.length; i++) {
        //checks if delimiter is $, needs to add \\ before $ otherwise regex replace does not work correctly
        if(delimiterList[i] == '$') {
            regex = new RegExp ('\\$', 'g');
        }
        else {
            regex = new RegExp (delimiterList[i], 'g');
        }
        newString = newString.replace(regex, ',');
    }
    array = newString.split(',');
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
testOne = Add("//@\n1@2@3");
if(testOne != 6) {
    console.log("testOne failed");
}
//Test with multple numbers and different delimiter
testMult = Add("//#,$\n1#3$4");
if(testMult != 8) {
    console.log("testMult failed ");
}
