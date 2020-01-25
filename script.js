function decide(human,bot){
    var botcount = 0,humancount = 0;
    if(human == 0 && bot == 1 || human == 1 && bot == 2 || human == 2 && bot == 0 ){
        humancount++;
        return 1;
    }
    else if(human == bot){
        return 0;
    }
    else{
        botcount++;
        return -1;
        
    }
}

function mess(result){
    if(result == 0){
        return {message:"Draw match!",color:"Yellow"};
    }
    else if(result == 1){
        return {message:"You won!",color:"Green"};
    }
    else{
        return {'message':"You lost!",'color':"Red"};
    }

}  

function rpsimage(humanimage,botimage,message){
    var imagedata = {
        'rock' : document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src

    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var message = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" + imagedata[humanimage] + "' height=150 width=150>";
    botDiv.innerHTML = "<img src = '" + imagedata[botimage] +"' height=150 width=150>";
    
    document.getElementById("RPS").appendChild(humanDiv);
    

}



function rps(choice){
    var bot,human;  
    human = choice;   
    console.log("Choice is:"+ choice);
    bot= Math.floor(Math.random()*3);
    console.log("Bot is:"+ bot);
    message = mess(decide(human,bot));
    console.log(message);
    rpsimage(human,bot,message);


    
}

