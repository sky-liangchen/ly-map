function Add(firstNum, endNum) {
    console.log(firstNum+ endNum);
}
 
 
module.exports = {
    Add,
    AddEightAndNine: function () {
        Add(8, 9);
    }
}