let count=0,count1=0,count2=0,result='';
function playRound(playerSelection) {
    // your code here!
    document.querySelector('h1').style.color='white';
    document.querySelector('h1').innerHTML='Start Game';
    if(count<5){
        const choice=["rock","paper","scissors"];
        let computerSelection=choice[Math.floor(Math.random()*choice.length)];
        if(computerSelection===playerSelection){
            result+=`draw<br/>`;
            document.querySelector('p').innerHTML=result;
            count++;
        }
        else if(computerSelection==="rock"){
            if(playerSelection==="paper"){
                result+=`You Win! Paper beats Rock<br/>`;
                document.querySelector('p').innerHTML=result;
                count++;
                count1++;
            }
            else if(playerSelection==="scissors"){
                result+=`You Lose! Rock beats Scissors<br/>`;
                document.querySelector('p').innerHTML=result;
                count++;
                count2++;
            }
        }
        else if(computerSelection==="paper"){
            if(playerSelection==="rock"){
                result+=`You Lose! Paper beats Rock<br/>`;
                document.querySelector('p').innerHTML=result;
                count++;
                count2++;
            }
            else if(playerSelection==="scissors"){
                result+=`You Win! Scissors beats paper<br/>`;
                document.querySelector('p').innerHTML=result;
                count++;
                count1++;
            }
        }
        else if(computerSelection==="scissors"){
            if(playerSelection==="rock"){
                result+=`You Win! Rock beats Scissors<br/>`;
                document.querySelector('p').innerHTML=result;
                count++;
                count1++;
            }
            else if(playerSelection==="paper"){
                result+=`You Lose! Scissors beats paper<br/>`;
                document.querySelector('p').innerHTML=result;
                count++;
                count2++;
            }
        }
        if(count==5){
                if(count1>count2){
                    document.querySelector('h1').style.color='green';
                    document.querySelector('h1').innerHTML='You Win!';
                }
                else{
                    document.querySelector('h1').style.color='red';
                    document.querySelector('h1').innerHTML='You Lose!';
                }
                count=0,count1=0,count2=0,result='';
        }
    }
}