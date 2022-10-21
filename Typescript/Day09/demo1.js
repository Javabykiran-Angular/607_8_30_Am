//Array of object
var arrobj = [
    {
        id: 9,
        fname: "Sumit",
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "Feb", "May"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    },
    {
        id: 6,
        fname: "Kiran",
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ["March", "Aug", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 75
            }
        ]
    },
    {
        id: 3,
        fname: "Spruha",
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'japan'
        },
        month: ["Apr", "July", "Sept"],
        result: [
            {
                subj: "M1",
                marks: 60
            },
            {
                subj: "M2",
                marks: 62
            },
            {
                subj: "M3",
                marks: 80
            }
        ]
    }
];
// console.log(`
//     Id         ::${arrobj[1].id}
//     First Name :: ${arrobj[1].fname}
//     Last name  :: ${arrobj[1].lname}
// `)
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    Id         ::".concat(arrobj[i].id, "\n    First Name :: ").concat(arrobj[i].fname, "\n    Last name  :: ").concat(arrobj[i].lname, "\n    Country    :: ").concat(arrobj[i].country.cname, "\n    Month      :: ").concat(arrobj[i].month.join("  "), "\n    --------Result---------\n"));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n            Subject :: ".concat(arrobj[i].result[j].subj, "\n            Marks   :: ").concat(arrobj[i].result[j].marks, "\n        "));
    }
}
// arrobj.forEach((value)=>{
//     console.log(`
//         id         :: ${value.id}
//         First Name :: ${value.fname}
//         Last name  :: ${value.lname}
//     `)
// })
