var person /* : {
  name: string;
  age: number;
} */ = {
    name: 'Mauro',
    age: 29,
    hobbies: ['sports', 'cooking']
};
var favoriteActivities;
favoriteActivities = ['sports', 100, true];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(person.name);
