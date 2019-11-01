let allStoredArray = []
getAllStored = () => {
    for(let i = 0; i < window.localStorage.length; i++){
        let name = window.localStorage.key(i)
        let value = JSON.parse(window.localStorage[`${name}`])
        allStoredArray.push(value)
    }
}
getAllStored()

table = document.querySelector('table')

allStoredArray.forEach(function(element) {
    newRow = document.createElement('tr')
    newCol = document.createElement('td')
    newCol.innerHTML = element.source
    newRow.appendChild(newCol)

    newCol = document.createElement('td')
    newCol.innerHTML = element.destination
    newRow.appendChild(newCol)
    
    newCol = document.createElement('td')
    newCol.innerHTML = element.amount
    newRow.appendChild(newCol)

    newCol = document.createElement('td')
    newCol.innerHTML = element.notes
    newRow.appendChild(newCol)
    table.appendChild(newRow)
})
