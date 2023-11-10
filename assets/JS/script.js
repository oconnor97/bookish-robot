let testBtn = document.getElementById('testing');
let testInput = document.getElementById('sampleText');

testBtn.onclick = async () => { 
    console.log(testInput.value)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${testInput.value}`);
    const data = await res.json();
    console.log("Response", res);
    console.log("data", data.name)
    // console.log()
}

