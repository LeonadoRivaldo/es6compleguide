/* EXE 01 */
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => user.admin);

/* EXE 02 */
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => account.balance == 12);


/* EXE 03 */
function findWhere(array, criteria) {
  if(typeof criteria!='object'){
    return {};
  }

  let prop = Object.keys(criteria)[0];
  return array.find( i => i[prop] == criteria[prop]);
}
