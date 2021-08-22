const readlineSync = require('readline-sync')

//Hide what your writing
let favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true ,
	mask:"" //set passowrd symbol(default it is *) 
});


//Yes or no
console.log(readlineSync.keyInYN("Do you like cli apps?"))

//MCQ
const nasav = ['Ajit','Naeem','Siddharth','Varun','Avinash']
let indexOfYourFriend = readlineSync.keyInSelect(/*pass Array*/nasav,/*Pass question*/"Who is your favarate friend?")
console.log("my favarate friend is "+ nasav[indexOfYourFriend])
console.log(' ')
//Basic Options

	//Setting Limits
	readlineSync.setDefaultOptions({limit:["gold","silver"]})
	console.log(readlineSync.question('which do you like? gold or silver: '))
	console.log(' ')
