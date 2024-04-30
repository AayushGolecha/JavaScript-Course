let ran = Math.floor(Math.random() * 10)
console.log(ran)

let jokeArr = [`Did you hear about the first restaurant to open on the moon?It had great food, but no atmosphere.
`, `Why don’t scientists trust atoms? Because they make up everything!`, ` What do dentists call their x-rays?
Tooth pics!`, `What did one ocean say to the other ocean? Nothing, it just waved.`, `Do you want to hear a construction joke?
Sorry, I’m still working on it.`, `Did you hear about the fire at the circus? It was in tents!`, `Did you hear about the fire at the circus? It was in tents!`, `What’s the difference between a hippo and a zippo? One is really heavy and the other’s a little lighter.`, `What does a nosey pepper do? It gets jalapeño business.`, `Why should you never trust stairs?
They’re always up to something.`]

let randomJoke = jokeArr[ran]
console.log(randomJoke)
document.getElementById("joke").innerHTML=randomJoke
document.getElementById("joke").style.fontSize="1.5rem"

