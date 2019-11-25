// EXERCICE 1 et 2
alert("EXO 1\nNom: Doe\nPrénom: John\nVille: New-York");
//autre méthode possible:
// var lastName = 'Doe'
// var firstName = 'John'
// var city = 'New-York'
// alert('Nom : ' + lastName + '\n' + 'Prénom :' + firstName + '\n' 'Ville :' + 'City')

// EXERCICE 3
var valeur = prompt("EXO 3\nPrénom:");
alert("EXO 3\nBonjour" + ' ' + valeur);

// EXERCICE 4
function displayInfo() {
    var newLastName = document.getElementById('lastName').value;
    var newFirstName = document.getElementById('firstName').value;
    var newCity = document.getElementById('city').value;
    alert('Nom : '+ newLastName + '\n' + 'Prénom :' + newFirstName + '\n' + 'Ville :' + newCity);
}

// EXERCICE 5
function divisionNombre() {
    var newNb1 = document.getElementById('nombre1').value;
    var newNb2 = document.getElementById('nombre2').value;
    alert(newNb1 % newNb2);
}

// EXERCICE 6
function result() {
    var newPointure = document.getElementById('pointure').value;
    var newYear = document.getElementById('year').value;
    var result = (newPointure * 2 + 5) * 50 - newYear + 1769;
    alert(result);
}

// EXERCICE 7
function answer() {
    var age = document.getElementById('age').value;
    if(age >= 18) {
      alert("Vous êtes VIEUX");
    }
    else {
      alert("Vous êtes UN BEBE");
    }
}