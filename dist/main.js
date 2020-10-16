const results = document.querySelector('#results');


// Fetching data from the Star Wars API
async function asyncFetch(value){
    const res = await fetch(`https://swapi.dev/api/${value}`);

    const data =  await res.json();
    displayResults(data, value);
}


//  Films button logic 
function displayResults(data, value) {
    let output = "";
    console.log(data);
    if (value === 'films'){
        data.results.forEach(item => {
            output += `
             <div class="card p-3 m-3" style="opacity:.8">
             <h4 class="card-title text-center">${item.title}</h4>
             <div class="card-content">
              <span style="text-decoration:underline">Producer</span>:${item.producer}<br>
              <span style="text-decoration:underline">Director</span>:${item.director}<br>
              <span style="text-decoration:underline">Release Date</span>:${item.release_date}<br>
              <span style="text-decoration:underline">Characters</span>:${item.character}<br>
            
            </div>
            </div>

            `
            
        });
    }

 // people butons logic
if (value === 'people'){
        data.results.forEach(item => {
            output += `
             <div class="card p-3 m-3" style="opacity:.8">
             <h4 class="card-title text-center">${item.name}</h4>
             <div class="card-content">
              <span style="text-decoration:underline">Height</span>:${item.height}<br>
              <span style="text-decoration:underline">Mass</span>:${item.mass}<br>
              <span style="text-decoration:underline">Hair color</span>:${item.hair_color}<br>
              <span style="text-decoration:underline">Skin color</span>:${item.skin_color}<br>
              <span style="text-decoration:underline">Eye color</span>:${item.eye_color}<br>
              <span style="text-decoration:underline">Birth year</span>:${item.birth_year}<br>
              <span style="text-decoration:underline">Gender</span>:${item.gender}<br>
              <span style="text-decoration:underline">Films </span>:${item.films}<br>
            </div>
            </div>

            `
            
        });
    }



    results.innerHTML = output;
}


//EVENT LISTENER FOR BUTTONS

document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());
})