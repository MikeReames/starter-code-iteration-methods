// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')
const body = document.createElement('h1')
main.append(body)
//example Kata
//const greenEyes1 = users.filter(user => user.eyeColor === "green")
//body.append(JSON.stringify(greenEyes1))
//Kata 1
const isActive = users.filter(user => user.isActive === true)
console.log(isActive)
body.append(JSON.stringify(isActive))
//Kata 2
const emailAddress = users.map(user => user.emailAddress)
console.log(emailAddress)
body.append(JSON.stringify(emailAddress))
//Kata 3
const ovationPropery = users.some(user => user.company == "OVATION")
console.log(ovationPropery)
body.append(JSON.stringify(ovationPropery))
//Kata 4
const ageMatters = users.find(user => user.age > 38)
console.log(ageMatters)
body.append(JSON.stringify(ageMatters))
//Kata 5
const activeAge = (users.filter(user => user.age > 38)); users.find(user => user.isActive === true)
console.log(activeAge)
body.append(JSON.stringify(activeAge))
//Kata 6
const companyIncome = (users.filter(user => user.company === 'ZENCO'));users.map(user => user.balance)
console.log(companyIncome)
body.append(JSON.stringify(companyIncome))
//Kata 7
const fugiatAge = (users.filter(user => user.tags.includes('fugiat')));
console.log(fugiatAge)
body.append(JSON.stringify(fugiatAge))

