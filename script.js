document.getElementById('click').addEventListener('click', function() {
alert('Your E-mail has been sent!');
}
)

let navigation = document.getElementById('navigation');
let burger = document.getElementById('burger');

burger.addEventListener('click', function() {
    navigation.classList.toggle('active');
})