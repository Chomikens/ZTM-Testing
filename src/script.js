const database = [
    'cats.com',
    'testing.com',
    'lorem.pl',
    'animals.com',
    'catpics.com',
    'myfav.com',
]

const databaseSearch = (userInput) => {
    const matches = database.filter(web =>{
    return web.toLowerCase().includes(userInput.toLowerCase())
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches
}

// In real life we dont have database that we export to test. So we want to mock database and test it in testing env - see second example in script.test.js

// Second function with dependecies injection - pass database, array,object to function params. 

const databaseSearchWithDependenciesInjection = (userInput, mockBase) => {
    const matches = mockBase.filter(web =>{
    return web.includes(userInput)
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches
}


module.exports = {databaseSearch, databaseSearchWithDependenciesInjection}; // NODE don't have import and export statement. So we must use Common JS