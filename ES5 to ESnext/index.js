
                        // Template tags
const Button = styled.button`
    font-size: 1.5em; background-color: black; color: white; 
    `
// mostly used Graphql servers

const query = gql`
    query{
        ...
    }
`

// Dynamic properties
const x = {
    ['a'+'_'+'b']:'c'
}

x.a_b // c


// for loop
const array = [1,2,3]

for( const v of array){
    console.log(v)
}


for (const [i, v] of ['a', 'b', 'c'].entries()) { 
    console.log(index) //index 
    console.log(value) //value 
}
// for...of iterates over the property values 
// for...in iterates the property names



//     CORS 
//    Modules are fetched using CORS. 
// This means that if you reference scripts from other domains, 
// they must have a valid CORS header that allows cross-site loading (like Access- Control-Allow-Origin: * )


    // Repeat()
// 'Ho'.repeat(3) //'HoHoHo'


    // CodePointAt
    // "꺽 ".charCodeAt(0).toString(16) //d842 
    // "꺽 ".charCodeAt(1).toString(16) //dfb7
// If you create a new character by combining those unicode characters:
// "\ud842\udfb7"  //"꺽 "


//             Object Methods
/*   Object.is()
    Object.is(a, b) 
The result is always false unless: 
    1) a and b are the same exact object 
    2) a and b are equal strings (strings are equal when composed by the same characters) 
    3) a and b are equal numbers (numbers are equal when their value is equal) 
    4) a and b are both undefined , both null , both NaN , both true or both false 
0 and -0 are different values in JavaScript, so pay attention in this special case 
(convert all to +0 using the + unary operator before comparing, for example).
            Object.assign()
const copied = Object.assign({}, original)

const original = { 
        name: 'Fiesta',
        car: { 
            color: 'blue' 
        } }
const copied = Object.assign({}, original) 
original.name = 'Focus' 
original.car.color = 'yellow' 
copied.name //Fiesta 
copied.car.color //yellow


const wisePerson = { 
    isWise: true 
}
const foolishPerson = { 
    isFoolish: true 
}
const wiseAndFoolishPerson = Object.assign({}, wisePerson, foolishPerson) 
console.log(wiseAndFoolishPerson) // { isWise: true, isFoolish: true }

            Object.setPrototypeOf()
Object.setPrototypeOf(object, prototype)

    const animal = { isAnimal: true }
    const mammal = { isMammal: true }
    mammal.__proto__ = animal 
    mammal.isAnimal //true 
    const dog = Object.create(animal) 
    dog.isAnimal //true 
    console.log(dog.isMammal) //undefined
    Object.setPrototypeOf(dog, mammal) 
    dog.isAnimal //true 
    dog.isMammal //true


                


