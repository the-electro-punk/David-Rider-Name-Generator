const firstName = document.getElementById('1st')
const secondName1 = document.getElementById('2nd')
const nameBTN = document.getElementById("nameBTN")

const BMonth = document.getElementById("month")
const BDay = document.getElementById("day")

const results = document.getElementById("results")

let firstLetter = firstName.value
let secondLetter = secondName1.value

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let David1 = ['Slab','Butch','Punt','Flint','Bolt','Blast','Buff','Crunch','Fist','Smash','Buck','Dirk','Rip','Slate','Brick','Crud','Gristle','Tough','Lump','Beat','Hack','Roll','Splint','Hold','Stump','Beef']
let Rider1 = ['Large','Speed','Dead','Big','Chest','Iron','Vander','McRun','Hard','Slam','Rock','Lamp','Plank','Junk','Steak','Bone','Slag','Side','McThorn','Thick','Squat','Rust','McLarge','Man','Blow','Fizzle']
let Rider2 = ['head','fist','chunk','lift','flank','hair','stag','huge','fast','cheese','lots','chest','bone','muscle','jaw','man','pec','face','rock','meal','cheek','body','crunch','back','neck','rod']

// if (nameBTN) {
    nameBTN.addEventListener("click", David)
// }

function David() {
    results.innerHTML = ""
    // let oneL = firstName.charAt(0)
    // let twoL = secondName.charAt(0)
    
    let firstLetter = firstName.value
    let secondLetter = secondName1.value

    let x = BMonth.value
    let y = BDay.value
    console.log("x & y are " + x + ", " + y)

    if (x == 1 || x == 5 || x == 9) {
        David1 = ['Slab','Butch','Punt','Flint','Bolt','Blast','Buff','Crunch','Fist','Smash','Buck','Dirk','Rip','Slate','Brick','Crud','Gristle','Tough','Lump','Beat','Hack','Roll','Splint','Hold','Stump','Beef']
    }
    else if (x == 2 || x == 6 || x == 10) {
        David1 = ['Bolt','Blast','Buff','Crunch','Fist','Smash','Buck','Dirk','Rip','Slate','Brick','Crud','Gristle','Tough','Lump','Beat','Hack','Roll','Splint','Hold','Stump','Beef','Slab','Butch','Punt','Flint']
    }
    else if (x == 3 || x == 7 || x == 11) {
        David1 = ['Fist','Smash','Buck','Dirk','Rip','Slate','Brick','Crud','Gristle','Tough','Lump','Beat','Hack','Roll','Splint','Hold','Stump','Beef','Slab','Butch','Punt','Flint', 'Bolt','Blast','Buff','Crunch',]
    }
    else {
        David1.reverse()
    }

     // this will change the Rider1 array based on Birth Day
    if (y == 1 || y == 4 || y == 7 || y == 10 || y == 13 || y == 16 || y == 19 || y == 22 || y == 25 || y == 28 || y == 31) {
        Rider1 = ['Large','Speed','Dead','Big','Fridge','Iron','Vander','McRun','Hard','Slam','Rock','Lamp','Plank','Steel','Steak','Bone','Slag','Side','McThorn','Thick','Squat','Rust','McLarge','Man','Blow','Fizzle']
    }
    else if (y == 2 || y == 5 || y == 8 || y == 11 || y == 14 || y == 17 || y == 20 || y == 23 || y == 26 || y == 29) {
        Rider1 = ['Steel','Steak','Bone','Slag','Side','McThorn','Thick','Squat','Rust','McLarge','Man','Blow','Fizzle', 'Large','Speed','Dead','Big','Fridge','Iron','Vander','McRun','Hard','Slam','Rock','Lamp','Plank']
    }
    else if (y == 3 || y == 6 || y == 9 || y == 12 || y == 15 || y == 18 || y == 21 || y == 24 || y == 27 || y == 30) {
        Rider1 = ['McLarge','Man','Blow','Fizzle','Large','Speed','Dead','Big','Fridge','Iron','Vander','McRun','Hard','Slam','Steak','Lamp','Plank','Steel','Squat','Rust','Bone','Slag','Side','McThorn','Thick','Rock',]
    }

    // this will change the Rider2 array based on Birth Day
    if (y == 1 || y == 6 || y == 11 || y == 16 || y == 21 || y == 26 || y == 31) {
        Rider2 = ['head','fist','chunk','lift','muscle','jaw','man','flank','hair','stag','huge','fast','cheese','lots','chest','bone','pec','face','rock','meal','cheek','body','crunch','back','neck','rod']
    }
    else if (y == 2 || y == 7 || y == 12 || y == 17 || y == 22 || y == 27) {
        Rider2 = ['muscle','jaw','man','rod','head','pec','face','rock','meal','cheek','body','crunch','back','neck','fist','hair','stag','chunk','lift','flank','huge','fast','cheese','lots','chest','bone']
    }
    else if (y == 3 || y == 8 || y == 13 || y == 18 || y == 23 || y == 28) {
        Rider2 = ['crunch','back','neck','rod','flank','hair','stag','huge','fast','cheese','lots','chest','bone','muscle','jaw','man','pec','face','rock','meal','cheek','body','head','fist','chunk','lift',]
    }
    else if (y == 4 || y == 9 || y == 14 || y == 19 || y == 24 || y == 29) {
        Rider2 = ['lift','muscle','jaw','head','huge','fast','chunk','cheese','lots','chest','bone','pec','back','neck','fist','stag','face','rock','man','flank','hair','meal','cheek','body','crunch','rod']
    }
    else if (y == 5 || y == 10 || y == 15 || y == 20 || y == 25 || y == 30) {
        Rider2 = ['chunk','lift','man','back','neck','flank','hair','muscle','jaw','bone','pec','fist','stag','face','cheese','lots','chest','rock','meal','head','huge','fast','cheek','body','crunch','rod']
    }


    let oneL = letters.indexOf(firstLetter.charAt(0).toLowerCase())
    let twoL = letters.indexOf(secondLetter.charAt(0).toLowerCase())
    console.log("2nd letter is " + twoL + ", & x is " + x)

    // if (twoL >= 26) {
    //     twoL = twoL - 26
    //     console.log("twoL is now " + twoL)
    // }
    let threeL = letters.indexOf(secondLetter.charAt(secondLetter.length - 1).toLowerCase())
    // if (threeL >= 26) {
    //     threeL = threeL - 26
    // }
    console.log(firstLetter, secondLetter)
    console.log("first letters are " + oneL, twoL, threeL)
    results.innerHTML = David1[oneL] + " " + Rider1[twoL] + Rider2[threeL]
}