const {databaseSearch, databaseSearchWithDependenciesInjection}  = require('./script')


//  Here we mockup our database
dbMock = [
    'cats.com',
    'catpics.com',
    'testing.com',
    'lorem.pl',
]


/* This is simple function to test 
test('this is a test', () => {
    console.log(databaseSearch("cat"))
    })
*/

/* In here we mockup and use dependencies injection to use mockupe base
test('this is a test', () => {
console.log(databaseSearchWithDependenciesInjection("cat", dbMock))
})
*/

//  We can also group test that are for the same part: 

describe("dbMOCKSearch", () => {
    
    test('is searching dbMOCK', ()=> {
        expect(databaseSearchWithDependenciesInjection("cat", dbMock)).toEqual(['cats.com', "catpics.com"])
    })
    
    test('working with null or undefined', ()=> {
        expect(databaseSearchWithDependenciesInjection(undefined, dbMock)).toEqual([])
        expect(databaseSearchWithDependenciesInjection(null, dbMock)).toEqual([])
    })
    
    test('Does not return more then 3 matches', ()=> {
        expect(databaseSearchWithDependenciesInjection(".com", dbMock).length).toBeLessThanOrEqual(3)
    
    })

})
