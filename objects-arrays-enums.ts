enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'Mauro',
  age: 29,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('user is admin.');
}
