main = () => {


    signIn = () => {
        button = document.querySelector('.profileButton');
        button.addEventListener('click', () => {
            location.replace('profile.html')
        })
    }

    signIn()
}

main()