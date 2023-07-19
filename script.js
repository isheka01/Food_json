let data = require('./food.json');
console.log('listing food items');
data.forEach(item=>{
    console.log(item.foodname);
})
console.log('listing food items with vegetable category');
data.forEach(item=>{
    if(item.category=='Vegetable')
    console.log(item.foodname);
})
console.log('listing food items with fruit category');
data.forEach(item=>{
    if(item.category=='Fruit')
    console.log(item.foodname);
})
console.log('listing food items with protein category');
data.forEach(item=>{
    if(item.category=='Protein')
    console.log(item.foodname);
})
console.log('listing food items with nuts category');
data.forEach(item=>{
    if(item.category=='Nuts')
    console.log(item.foodname);
})
console.log('listing food items with grains category');
data.forEach(item=>{
    if(item.category=='Grain')
    console.log(item.foodname);
})
console.log('listing food items with dairy category');
data.forEach(item=>{
    if(item.category=='Dairy')
    console.log(item.foodname);
})
console.log('listing food items with above 100 calorie');
data.forEach(item=>{
    if(item.calorie>100)
    console.log(item.foodname);
})
console.log('listing food items with below 100 calorie');
data.forEach(item=>{
    if(item.calorie<100)
    console.log(item.foodname);
})
data.sort((a,b)=>b.protiens-a.protiens)
data.forEach(item=>{
    console.log(item.foodname);
})
data.sort((a,b)=>a.cab-b.cab)
data.forEach(item=>{
    console.log(item.foodname);
})
