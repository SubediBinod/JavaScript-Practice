// Object = A collection of related properties and/or methods 
// can represent real world objects (People,Products,places)

// object ={key:CSSMathValue,function()}



const person1={
    name: 'Monkey D Luffy',
    age : 19,
    occupation : 'Pirate Captain;Emperor;Senior Captain of the Grand Fleet',
    favFood: 'Meat',
    display:()=>
    {
        console.log( "\n name :: "+person1.name );console.log( "\n age:: "+person1.age );
    console.log( "\n occupation :: "+person1.occupation );console.log( "\n favorite food:: "+person1.favFood)
    },
    Greet :()=>{console.log(' Luffy says :: \n orewa Luffy ,Kaizoku ou ni ore wa naru\n')},
}

const person2={
    name: 'Roronoa Zoro',
    age : 21,
    occupation : ' Master Swordsman ;Crew Combatant; Senior Officer of the Grand Fleet',
    favFood: 'Booze',
    display:()=>
    {
        console.log( "\n name :: "+person2.name );console.log( "\n age:: "+person2.age );
    console.log( "\n occupation :: "+person2.occupation );console.log( "\n favorite food:: "+person2.favFood)
    },
    Greet :()=>{console.log(' Zoro says :: \nI do things my own way! So don\'t give me any lip about it!\n')},
}


person1.display()
person1.Greet()

person2.display()
person2.Greet()

