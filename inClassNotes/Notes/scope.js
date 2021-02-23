/*

Scope is the heirarchy of variables in our code
    -Global or Parent Scope
    -Local or Child Scope

*/

let global = 'Earth';

function scopeExample(){
    let local = 'Indianapolis';
    let inner = 'It has many places to visit'
    console.log(local)
    console.log(`${local} is a humble city on ${global}`);
    if(true) {
        let inner = 'What a large city';
        console.log(inner);
    }
    console.log(inner);
}

scopeExample();
// console.log(local); blocked out by scope; not defined --> local does not exist outside of the function
