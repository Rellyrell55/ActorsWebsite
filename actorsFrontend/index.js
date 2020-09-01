fetch("http://localhost:3000/actors")
    .then(response => response.json())
    .then(actors => actors.forEach(actor => {
        const actorCard = document.createElement('div')
        const image = document.createElement('img')
        const actorBio = document.createElement('p')
        const actorName = document.createElement('h1')
        


        image.src = actor.image
        actorBio.innerHTML = `${actor.bio}`
        actorName.innerHTML = `${actor.name} - ${actor.age}`



        const main = document.querySelector("main")
        actorCard.append(image, actorName,actorBio)
        main.appendChild(actorCard)

    }))

    // function addActor(name, age, image, bio){
        
    // }