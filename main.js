const person1 = {
    name: 'Chris',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
}

const person2 = {
    name: 'Brian',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
}

person1.greeting();