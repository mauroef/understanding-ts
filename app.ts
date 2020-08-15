const person /* : {
  name: string;
  age: number;
} */ = {
  name: 'Mauro',
  age: 29,
  hobbies: ['sports', 'cooking'],
};

let favoriteActivities: any[];

favoriteActivities = ['sports', 100, true];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

// console.log(person.name);
