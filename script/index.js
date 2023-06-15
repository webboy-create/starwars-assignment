// //fetch API
// let docBody = document.querySelector('body')
// function attachChar(entry){
//      let a = document.createElement('p')
//      a.append(entry)
//      docBody.append('a')


// async function main() {
//     let repoApi = new Request('https://swapi.dev/api/people')
//     let rawRepoApi = await fetch(repoApi)
//     let data = await rawRepoApi.json()
//     data.results.forEach(element => attachChar(element.name))
//     repoApi = new Request(data.next)
//     rawRepoApi = await fetch(repoApi)
//     data = await rawRepoApi.json()
//     data.results.forEach(element => attachChar(element.name))
//     repoApi = new Request(data.next)
//     rawRepoApi = await fetch(repoApi)
//     data = await rawRepoApi.json()
//     data.results.forEach(element => attachChar(element.name))



// }



// };


// main();


// // module.exports = { main }

main();

function main() {
    const ul = document.querySelector('ul');
    const [img, name, gender, height, button] = document.querySelectorAll('.details>*');
    const [sec1, sec2] = document.querySelectorAll('.home, .details')

    button.addEventListener('click', ()=>{
        sec1.classList.remove('hide');
        sec2.classList.add('hide');
    })

    apiFetch();

    async function apiFetch() {
        let request = new Request('https://swapi.dev/api/people');
        let response = await fetch(request);
        let myData = await response.json();
        //console.log(myData.results);

        while (myData.next !== null) {
            populate(myData);

            request = new Request(myData.next);
            response = await fetch(request);
            myData = await response.json();

            // console.log(myData.next);
        }
    }

    //apiFetch();    
    function populate(myData) {
        myData.results.forEach(character => {
            //do something
            // console.log(character.name);
            const li = document.createElement('li');
            li.innerHTML = character.name;
            ul.append(li);

            li.addEventListener('click', () => {
                displayInfo(character);
            });
        })
    }

    function displayInfo(character) {
        console.log(character.name);
        name.innerHTML = character.name;
        gender.innerHTML = character.gender;
        height.innerHTML = character.height;
        sec1.classList.add('hide');
        sec2.classList.remove('hide');
    }
}