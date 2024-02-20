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


module.exports = databaseSearch // NODE don't have import and export statement. So we must use Common JS