function toggleBackground() {
    let image = document.getElementById('logo');
    if (image.src.match("Moon")) {
      image.src = "./img/Sun.png";
    } else {
      image.src = "./img/Moon.png";
    }

    //change background
    let body = document.querySelector('.main-body');
    body.classList.toggle("light-body");

    //change button color
    let btnNum = document.querySelectorAll(".num");
    for(let i = 0;i<btnNum.length;i++){
      btnNum[i].classList.toggle('light-button');
    }

    //Operator button toggle
    // let btnOp = document.getElementsByClassName("operator");
    // for(let btn in btnOp){
    //   btnOp[btn].classList.toggle('light-operator');
    // }

    //the above code generates an unexpected error
    //Operator toggle
    let btnOP = document.querySelectorAll(".operator");
    for(let i = 0;i<btnOP.length;i++){
      btnOP[i].classList.toggle('light-operator');
    }
    //change result text area color
    let userTxt = document.querySelector(".userVal");
    userTxt.classList.toggle('userVal-Light');

    let resultTxt = document.querySelector(".result");
    resultTxt.classList.toggle('result-light')

  }


  //clear text function
  function clear(){
    if(document.querySelector('.result').innerHTML.contains('.')){
      return null;
    }else{
      return '.';
    }
  }

  // window.addEventListener('keydown',(e)=>{
  //   if(e.key === 1 || e.key === 2 || e.key === 3 || e.key === 4 || e.key === 5 || e.key === 6 || e.key === 7 || e.key === 8 || e.key === 9 || e.key === 0 || e.key === '+'){
  //     document.querySelector('.userVal').innerHTML += e.key
  //   }else{
  //     return;
  //   }
  //   console.log(e)
  // }) 
  window.addEventListener('keydown',(e)=>{
    if(e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "0" || e.key === '+'){
      document.querySelector('.userVal').innerHTML += e.key;
    }
    else if(e.keyCode === 13){
      document.querySelector('.result').innerHTML = eval(document.querySelector('.userVal').innerHTML);
    }
    console.log(e);
})
