function truncate(str, num) {
  // var with amount to truncate
  var sliceAmount = num -3;
  var dots = "...";
  //conditional to check if str is longer than num
  if(str.length > num) {
    //slice the str
    var shorterString = str.slice(0, sliceAmount) + dots;
    return shorterString;
  }
  else if (str.length == num) {
    return str;
  }
  else if (num > str.length) {
    return str;
  }
  
 
}

truncate("A-tisket a-tasket A green and yellow basket", 11, "");