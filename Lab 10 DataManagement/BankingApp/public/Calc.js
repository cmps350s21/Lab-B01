function calculator( cf1 , cf2){
    let l1 = Math.log2(cf1)
    let l2 = Math.log2(cf2)
    console.log(-cf1*l1-cf2*l2)
}

calculator(4/7, 3/7)
calculator(3/7, 4/7)

//0.9852281360342515
//0.9852281360342515

let todos = ["one" , "two"]
//write to the localstorage
localStorage.todos = JSON.stringify(todos)

localStorage.setItem ("todos",  JSON.stringify(todos))

//read from local storage
todos = JSON.parse(localStorage.todos)

JSON.parse(localStorage.getItem ("todos"))

