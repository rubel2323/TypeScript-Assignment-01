## Blog-1:How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?


# Introduction

In large-scale TypeScript projects,it is very complex works for developers to  maintain and control Apps with team-collaboration.In many steps, control may be quite impossible.Thus ,the idea came as OOP by four pillars .....

## 1.Inheritance
## 2.Polymorphism
## 3.Abstraction
## 4.Encapsulation

Now, We will show  how OOP help manage logic and reduce complexity in large-scale TypeScript projects one by one with real example...

# 1.Inheritance
It looks like blood connection as Homo Sapiens .It follows `DO  NOT  REPEAT  YOURSELF  (DRY)` technique.So, we don't need to write code repeatedly.One class follows the characteristics of the other class. First class is called Parent class and derived class is called Child class.

```TypeScript

class Parent {
  name: string;
  age: string;
  address: string;

  constructor(name: string, age: string, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class A extends Parent {
  studyHours: number;
  constructor(name: string, age: string, address: string, studyHours: number) {
    super(name, age, address);
    this.studyHours = studyHours;
  }
  makeDaily() {
    console.log(`${this.name} is reading for ${this.studyHours} hours`);
  }
}

const object_A = new A('xianhu', '35', 'china', 8);
console.log(object_A.address);
console.log(object_A.name);
console.log(object_A.age);
object_A.makeDaily();

```

So, it belongs common functionality and hierarchical structure.Changes in one class will change every place as permitted with modifiers.

---
---
---

# 2.Polymorphism
It allows developer to use same method in various class as it means literally "many shapes". It helps us by making code flexible.It also allows developer to write generic code without using unnecessary loops in some moments.



``` TS example
class Person {
  getSleep() {
    console.log('hi I am a simple and modest person');
  }
}

class student extends Person {
  getSleep() {
    console.log('Hello, this is the students world');
  }
}

class teacher extends Person {
  getSleep(): void {
    console.log('this is the teacher');
  }
}

const funcName = (param: Person) => {
  return param.getSleep();
};

const obj1 = new student();
const obj2 = new teacher();
const obj3 = new Person();

funcName(obj1);
funcName(obj2);
funcName(obj3);

```


Thus Polymorphism makes extensibility when necessary.

---
---
---

# 3.Abstraction
It hides complexity and shows only necessary feature for us.It may be made with `interface` or `abstract class` keyword. Caller  must know only abstract method without internal code complexity.

```typeScript
interface Mediaplayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements Mediaplayer {
  play() {
    console.log('Playing music now...');
  }

  pause() {
    console.log('music player is paused');
  }

  stop(): void {
    console.log('music player is stopped');
  }
}

const habibPlayer = new MusicPlayer();
habibPlayer.stop();
habibPlayer.pause();

// Abstract class
// idea
abstract class SocialMediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;

  showInfo(): void {
    console.log('The version is 4.0.9.0');
  }
}

// implementation

class SocialMusicPlayer extends SocialMediaPlayer {
  play() {
    console.log('playing music from abstract class');
  }
  pause() {
    console.log('paused music from abstract class');
  }
  stop() {
    console.log('paused music from abstract class');
  }
}

const SocialMusicPlayer1 = new SocialMusicPlayer();
SocialMusicPlayer1.play();
SocialMusicPlayer1.stop();
SocialMusicPlayer1.showInfo();

```


In complex system,for example:Payment GateWay, we do need to change whole system without a new class implementation.
Thus abstract helps developer to interact with big system by normal interface.


---
---
---

# Encapsulation
It looks like a capsule of a medicine for data.The main parts of a code exists here but can not be accessed from outside.The internal part is controlled with access modifiers i.e. `public`, `private` or `protected` .

```TypeScript
class MyBankAccount {
    private _balance: number = 20; // Hidden from outside

    public deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited: ${amount}`);
        }
    }

    public getBalance(): number {
        return this._balance;
    }
}

const account = new MyBankAccount();
account.deposit(500);

```

By encapsulation validation logic can be controlled by getter and setter from outside state.


---
---
---

So, OOP in TypeScript helps update,control,team-collaboration very easily and in a cleaner way.
