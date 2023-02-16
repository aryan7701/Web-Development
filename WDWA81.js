// use ShappingCart

db.smartphones.insertOne({name:"Samasung M51",price:24000, rating:4.5,qty:900,sold:360})

db.smartphones.insertMany([{name:"Samasung A31",price:20000, rating:4.0,qty:450,sold:224},{
    name:"Xiaomi Mi10s", price:15000, rating:4.4, qty:1500, sold:927},{name:"Moto 30s", price:"24000", rating:3.9, qty:1000, sold:678}])