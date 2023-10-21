const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()

function generateJoke(){
    const config ={
        headers:{
            Accept : 'application/json'
        },
    }

    fetch('https://icanhazadadjoke.com/', config)
    .then((res)=> res.json())
    .then((data) => console.log(data))
}