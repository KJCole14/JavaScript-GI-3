function Person () {
    this.name = "Kabah",
    this.job = "apprentice",
    this.age = 23    
    
    var excercise = (activity) => {
        console.log(`${activity} is fun!- Said no one ever...`)
        return excercise;
    }
    

    var fetchJob = () => {
        console.log(`${this.name} is a ${this.job}`);
        return fetchJob;
    }
}