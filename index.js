const { Amazon_product, bath_product, book_product} = require('./models');
const amazon_product = require('./models/amazon_product');

//crud for player

// //CREATE
// book_product.create({
//   name: 'coding for dummies',
//   brand: 'future kyle',
//   price: 1000,
//   review: 10,
// })
// .then(function(newbook_product){
//   console.log(newbook_product.toJSON());
// })
// .catch(function(error){
//   console.log("Error creating book_product", error);
// });

// read a player
//[Player.findAll]=> find all the players (grab every row in Players table)
//[Player.findOne] => find one player (search for 1 specific player [1 row])
//[Player.findByPk]() => find one player by the Primary Key (id)

// bath_product.findByPk(4)
// .then(function(xx){
//   console.log(xx);
// })
// .catch(function(err){
//   console.log(err)
// });

// Player.findOne({where: {college: 'Steph Curry'}})
// .then(function(player){
//     console.log(player.toJSON());
// })
// .catch(function(err){});

// Player.findByPk(7)
// .then(function(player){
//     console.log(player.toJSON());
// })
// .catch(function(err){});

// Team.findByPk(9)
// .then(function(team){
//     console.log(team.toJSON());
// })
// .catch(function(err){});


// UPDATE
// Player.update({
//     name:'AND ANOTHER ONE YOOOO',
//     number: 666,
//     position: 'Center',
//     college: 'Kentucky',
//     team: 'Lakers',
//     salary: 0,
//     height: 600000,
//     weight: 19000075,
// },{
//     where: {id:4}
// })
// .then(function(numberOfRows){})
// .catch(function(){})

// book_product.update({
//   name: 'SMART CODERS',
//   brand: 'present kyle',
//   price: 69,
//   review: 10,
//       },{
//     where: {id:11}
// })
// .then(function(numberOfRows){})
// .catch(function(){})


//Delete
//[Player.destroy]({ where: { name: 'Anthony Davis' } })
// book_product.destroy({ where: { id: 11} })
// .then(function(response){
//     console.log("Response from database after deleting data...");
//     console.log(response);
// })
// .catch(function(err){
//     console.log("error with adding new team", err);
// })

//and thats crud!!!! 
//C reate
//R ead
//U pdate
//D elete


// Team.create({
//     name: 'Bulls',
//     conference: 'Eastern',
//     founded: 1966,
//     location: 'Chicago',
//     championships: 6,
//     website: 'https://en.wikipedia.org/wiki/Chicago_Bulls',
//   })
//   .then(function(newTeam){
//     console.log(newTeam.toJSON());
//   })
//   .catch(function(error){
//     console.log("Error creating Team", error);
//   });
  

//find or create

book_product.findOrCreate({
  where: {
    name: 'coding for dummies',
  },
  defaults: {    
    brand: 'future kyle',
    price: 1000,
    review: 10,}
}).then(([user, created])=>{
  console.log(user); // returns info about the user
});