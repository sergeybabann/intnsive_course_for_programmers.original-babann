import 'babel-polyfill';

import Timer from './timer';

/* global require Symbol */
let counter1 = require('./some.js');
import * as counter2 from './other.js';
import {gen, getDischarges} from './gen.js';

window.addEventListener('load', function(){

    let timer1 = new Timer(document.querySelector('.timer1'), 10);
    console.log(timer1);

    counter1.cnt = 5;
    this.console.log(counter1.cnt);
    counter1.inc();
    counter1.inc();
    counter1.inc();
    this.console.log(counter1.cnt);

    this.console.log(counter2.get());
    counter2.inc();
    counter2.inc();
    counter2.inc();
    this.console.log(counter2.get());

    let arr = [100, 200, 300];

    for(let num of arr){
        this.console.log(num);
    }

    for(let num of 'hello'){
        this.console.log(num);
    }

    let forPasport = Symbol();

    let user = {
        firstName: 'Name',
        lastName: 'Last',
        [forPasport]: 467382497328473982
    };

    for(let key in user){
        this.console.log(`${key}: ${user[key]}`);
    }

    this.console.log(user[forPasport]);

    let someObj = {
        to: 10,
        [Symbol.iterator]: function(){
            let current = 0;
            let stop = this.to;

            return {
                next(){
                    if(current <= stop){
                        return {
                            done: false,
                            value: current++
                        }
                    }
                    else{
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    };
   
    for(let some of someObj){
        this.console.log(some);
    }

    let someGen = gen(1, 5);

    for(let some of someGen){
        this.console.log(some);
    }

    let someNum = 34873857923;

    for(let num of getDischarges(someNum)){
        this.console.log(num);
    }

});