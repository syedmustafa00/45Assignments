let guests:string[]=["mustafa","mohsin","fasih","yasoob","hassan"];
// let guests:string[]=["mustafa","mohsin","alisba"];
// console.log("Due to limited space, only two people can be invited for dinner.");
// while(guests.length > 2){
//     const removedGuest=guests.pop();
//     console.log(`Sorry, ${removedGuest}, you are no longer invited to dinner.`);
    // }
// guests.forEach((guest) =>{
//     console.log(`Dear ${guest}, you are still invited to dinner.`);})
guests.pop();
guests.pop();
console.log("Final guest list:", guests);
