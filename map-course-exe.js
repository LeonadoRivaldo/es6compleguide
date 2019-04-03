/* EXE 01 */
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(i=> i.height);


/* EXE 02 */
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(t => (t.distance / t.time) );


/* exe 03 */
function pluck(array, property) {
  return array.map( o => o[property] )
}
