//the ability of objects to exhibit different forms or behaviors based on 
//their underlying class or interface

class Bird{
    fly(){
        console.log('Bird is flying');
    }
}

class penguin extends Bird{
    fly(){
        console.log('pengiun cannot fly');
    }
}

const bird = new Bird();
bird.fly();
const penguin1 = new penguin();
penguin1.fly();
