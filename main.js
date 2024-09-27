function displayContent(content) {
    result.value += content
}

function calcScreenClear() {
    result.value = ""
}

function calOutput() {
    result.value = eval(result.value)
}

function deleteLast() {
    result.value = result.value.slice(0,-1)
}