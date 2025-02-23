let counterUp = document.querySelectorAll(".counterUp"); //Gets all html tag with counterUp class
let counterUpArr = Array.from(counterUp); //Converts NodeList into Array
// console.log(counterUp);
// console.log(counterUpArr);

counterUpArr.map((item)=>{
    // console.log(item);
    // console.log(item.innerHTML);
    // console.log(item.dataset.number);

    let counter = 0;   
    function count() {   
        counter++;

        //Write inside the HTML tag
        item.innerHTML = counter;
    
        //Stop Condition
        if (counter == item.dataset.number) {
          clearInterval(stop);
        }
      }

      // CounterUp iterations
      let stop = setInterval(function () {
        count(counter, item);
      }, 1000/item.dataset.number);
    
  });
