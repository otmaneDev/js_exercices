
//contruction de page html
let counter = document.createElement('h3');
let div = document.createElement('div');
let body = document.querySelector('body')
body.appendChild(div);
body.appendChild(counter);
div.innerHTML = "<h1>Heading<h1>";
div.innerHTML += "<p>Hey , you're not permitted in there. It's restricted. You'll be deactivated for sure.. Don't call me a mindless philosopher, you overweight glob of grease ! Now come out before somebody sees you. Secret mission ? What plans ? What are you talking about ? I'm not getting in there ! I'm going to regret this. There goes another one. Hold your fire. There are no life forms. It must have been short-circuited. That's funny, the damage doesn't look as bad from out here. Are you sure this things safe ? Close up formation. You'd better let her loose. Almost there ! I can't hold them ! It's away ! It's a hit ! Negative. Negative ! It didn't go in. It just impacted on the surface. Red Leader, we're right above you. Turn to point... oh-five, we'll cover for you. Stay there... I just lost my starboard engine. Get set to make your attack run. The Death Star plans are not in the main computer. Where are those transmissions you intercepted ? What have you done with those plans ? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador ? Commander, tear this ship apart until you've found those plans and bring me the Ambassador. I want her alive ! There she is ! Set for stun ! She'll be all right. Inform Lord Vader we have a prisoner. What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way ? All right, men. Load your weapons ! Stop that ship ! Blast 'em ! Chewie, get us out of here ! Oh, my. I'd forgotten how much I hate space travel. Run, Luke ! Run ! </p>"
let title = document.querySelector('h1');
let paragraphe = document.querySelector('p');
title.style.textAlign = 'center';
div.style.width = '50%';
div.style.margin = 'auto';
div.style.boxShadow = '0 5px 5px gray';
div.style.border = 'solid 2px black';
div.style.padding = '20px';

//Q1:Highlight

let words = paragraphe.innerText.trim().split(" ");
for(let i=0;i<words.length;i++){
    if(words[i].length>=6){
        words[i]= `<mark>${words[i]}</mark>`;
    }
}
div.innerHTML = "<h1 id='tt'>Heading<h1>";
let hparag = `<p>${words.join(' ')}</p>`;
replace();


//Q2:Add a link

div.innerHTML +="<a href=https://forcemipsum.com/>https://forcemipsum.com/</a>";

//Q3:Split to sentences

let sentences = paragraphe.innerText.split(".");
for(let i=0;i<sentences.length;i++){
    if(sentences[i]!=''){
        div.innerHTML +=`<p>${sentences[i]}.</p>`;
    }
}

//Q4:counter

counter.innerText =`number of word is ${words.length}`;
body.style.position = 'relative';
counter.style.position = 'absolute';
counter.style.top = '70px';
counter.style.left = '40%';

//Q5:Replace

function replace(){
let hrparag = hparag.replaceAll("?" ,"🤔").replaceAll("!" ,"😲");
div.innerHTML += hrparag;
let titlee = document.getElementById('tt');
titlee.style.textAlign = 'center';
titlee.style.marginBottom = '50px';
}
















