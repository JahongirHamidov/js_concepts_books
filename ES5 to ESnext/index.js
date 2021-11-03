
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


                @ Template tags
    Tagged templates is one feature that might sound less useful at first for you, but it's actually used by lots of popular 
libraries around, like Styled Components or Apollo, the GraphQL client/server lib, 
so it's essential to understand how it works.

    const Button = styled.button` 
        font-size: 1.5em; 
        background-color: black; 
        color: white; 
    `

    const query = gql`
        query: {
            ...
        }
    `


                @ Spread Properties   ES2018
    const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
        first // 1 
        second // 2 
        others // { third: 3, fourth: 4, fifth: 5 }











                        REGULAR EXPRESSION IMPROVEMENTS
    RegExp lookbehind assertions: match a string depending on what precedes it 
        This is a lookahead: you use ?= to match a string that's followed by a specific substring:
            /Roger(?=Waters)/ 
            /Roger(?= Waters)/.test('Roger is my dog') //false 
            /Roger(?= Waters)/.test('Roger is my dog and Roger Waters is a famous musician') //true

        ?! performs the inverse operation, matching if a string is not followed by a specific substring:
            /Roger(?!Waters)/ 
            /Roger(?! Waters)/.test('Roger is my dog') //true 
            /Roger(?! Waters)/.test('Roger Waters is a famous musician') //false

        Lookaheads use the ?= symbol. They were already available. 
        Lookbehinds, a new feature, uses ?<= .
            /(?<=Roger) Waters/ 
            /(?<=Roger) Waters/.test('Pink Waters is my dog') //false 
            /(?<=Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') //true

        A lookbehind is negated using ?<! :
            /(?<!Roger) Waters/ 
            /(?<!Roger) Waters/.test('Pink Waters is my dog') //true 
            /(?<!Roger) Waters/.test('Roger is my dog and Roger Waters is a famous musician') //false
        
        Unicode property escapes \p{…} and \P{…}
    In a regular expression pattern you can use \d to match any digit, 
        \s to match any character that's not a white space, \w to match any alphanumeric character, and so on. 
    This new feature extends this concept to all Unicode characters introducing \p{} and is negation \P{} . 
    
    Any unicode character has a set of properties. For example Script determines the language family, 
        ASCII is a boolean that's true for ASCII characters, and so on. 
    You can put this property in the graph parentheses, and the regex will check for that to be true:

        /^\p{ASCII}+$/u.test('abc') //✅ 
        /^\p{ASCII}+$/u.test('ABC@') //✅ 
        /^\p{ASCII}+$/u.test('ABCݑ ') //❌

    ASCII_Hex_Digit is another boolean property, that checks if the string only contains valid hexadecimal digits:
        /^\p{ASCII_Hex_Digit}+$/u.test('0123456789ABCDEF') //✅ 
        /^\p{ASCII_Hex_Digit}+$/u.test('h') //

    There are many other boolean properties, which you just check by adding their name in the 
        graph parentheses, including Uppercase , Lowercase , White_Space , Alphabetic , Emoji and more
            /^\p{Lowercase}$/u.test('h') //✅ 
            /^\p{Uppercase}$/u.test('H') //✅ 
            /^\p{Emoji}+$/u.test('H') //❌ 
            /^\p{Emoji}+$/u.test('ݑ ݑ ') //✅
    
    In addition to those binary properties, you can check any of the unicode character properties to match a specific value. 
    In this example, I check if the string is written in the greek or latin alphabet:
            /^\p{Script=Greek}+$/u.test('ελληνικά') //✅ 
            /^\p{Script=Latin}+$/u.test('hey') //✅

    
                    @ Named capturing groups
    In ES2018 a capturing group can be assigned to a name, rather than just being assigned a slot in the result array:
            const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/ 
            const result = re.exec('2015-01-02') 
            
            // result.groups.year === '2015'; 
            // result.groups.month === '01'; 
            // result.groups.day === '02';

    The s flag for regular expressions The s flag, short for single line, causes the .
        to match new line characters as well. Without it, the dot matches regular characters but not the new line
            /hi.welcome/.test('hi\nwelcome') // false 
            /hi.welcome/s.test('hi\nwelcome') // true