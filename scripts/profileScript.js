function main() {
    getAllStored = () => {
        let stored = {}
        for(let i = 0; i < window.localStorage.length; i++){
            let name = window.localStorage.key(i)
            let value = JSON.parse(window.localStorage[`${name}`])
            stored[`${name}`] = value
        }
        return stored
    }

    storeAllInfo = () => {
        let user = {}
        let index = window.localStorage.length
        inputFields = document.querySelectorAll('.inputFields')
        inputFields.forEach(function(element){
            let node = element.firstElementChild
            let name = node.name
            let value = node.value
            user[`${name}`] = value
        })
         window.localStorage.setItem(`user${index}`,JSON.stringify(user))
    }
    storeAllInfo()
    output = getAllStored()
    console.log(output)
}
submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', main)