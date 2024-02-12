const user = {
    name: 'John',
    address: {
        city: 'New York',
        postalCode: '10001'
    }
};

console.log(user.address?.city); // New York
console.log(user.address?.country); // undefined
console.log(user.address?.country?.state); // undefined
console.log( user.address.city?.length);// Output: 8
