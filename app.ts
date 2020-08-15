const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number];
} = {
  name: 'Mauro',
  age: 29,
  hobbies: ['sports', 'cooking'],
  role: ['author', 30],
};

person.role.push('admin');
person.role[1] = 10;
