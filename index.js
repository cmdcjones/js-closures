// The anonymous function is immediately invoked
// An object containing three functions is returned

const makeString = function () {
    let privateString = "";

    function appendString(str) {
        privateString += str;
    }

    return {
        foo() {
            appendString("foo");
        },

        bar() {
            appendString("bar");
        },

        baz() {
            appendString("baz");
        },

        print() {
            return privateString;
        }
    };
};

// each call of makeString creates a separate instance
const stringOne = makeString();
const stringTwo = makeString();

// console logs an empty string
console.log(stringOne.print());

// console logs foo
stringTwo.foo();
console.log(stringTwo.print());

// console logs foobarbaz
stringOne.foo();
stringOne.bar();
stringOne.baz();
console.log(stringOne.print());

// very messy but still a closure!
// each returned function can be invoked by passing arguments
// in parenthesis with respect to the function order
function collectAllStrings(strOne) {
    return function (strTwo) {
        return function (strThree) {
            return function (strFour) {
                return strOne + strTwo + strThree + strFour;
            };
        };
    };
}

// console logs "i am a closure!"
console.log(collectAllStrings("i ")("am ")("a ")("closure!"));
