//Questions:
//1.Show products from /products

fetch('/products',{
    method:'GET'
})
    
.then((response) =>{
    return response.json();
})

.catch(function (error){
    console.log(error);
});   
 
//2.Show fruits from /products/fruits
fetch('/products/fruits',{
    method:'GET'
})
.then(function (response){
    return response.json();
})

.then(function (error){
    console.log(error)
})


//3.Show vegetables from /products/vegetables
fetch('/products/vegetables',{
    method:'GET'
}
)
.then(function(response){
    return response.json();
})

.then(function(error){
    console.log(error)
})
