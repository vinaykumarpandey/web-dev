// let x = function() {
//     alert("Helloworld1");
//   }
  
//   let y = function() {
//       alert("Helloworld2");
//     }

//     //const button = document.getElementById('btn');

//     btn.addEventListener('click' , x);
//     btn.addEventListener('click', y);


  
//    const changeBackgroundColor = () => {
//          document.getElementById('content').style.backgroundColor = 'red';
//     }

//     const makeTextBold = () => {
//         const contentDiv = document.getElementById('content');
//         contentDiv.firstChild.nodeValue = "This is good";
//         contentDiv.classList.add('italic-text');
//     }

//     const button = document.getElementById('btn');
//     if (button) { // Check if button exists
//         button.addEventListener('click', changeBackgroundColor);
//         button.addEventListener('click', makeTextBold);
//     } else {
//         console.error("Button with id 'btn' not found.");
//     }


    // let p1 = new Promise((resolve, reject) => {
    //     console.log("promise 1 is in the pending state");
    //    // console.log("promise 1 has been completed in 2 sec")
    //     resolve("promise1 has been resolved");
    // }, 2000)
    
    // p1.then((value) => {
    //     console.log("This is executed");
    //     let p2 = new Promise((resolve, reject) => {
    //         //console.log("new promise2 is resolved in 2 sec");
    //         resolve("promise2 has been resolved");
    //     }, 2000)
    //     console.log(value);
    //     return p2;
    // }).then((value) => {
    //     console.log("we are done!! with value " +value)
    //     return 2;
    // })

    function myFirst(){
        myDisplayer("Hello");
    }

    function myDisplayer(){
        console.log("my displayer");
    }

    function mySecond() {
       myDisplayer("GoodBye");
    }

    myFirst();
    mySecond();

