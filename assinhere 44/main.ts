

function makeSandwich (item: string[]) {

    console.log('\nMaking Your Sandwich with: ');
    
    item.forEach(element => console.log("-" + element));
   
    console.log("enjoy your sandwich !\n");
       
}


makeSandwich(['ham', 'chesse', 'lattuce'])

makeSandwich(['olive', 'bread'])

makeSandwich(['jam', 'peanut butter'])