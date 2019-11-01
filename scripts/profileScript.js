function main() {

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
}
submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', main)