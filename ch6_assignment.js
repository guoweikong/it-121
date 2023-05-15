function counter(nr) {
    console.log(nr);
    if(nr < 10) {
        counter (++nr);
    }
}

function main(nr) {
    counter(nr);
}

main(1);


function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

function three() {
    console.log("three");
    one();
    two();
}

function four() {
   console.log("four") ;
   setTimeout(() => {
    one();
  }, 0);
    three();
}

four();