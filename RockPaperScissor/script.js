let uscore=0;
let cscore=0;

const choices=document.querySelectorAll(".choice");

const computerChoice =() =>{
    const options=["rock","paper","scissors"];
    let num=Math.random()*3;
    num=Math.floor(num);
    return options[num];

}

const msg=document.querySelector(".dice");
const pscore=document.querySelector(".p_score");
const compscore=document.querySelector(".c_score");

const showWinner = (userWin,score,userChoice,compchoice) =>{
    if(userWin)
    {
        msg.style.backgroundColor="green";
        msg.style.width="550px";
        msg.style.color="white";
        msg.innerText=`You Wins,${userChoice} beats ${compchoice}`;
        pscore.innerText=score;
    }
    else
    {
        msg.style.backgroundColor="red";
        msg.style.width="550px";
        msg.style.color="white";
        msg.innerText=`You Lose,${compchoice} beats ${userChoice}`;
        compscore.innerText=score;
    }
}

const showDraw = () =>{
    msg.style.width="250px";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
    msg.innerText="Draw";
}

const playGame=(userChoice)=>{
    console.log("user choice is ", userChoice);
    const compchoice=computerChoice();
    console.log("computer choice is ", compchoice);

    switch(userChoice)
    {
        case "rock":
            {
                if(compchoice==="rock")
            {
                showDraw(); 
            }
            else if(compchoice==="paper")
            {
                cscore++;
                showWinner(false,cscore,userChoice,compchoice);
                
            }
            else
            {
                uscore++;
                showWinner(true,uscore,userChoice,compchoice);
            }
            break;
            }

        case "paper":
            {
                if(compchoice==="rock")
            {
                uscore++;
                showWinner(true,uscore,userChoice,compchoice);
            }
            else if(compchoice==="paper")
            {
                showDraw();
            }
            else
            {
                cscore++;
                showWinner(false,cscore,userChoice,compchoice);
            }
            break;
            }
        
        case "scissor":
            {
                if(compchoice==="rock")
            {
                cscore++;
                showWinner(false,cscore,userChoice,compchoice);
            }
            else if(compchoice==="paper")
            {
                uscore++;
                showWinner(true,uscore,userChoice,compchoice);
            }
            else
            {
                showDraw();
            }
            break;
            }
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});