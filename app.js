

let result
let prevNumber = 0
let action = ""
let history = []

function gen() {
    const main = document.getElementById("calculator")

    let buttons = {}

    for (let i = 0; i < 10; i++) {
        let key = document.createElement("button")
        key.innerText = i
        key.onclick = show
        key.dataset.value = i
        buttons[i.toString()] = key
        main.appendChild(key)
    }

    let dotButton = document.createElement("button")
    dotButton.innerText = "."
    dotButton.onclick = addDot
    main.appendChild(dotButton)

    let addButton = document.createElement("button")
    addButton.innerText = "+"
    addButton.onclick = add
    main.appendChild(addButton)
    buttons["+"] = addButton

    let substractButton = document.createElement("button")
    substractButton.innerText = "-"
    substractButton.onclick = sub
    main.appendChild(substractButton)
    buttons["-"] = substractButton

    let multiplyButton = document.createElement("button")
    multiplyButton.innerText = "x"
    multiplyButton.onclick = mul
    main.appendChild(multiplyButton)
    buttons["*"] = multiplyButton

    let divideButton = document.createElement("button")
    divideButton.innerText = "/"
    divideButton.onclick = div
    main.appendChild(divideButton)
    buttons["/"] = divideButton

    let equalButton = document.createElement("button")
    equalButton.innerText = "="
    equalButton.onclick = equal
    main.appendChild(equalButton)
    buttons["="] = equalButton

    let cButton = document.createElement("button")
    cButton.innerText = "c"
    cButton.onclick = removeLastChar
    main.appendChild(cButton)

    let clearButton = document.createElement("button")
    clearButton.innerText = "ce"
    clearButton.onclick = clear
    main.appendChild(clearButton)

    result = document.createElement("text")
    result.innerText = ""
    main.appendChild(result)
}

function show(){
    result.innerText += this.dataset.value
}

function clear(){
    result.innerText = ""
}

function addDot(){
    result.innerText += "."
}

function removeLastChar(){
    result.innerText = result.innerText.slice(0, -1)
}

function add(){
    prevNumber = parseFloat(result.innerText)
    result.innerText = ""
    action = "add"
}

function sub(){
    prevNumber = parseFloat(result.innerText)
    result.innerText = ""
    action = "sub"
}

function mul(){
    prevNumber = parseFloat(result.innerText)
    result.innerText = ""
    action = "mul"
}

function div(){
    prevNumber = parseFloat(result.innerText)
    result.innerText = ""
    action = "div"
}

function equal(){
    if(action === "add"){
        result.innerText = prevNumber + parseFloat(result.innerText)
    }else if(action === "sub"){
        result.innerText = prevNumber - parseFloat(result.innerText)
    }else if(action === "mul"){
        result.innerText = prevNumber * parseFloat(result.innerText)
    }else if(action === "div"){
        result.innerText = prevNumber / parseFloat(result.innerText)
    }

    if(history.length > 4){
        history.pop()
    }
    history.push(result.innerText)
    const HTML = history.map( item => `<li>${item}</li> ` ).join(' : ');
    document.getElementById("history").innerHTML = '<ul>' + HTML + '</ul>'
    result = ""
}