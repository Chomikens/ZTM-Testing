const {databaseSearch, databaseSearchWithDependenciesInjection}  = require('./script')


//  Here we mockup our database
dbMock = [
    'cats.com',
    'catpics.com',
    'testing.com',
    'lorem.pl',
]


/* This is simple function to test 
it('this is a test', () => {
    console.log(databaseSearch("cat"))
    })
*/

/* In here we mockup and use dependencies injection to use mockupe base
it('this is a test', () => {
console.log(databaseSearchWithDependenciesInjection("cat", dbMock))
})
*/

it('is searching dbMOCK', ()=> {
    expect(databaseSearchWithDependenciesInjection("cat", dbMock))
    .toEqual(['cats.com', "catpics.com"])
})