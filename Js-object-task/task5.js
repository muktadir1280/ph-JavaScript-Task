let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for (const keys in myObject) {
    console.log('key:', keys, '| type:', typeof(myObject[keys]));
}