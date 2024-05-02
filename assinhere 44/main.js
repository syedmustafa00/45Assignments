function makeSandwich(item) {
    console.log('\nMaking Your Sandwich with: ');
    item.forEach(function (element) { return console.log("-" + element); });
    console.log("enjoy your sandwich !\n");
}
makeSandwich(['ham', 'chesse', 'lattuce']);
makeSandwich(['olive', 'bread']);
makeSandwich(['jam', 'peanut butter']);
