//Array of object

let arrobj=[
    {
        id:9,
        fname:"Sumit",
        lname:'Raokhande',
        country:{
            cid:1,
            cname:'India'
        },
       month:["Jan","Feb","May"],
       result:[
        {
            subj:"M1",
            marks:40
        },
        {
            subj:"M2",
            marks:45
        },
        {
            subj:"M3",
            marks:55
        }
       ] 
    },
    {
        id:6,
        fname:"Kiran",
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'US'
        },
        month:["March","Aug","Dec"],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:75
            }
           ] 
    },
    {
        id:3,
        fname:"Spruha",
        lname:'Raokhande',
        country:{
            cid:3,
            cname:'japan'
        },
        month:["Apr","July","Sept"],
        result:[
            {
                subj:"M1",
                marks:60
            },
            {
                subj:"M2",
                marks:62
            },
            {
                subj:"M3",
                marks:80
            }
           ]  
    }
]

// console.log(`
//     Id         ::${arrobj[1].id}
//     First Name :: ${arrobj[1].fname}
//     Last name  :: ${arrobj[1].lname}
// `)

for(let i=0;i<arrobj.length;i++){

    console.log(`
    Id         ::${arrobj[i].id}
    First Name :: ${arrobj[i].fname}
    Last name  :: ${arrobj[i].lname}
    Country    :: ${arrobj[i].country.cname}
    Month      :: ${arrobj[i].month.join("  ")}
    --------Result---------
`)

    for(let j=0;j<arrobj[i].result.length;j++){
        console.log(`
            Subject :: ${arrobj[i].result[j].subj}
            Marks   :: ${arrobj[i].result[j].marks}
        `)
    }


}

// arrobj.forEach((value)=>{
//     console.log(`
//         id         :: ${value.id}
//         First Name :: ${value.fname}
//         Last name  :: ${value.lname}
//     `)
// })