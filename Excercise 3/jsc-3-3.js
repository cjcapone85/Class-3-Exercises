const cars = {
    a: "Camaro",
    b: "Jimmy",
    c: "Altima"
};

const propertyCars = Object.keys(cars);
const propertyValues = Object.values(cars);


console.log(propertyCars);
console.log(propertyValues);






// ## Exercise #3: Advanced

// **Aim**: Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

// _Examples_

// ```js
// keysAndValues({ a: 1, b: 2, c: 3 })
//    ➞    [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//    ➞    [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
//    ➞    [["key1", "key2", "key3"], [true, false, undefined]]
// ```



// for (i=0; i < cars.length; i++) {
//     console.log(propertyCars[i], propertyValues[i])
// };