const orders =[
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
]
function solution(array){
    const orders = array.map(item => {
        return{
            ...item,
            taxes: item.price*0.19
        }
    })
    return orders
}
console.log(solution(orders))