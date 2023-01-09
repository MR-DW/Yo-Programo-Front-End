

fetch ('http://127.0.0.1:5500/Pratica-JSON/star-wars.json')
.then((res)=> res.json())
.then((data) => {
    const jedi = data.master;
    console.log(jedi);


const div = document.getElementById('container');

div.innerHTML = jedi;

});