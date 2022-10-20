//json object
// java script object notation
// it store data in key & value format
var obj = {
    "fname": 'sumit',
    id: 9,
    lname: 'Raokhande'
};
//1 dot operator
//2 square operator
//1 dot operator
// console.log(`
//     First Name :: ${obj.fname}
//     Id         :: ${obj.id}
//     Last name  :: ${obj.lname}
// `)
//2 square operator
console.log("\n----------------\nFirst Name :: ".concat(obj["fname"], "\nId         :: ").concat(obj['id'], "\nLast name  :: ").concat(obj['lname'], "\n"));
