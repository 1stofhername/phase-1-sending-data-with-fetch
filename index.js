const body = document.getElementsByTagName('body')[0];

function submitData (userName, userEmail) {

    let data = {
        "name": userName,
        "email": userEmail
    }

    fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then (res => res.json(data))
    .then (data => {
        body.innerHTML = `${userName}, ${userEmail}`
    })
    .catch (function(error){
        body.innerHTML = 'Unauthorized Access'
    })
}