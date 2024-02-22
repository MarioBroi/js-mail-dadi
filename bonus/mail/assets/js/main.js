//console.log('Test');

//MAIL
function myFunction() {

    let email = document.getElementById('myInput').value;
    const usersList = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
    let login = "You are not registered";

    for (let index = 0; index < usersList.length; index++) {

        if (email === usersList[index]) {
            login = "You can join"

        }
    }

    console.log(login); //login message
    document.getElementById("output").innerHTML = `<p>${login}</p>`;
}