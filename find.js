let fruits = [
  { name:"Melancia": qdt:0 },
  { name:"Pera": qdt:1 },
  { name:"Melancia pequena": qdt:10 },
]


fruits.find((fruit) => {
  return fruit.name.toLowerCase().indexOf('melancia')>-1 && fruit.qtd > 0;
})





let users = [
  {name:"leonardo", id:1, ff:2},
  {name:"ju", id:2, ff:4},
  {name:"drogo&thanos", id:3, ff:6}
]


let foods = [
  {name:"Leite condensado", ownerId:1, id:1},
  {name:"Chocolate", ownerId:1, id:2},
	{name:"Melancia", ownerId:2, id:3},
  {name:"Torta de bolacha", ownerId:2, id:4},
  {name:"Ração", ownerId:3, id:5},
  {name:"Arroz com frango", ownerId:3, id:6}
]


function findUserFoods(user, foods){
  return foods.filter(f=>f.ownerId == user.id);
}

function findUserFavoriteFood(user, foods){
  return foods.find(function(food){
  	return food.id == user.ff && food.ownerId == user.id;
  });
}


let ffleo = findUserFavoriteFood({id:1, ff:2}, foods)
ffleo;
