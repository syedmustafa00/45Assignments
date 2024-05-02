var guestArr = ["mustafa", "mohsin", "ahmed", "fasih"];
var canNotAttend = "musu";
var newGuset = "yasoob";
guestArr[guestArr.indexOf(canNotAttend)] = newGuset;
// console.log(guestArr);
// guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples.`))
// =====part 2=====
var guestBeg = "musu";
guestArr.unshift(guestBeg);
// console.log(guestArr);
// ======part 3======
var middleGuest = "mustafa";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr);
// // ===part 4===
guestArr.push("hyder");
console.log(guestArr);
//====part 5====
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited in the more people catagory on dinner"));
});
