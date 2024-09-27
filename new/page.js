// let x = function() {
//     alert("Helloworld1");
//   }
  
//   let y = function() {
//       alert("Helloworld2");
//     }

//     //const button = document.getElementById('btn');

//     btn.addEventListener('click' , x);
//     btn.addEventListener('click', y);


  
   const changeBackgroundColor = () => {
         document.getElementById('content').style.backgroundColor = 'red';
    }

    const makeTextBold = () => {
        const contentDiv = document.getElementById('content');
        contentDiv.firstChild.nodeValue = "This is good";
        contentDiv.classList.add('italic-text');
    }

    const button = document.getElementById('btn');
    if (button) { // Check if button exists
        button.addEventListener('click', changeBackgroundColor);
        button.addEventListener('click', makeTextBold);
    } else {
        console.error("Button with id 'btn' not found.");
    }



