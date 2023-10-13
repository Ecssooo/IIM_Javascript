const playlist = ["Anissa - Wejdene", "Paint The Town Red - Doja cat", "Petit génie - Jungeli", "The Magic Key - Trinix", "Arranca - Becky"] 

class Personnage{
    constructor(){                      
        this.name = "John"
        this.hp = 10
    }
    setHP(){                              
        this.hp -= 1;
    }
}

class Trajet{
    constructor(){
        this.nbreFeu = 30
        this.nbreChgmt = 0
    }
    changement(){                         
        this.nbreChgmt += 1
    }
    feu(){                               
        this.nbreFeu -= 1
    }
}


const personnage = new Personnage()
const trajet = new Trajet()

function Taxi(){
    while(trajet.nbreFeu > 0){
        currentSong = playlist[Math.floor(Math.random()*playlist.length)];     
        console.log("Nombre de feu restant " + trajet.nbreFeu)                 
        console.log("Musique en cours : " + currentSong)                        
        trajet.feu()                                                            
        if(currentSong == "Anissa - Wejdene"){                                  
            personnage.setHP()                                                  
            trajet.changement()                                                
        }
        if(personnage.hp == 0){                                                 
            console.log("Explosion")        
            break                                                               
        }
        if(trajet.nbreFeu == 0){                                                
            console.log("Arriver avec "+trajet.nbreChgmt+" changements")
            break                                                               
        }
    }
}

Taxi()