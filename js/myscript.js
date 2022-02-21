let firstName = prompt("Inserisci il tuo nome");
console.log("The first name is: " + firstName);
document.getElementById('first-name').innerHTML = firstName;

let lastName = prompt("Inserisci il tuo cognome");
console.log("The last name is: " + lastName);
document.getElementById('last-name').innerHTML = lastName;

let favoriteColor = prompt("Inserisci il tuo colore preferito");
console.log("The color is: " + favoriteColor);
document.getElementById('favorite-color').innerHTML = favoriteColor;

let passWord = firstName + lastName + favoriteColor + 21;
console.log("The password is: " + passWord);
document.getElementById('secure-pass').innerHTML = passWord;