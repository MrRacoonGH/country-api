
fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        console.log(data[0].name.common)
    })
    .catch(function(err) {
        console.log("Une erreur est survenue", err)
    })



