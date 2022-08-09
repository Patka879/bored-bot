document.getElementById("bored-bot").addEventListener("click", function getIdea() {
    fetch('https://www.boredapi.com/api/activity') 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('idea').innerText = data.activity
        })
})