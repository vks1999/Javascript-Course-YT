// Chapter 1 - Q1
let a = "Vikash"
let b = 6
console.log(a + b)

// Chapter 1 - Q2
console.log(typeof (a + b))

// Chapter 1 - Q3
const a1 = {
    name: "Vikash",
    section: 1,
    isPrincipal: false
}
// a1 = 54;
// a1 = {}
// Chapter 1 - Q4

a1['friend'] = "Raj"
a1['name'] = "Lovish"
console.log(a1)

// Chapter 1 - Q5

const dict = {
    insignia: "a distinguishing badge or emblem of military rank, office, or membership of an organization.",
    gavel: "a small hammer with which an auctioneer, a judge, or the chair of a meeting hits a surface to call for attention or order.",
    gallantly: "in a courageous, spirited, or noble-minded way.",
    appreciate: "recognize the full worth of.",
    lido: "a fashionable beach resort"
}

//In these two ways the keys of an object could be accessed

console.log(dict.lido);
console.log(dict['gavel']);