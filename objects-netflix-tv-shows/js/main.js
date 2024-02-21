//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeShow{
    constructor(showTitle, showLength, showReality, showComedy){
        this.title = showTitle
        this.length = showLength
        this.reality = showReality
        this.showComedy = showComedy
    }
    info(){
        alert(`You are watching ${showTitle}`)
    }
    status(){
        alert(`You are watching TV`)
    }
    play(){
        console.log('Playing....')
    }
}

let betterCallSaul = new MakeShow('Better Call Saul', '45 minutes', false, false)

