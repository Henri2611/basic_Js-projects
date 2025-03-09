function randomQuote(quotes){
    
        let rndm = Math.floor(Math.random() * quotes.length);
        return quotes[rndm];
    
}
console.log(randomQuote( [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "Be the change you wish to see in the world. - Mahatma Gandhi",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
]))
