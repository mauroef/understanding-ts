"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Mauro',
    age: 29,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log('user is admin.');
}
//# sourceMappingURL=objects-arrays-enums.js.map