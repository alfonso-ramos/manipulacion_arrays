const items = [3,2,3,4,6,2,3,6,8,1,2,1,1,1]

const rest = items.reduce((obj, item) =>{
    !obj[item] ? obj[item ] = 1 : obj[item] = obj[item] + 1
    return obj
}, {})

console.log(rest)