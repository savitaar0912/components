const button = document.getElementById("btn");
const username = document.getElementById("username");
const password = document.getElementById("password");

button.addEventListener("mouseover", function () {
    if (username.value.trim() === "" || password.value.trim() === "") {
        const section = button.parentElement;
        const maxX = section.clientWidth;

        const buttonWidth = button.offsetWidth;
        
        let newLeft = button.offsetLeft < maxX / 2 ? maxX - buttonWidth - 10 : 20;

        button.style.left = `${newLeft}px`;
        button.textContent = 'Data kaha h ?';
    } else {
        button.style.backgroundColor = "green";
        button.textContent = 'Login';
    }
});
