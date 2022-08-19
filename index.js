//Questions:
//1.Show products from /products
//2.Show fruits from /products/fruits
//3.Show vegetables from /products/vegetables

fetch('localhost:5000/products',)
 
.then((response) =>{
    return response.json();
})

.then( (data)=> {
    })

    .then((data) => {
      let products = data;
      for(var a=0; a<data.length; a++){
      document.getElementById("products").innerHTML += data[i].name +" :" +data[i].category;
      }
    })

.catch(function (error){
    console.log(error);
});   
  

fetch('localhost:5000/products/fruits',)
.then(function (response){
    return response.json();
});

.then(function (error){
    console.log(error)
})


fetch('localhost:5000/products/vegetables',
)
.then(function(response){
    return response.json();
})

.then(function(error){
    console.log(error)
})
