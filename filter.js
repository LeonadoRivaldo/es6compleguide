function greaterThen(x){
  return function(number){
    return number > x;
  }
}


/* EXE 01 */
let greaterThen50 = greaterThen(50);
let numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
let filteredNumbers = numbers.filter(greaterThen50);


/* EXE 02 */
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];
var filteredUsers = users.filter(u=>u.admin);
