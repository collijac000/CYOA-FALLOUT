


document.getElementById('adds').style.visibility='hidden';
document.getElementById('addp').style.visibility='hidden';
document.getElementById('adde').style.visibility='hidden';
document.getElementById('addc').style.visibility='hidden';
document.getElementById('addi').style.visibility='hidden';
document.getElementById('adda').style.visibility='hidden';
document.getElementById('addl').style.visibility='hidden';
document.getElementById('subs').style.visibility='hidden';
document.getElementById('subp').style.visibility='hidden';
document.getElementById('sube').style.visibility='hidden';
document.getElementById('subc').style.visibility='hidden';
document.getElementById('subi').style.visibility='hidden';
document.getElementById('suba').style.visibility='hidden';
document.getElementById('subl').style.visibility='hidden';
document.getElementById('start').style.visibility='hidden';


caps=0;
//Special Stats
let getSpecial = function () {
  document.getElementById('adds').style.visibility='visible';
  document.getElementById('addp').style.visibility='visible';
  document.getElementById('adde').style.visibility='visible';
  document.getElementById('addc').style.visibility='visible';
  document.getElementById('addi').style.visibility='visible';
  document.getElementById('adda').style.visibility='visible';
  document.getElementById('addl').style.visibility='visible';
  document.getElementById('subs').style.visibility='visible';
  document.getElementById('subp').style.visibility='visible';
  document.getElementById('sube').style.visibility='visible';
  document.getElementById('subc').style.visibility='visible';
  document.getElementById('subi').style.visibility='visible';
  document.getElementById('suba').style.visibility='visible';
  document.getElementById('subl').style.visibility='visible';
  document.getElementById('start').style.visibility='visible';



  let randMin = 1;
  let randmax = 10;
  let randRange = randmax - randMin;
  
  do{
  s = Math.floor(Math.random() * (randRange + 1)) + randMin;
  p = Math.floor(Math.random() * (randRange + 1)) + randMin;
  e = Math.floor(Math.random() * (randRange + 1)) + randMin;
  c = Math.floor(Math.random() * (randRange + 1)) + randMin;
  i = Math.floor(Math.random() * (randRange + 1)) + randMin;
  a = Math.floor(Math.random() * (randRange + 1)) + randMin;
  l = Math.floor(Math.random() * (randRange + 1)) + randMin;
  
  total=(s+p+e+c+i+a+l)
  total=parseInt(total);
  }
  while(total>=28);
  points=28-total

  document.getElementById("pointos").innerHTML ="Points:" +points;

  document.getElementById("str").innerHTML = " <span class=spacingStuff>Strength </span> "
  document.getElementById("strc").innerHTML = s;

  document.getElementById("per").innerHTML = " <span class=spacingStuff>Perception</span> "
  document.getElementById("perc").innerHTML = p

  document.getElementById("end").innerHTML = " <span class=spacingStuff>Endurence</span> "
  document.getElementById("endc").innerHTML = e
  document.getElementById("cha").innerHTML = " <span class=spacingStuff>Charisma </span> "
  document.getElementById("chac").innerHTML = c
  document.getElementById("int").innerHTML = " <span class=spacingStuff>Inteligence</span> "
  document.getElementById("intc").innerHTML = i
  document.getElementById("agi").innerHTML = " <span class=spacingStuff>Agility</span> "
  document.getElementById("agic").innerHTML = a
  document.getElementById("luc").innerHTML = " <span class=spacingStuff>Luck</span> "
  document.getElementById("lucc").innerHTML = l;
}

let add = function (letter) {
  if (points == 0) {
    points += 0;
  } else {
    switch (letter) {
      
      case 's':
      if(s!=10){ s++; document.getElementById("strc").innerHTML = s;
        points -= 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'p':
      if(p!=10){ p++; document.getElementById("perc").innerHTML = p;  points -= 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'e':
      if(e!=10){ e++; document.getElementById("endc").innerHTML = e;
        points -= 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'c':
      if(c!=10){ c++; document.getElementById("chac").innerHTML = c;
        points -= 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'i': 
      if(i!=10){i++; document.getElementById("intc").innerHTML = i;
        points -= 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'a':
      if(a!=10){ a++; document.getElementById("agic").innerHTML = a;
        points -= 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'l':
      if(l!=10){ l++; document.getElementById("lucc").innerHTML = l;
        points -= 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
    
    }
  }
}

let sub = function (letter) {
  if (letter==0) {
    points += 0;
  } else {
    switch (letter) {
      case 's':
      if(s!=1) {s-=1; document.getElementById("strc").innerHTML = s;
        points += 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;  
      case 'p':
      if(p!=1){ p--; document.getElementById("perc").innerHTML = p; points += 1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'e':
      if(e!=1){ e--; document.getElementById("endc").innerHTML = e;
        points +=1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'c':
      if(c!=1){
        c--; document.getElementById("chac").innerHTML = c;
        points +=1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'i':
      if(i!=1){ i--; document.getElementById("intc").innerHTML = i;
        points +=1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'a':
      if(a!=1){ a--; document.getElementById("agic").innerHTML = a;
        points +=1;
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
      case 'l':
      if(l!=1){ l--; document.getElementById("lucc").innerHTML = l;
        points +=1
        document.getElementById("pointos").innerHTML = "Points:"+points;}
        break;
    }
  }
}


caps=0;
   inv="";

//The actual Start of the Game

let startStuff=function(){


document.getElementById("deleteStuff").innerHTML="<div id='container'><div id='words'></div><div id='choices'></div></div>"
document.getElementById("words").innerHTML="<h1> Intro</h1> Its the year 2281 after a nuclear war changed the face of the Earth in 2077. You are a courier (like a mailman) in the Mojave Wasteland near New Vegas You were receantly shot in the head and brought back to recovery<br><br> You wake up in the doctors house who has brought you to full recovery. He has tested you and everything seems to be in in order. He tells you you are in a town called <b> GoodSprings</b> near <b>New Vegas</b>. Though traveling through the <b>Mojave Wasteland</b> will be quite dangerous He sends you on your way. "
document.getElementById("choices").innerHTML="<br><input type='radio' onclick= 'gs1()' id='g3'>Explore GoodSprings <br><input type='radio' onclick= 'nv1()'>Travel to New Vegas <br><input type='radio' onclick= 'mw1()'>Explore the Mojave Wasteland"

  if(inv.includes("rifle")){
    document.getElementById("g3").disabled="true"

  }else{
    document.getElementById("g3").enabled="true"

  }
}
//---GoodSprings Start-------------
let gs1=function(){
document.getElementById("words").innerHTML="You walk towards the town into a nearby bar. You are met with a woman named Sunny. She tells you that you look like you could use some shooting training. "
document.getElementById("choices").innerHTML="<br><input type='radio' onclick= 'gs2()'> I know how to shoot though i could use a weapon [Charisma 7 or Higher ]<br><input type='radio' onclick='shooting()'>\"Yeah I need training\"<br> <input type='radio' onclick='back1()'> Leave GoodSprings"
}
let shooting=function(){
  document.getElementById("words").innerHTML="She shows you how to shoot the rifle and tells you your not that bad of a shot. She Gives you the file and says she has another at home<br><br><b> Rifle Added To Inventory</b>"
  inv+="rifle";
  document.getElementById("choices").innerHTML="<br><input type='radio' onclick='back1()'> Leave GoodSprings"

}


let gs2=function(){
  if(c>=7){
    document.getElementById("words").innerHTML="[SUCCESS]She likes your aditude and gives you the rifle<br><br><b>Rifle Added To Inventory</b> "
    document.getElementById("choices").innerHTML="<br><input type='radio' onclick='back1()'> Leave GoodSprings"

    inv+="rifle";
    
    

  }else{
    document.getElementById("words").innerHTML="She tells you no way and dosent like your additude "
    document.getElementById("choices").innerHTML="<br><input type='radio' onclick='back1()'>Walk out of the bar"
  }

//-------GoodSprings End----------

//--------New Vegas Start--------
}
let back1=function(){
  document.getElementById("words").innerHTML="With nothing left to do in GoodSprings You find yourself wondering what to do"
  document.getElementById("choices").innerHTML=" <br><input type='radio' onclick= 'nv1()'>Travel to New Vegas <br><input type='radio' onclick= 'mw2()'>Explore the Mojave Wasteland"
}
let nv1=function(){
  document.getElementById("words").innerHTML="You travel North East to the Brightly Lit Glow of New Vegas, a bustling city in the ceter of the Mojave Wasteland. On the way You encounter a RadScorpion"
  document.getElementById("choices").innerHTML="<br><input type='radio' onclick='radscorpp()'> Punch it [Strength 6 or Higher]<br> <input type='radio' onclick='radscorps()' id='g2'> Shoot it<br><input type='radio' onclick='radscorpd()'>Try To run"
  if(inv.includes("rifle")||inv.includes("AR")){
    document.getElementById("g2").enabled="true"

  }else{
    document.getElementById("g2").disabled="true"
  }
}
let nv2=function(){
  document.getElementById("words").innerHTML="You made it to New Vegas, but as you enter you are told this place is called FreeSide , a sub section where the people pinched with money. To get into New Vegas you'll need 1000 Caps. There is a store that you can sell some items near you "
  document.getElementById("choices").innerHTML="<br> <input type='radio' onclick='gunrunners()'> Go to GunRuners Store<br><input type='radio' onclick='fs()'>Explore Freeside<br><input type='radio'onclick='mw2()'>Explore the Mojave Wasteland"
}
let gunrunners=function(){
  document.getElementById("words").innerHTML="You are greeted by a robot behind a glass window. It says \"Welcome Sir or Madam, do you wish to purchase something?\""
  document.getElementById("choices").innerHTML="<br><input type='radio' onclick='store1()'> Barter<br><input type='radio' onclick='nv2()'>Leave GunRunners"
}


//---------Freeside Start--------
let fs=function(){
  document.getElementById("words").innerHTML="You find the gate to New Vegas. It is protected by Protectron guards. One of them walks up to you"
  document.getElementById("choices").innerHTML="<br> <input type='radio' onclick='fsd1()'>1C 3C R34 M [Inteligence 8 or Higher]<br><input type='radio' onclick='pay1()'>Pay [1000 Caps]<br><input type='radio' onclick='fsd2()'>Run for the Gate<br><input type='radio' onclick='nv2()'>Leave the Gate"
}

let fsd1=function(){
  if(i>=8){

  
  document.getElementById("words").innerHTML="Thank You sir or Madam you may proceed"
  document.getElementById("choices").innerHTML="<br><input type='radio' onclick='end()'>"
}else{
  document.getElementById("words").innerHTML="The Protectron yells Intruder alert and you are shot to death.<b>You Died</b>"
  document.getElementById("choices").innerHTML=""
}
}
let pay1=function(){
if(caps>=1000){
  caps-=1000
  caps=caps;
  document.getElementById("words").innerHTML="You pay the protectron 1000 caps and proceed to new vegas "
  document.getElementById("choices").innerHTML="<br><input type='radio' onclick='end()'>Go To New Vegas"
}else{
  document.getElementById("words").innerHTML="You dont have enough caps for this"
  document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2'>Go Back"
}
}
let fsd2=function(){
 document.getElementById("words").innerHTML="You make a run for it and make it too the door, but its locked. You are Shot to death<b>You died</b> "
  document.getElementById("choices").innerHTML=""


}

let end=function(){
document.getElementById("words").innerHTML="You made it to new vegas"
document.getElementById("choices").innerHTML=""
}

let prim1=function(){
  document.getElementById("words").innerHTML="As you are wlaking up to the town you step on a landmine <b>You Died</b>"
  document.getElementById("choices").innerHTML=""
}

//----------Encounters--------
let radscorps=function(){
  document.getElementById("words").innerHTML="You were succesfully able to kill the RadScorpion. You notice a town to the west."
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='prim1()'>Go toards the town<br><input type='radio' onclick='nv2()'>Continue to New Vegas"
}

let radscorpp=function(){
    if (s>=6){
      let punchC=s*10
      let randmax=100
      let randmin=1
      let randrange=randmax-randmin
      let punch = Math.floor(Math.random() * (randrange + 1)) + randmin;
      if(punch<=punchC){
        document.getElementById("words").innerHTML="[SUCESS]You were succesfully able to kill the RadScorpion. You notice a town to the west."
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='prim1'>Go toards the town<br><input type='radio' onclick='nv2()'>Continue to New Vegas"
      }else{
      document.getElementById("words").innerHTML="Without a proper weapon or being strong enough you could not kill the RadScorpion. <b>You died</b>"
      document.getElementById("choices").innerHTML=""
      }
      }else{
      document.getElementById("words").innerHTML="Without a proper weapon or being strong enough you could not kill the RadScorpion. <b>You died</b>"
      document.getElementById("choices").innerHTML=""
    }
  
  
  }
  let radscorpd=function(){
    document.getElementById("words").innerHTML="You tried to run but the RadScorpion hit you with its stinger. Though you managed to get away the poison slowly went through your body. <b>You died</b>"
      document.getElementById("choices").innerHTML=""
  }
  


  let mw1=function(){
    let randmax=10
    let randmin=1
    let randrange=randmax-randmin;
    let mwchance= Math.floor(Math.random() * (randrange + 1)) + randmin;
    if(mwchance==1){
      document.getElementById("words").innerHTML="You stubled across a gas station and explroed inside. You fond 500 caps"
      document.getElementById("choices").innerHTML="<br><input type='radio'onclick=startStuff()>Go Back<br><input type='radio'onclick='startStuff()'>Keep Exploring"
      caps+=500;
    

    }else if(mwchance==2){
      document.getElementById("words").innerHTML="You wonder in the Mojave for a while until a group of raiders find you. <div id='words2'>word</div>"
    if(caps>=1){
        caps=0;
        document.getElementById("choices").innerHTML="<br><input type='radio'onclick='startStuff()'>Go Back<br><input type='radio'onclick='mw1()'>Keep Exploring"
        document.getElementById("words2").innerHTML="<br><b>All caps gone</b>"
     } else{
        document.getElementById("words2").innerHTML="<br>They realized you dont have any caps and killed you<b> You Died</b>"
        document.getElementById("choices").innerHTML=""
     }
        
      

      
      
    }else if(mwchance==3){
      document.getElementById("words").innerHTML="You get lost in the Mojave <b>You Died</b>"
      document.getElementById("choices").innerHTML=""
    
    }else if(mwchance==4){
      document.getElementById("words").innerHTML="You run into a caravan trader,she seem's to be struggling.<div id='words2'></div>"
      if(p>=7||c>=9){
        document.getElementById("words2").innerHTML="<br>You tell her you can take some items off her hand for free so she's not struggling. She says she will but only one item <br><br><b>Assault Carabine Added to Inventory</b>"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
        inv+="AR";
      }else{
        document.getElementById("words").innerHTML="You offer to help but she ignores you."
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
      }
      
    }else if(mwchance==5){
      if(l>=8){
        document.getElementById("words").innerHTML="You took three steps and you find 2000 caps.<b></b>"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
        caps+=2000
      }else{
      document.getElementById("words").innerHTML="You took three steps and you find 1000 caps.<b></b>"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
      caps+=1000
      }
      
    }else if(mwchance==6){
      document.getElementById("words").innerHTML="You are exploring when you come across a deathclaw <div id='words2'</div>"
      if(a>=8){
        document.getElementById("words2").innerHTML="<br> You run away unscathed"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
      }else{
        let randmin=1
        let randmax=100
        let randrange=randmax-randmin
        let dcchance=Math.floor(Math.random() * (randrange + 1)) + randmin;
        if(dcchance<=50){
          document.getElementById("words2").innerHTML="You run away unscathed"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
        }else{
          document.getElementById("words2").innerHTML="The deathclaw see's you and rips you to pieces<b>You Died</b>"
          document.getElementById("choices").innerHTML=""
        }
      }
      
    }else if(mwchance==7){
      document.getElementById("words").innerHTML="You walked around for a while but coudlnt find anything"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"

    }else if(mwchance==8){
      document.getElementById("words").innerHTML="You walked around for a while but coudlnt find anything"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
    }else if(mwchance==9){
      document.getElementById("words").innerHTML="You found yourself in a area where heavy radiation is present<div id='words2'>"
      if(e>=7){
        document.getElementById("words2").innerHTML="<br>You endured the radiation and survive"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='startStuff()'>Go Back<br><input type='radio' onclick='mw1()'>Keep Exploring"
      }else{
        document.getElementById("words2").innerHTML="<br>You could not endure the radiation and <b> You Died</b>"
      document.getElementById("choices").innerHTML=""
      }
      
    }else if(mwchance==10){
      document.getElementById("words").innerHTML="You just die, like no reason <b>You died</b>"
      document.getElementById("choices").innerHTML=""
    }
    
  }

  let mw2=function(){
    let randmax=10
    let randmin=1
    let randrange=randmax-randmin;
    let mwchance= Math.floor(Math.random() * (randrange + 1)) + randmin;
    if(mwchance==1){
      document.getElementById("words").innerHTML="You stubled across a gas station and explroed inside. You fond 500 caps"
      document.getElementById("choices").innerHTML="<br><input type='radio'onclick=nv2()>Go Back<br><input type='radio'onclick='mw2()'>Keep Exploring"
      caps+=500;
    

    }else if(mwchance==2){
      document.getElementById("words").innerHTML="You wonder in the Mojave for a while until a group of raiders find you. <div id='words2'>word</div>"
    if(caps>=1){
        caps=0;
        document.getElementById("choices").innerHTML="<br><input type='radio'onclick='nv2()'>Go Back<br><input type='radio'onclick='mw1()'>Keep Exploring"
        document.getElementById("words2").innerHTML="<br><b>All caps gone</b>"
     } else{
        document.getElementById("words2").innerHTML="<br>They realized you dont have any caps and killed you<b> You Died</b>"
        document.getElementById("choices").innerHTML=""
     }
        
      

      
      
    }else if(mwchance==3){
      document.getElementById("words").innerHTML="You get lost in the Mojave <b>You Died</b>"
      document.getElementById("choices").innerHTML=""
    
    }else if(mwchance==4){
      document.getElementById("words").innerHTML="You run into a caravan trader,she seem's to be struggling.<div id='words2'></div>"
      if(p>=7||c>=9){
        document.getElementById("words2").innerHTML="<br>You tell her you can take some items off her hand for free so she's not struggling. She says she will but only one item <br><br><b>Assault Carabine Added to Inventory</b>"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
        inv+="AR";
      }else{
        document.getElementById("words").innerHTML="You offer to help but she ignores you."
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
      }
      
    }else if(mwchance==5){
      if(l>=8){
        document.getElementById("words").innerHTML="You took three steps and you find 2000 caps.<b></b>"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
        caps+=2000
      }else{
      document.getElementById("words").innerHTML="You took three steps and you find 1000 caps.<b></b>"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
      caps+=1000
      }
      
    }else if(mwchance==6){
      document.getElementById("words").innerHTML="You are exploring when you come across a deathclaw <div id='words2'</div>"
      if(a>=8){
        document.getElementById("words2").innerHTML="<br> You run away unscathed"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
      }else{
        let randmin=1
        let randmax=100
        let randrange=randmax-randmin
        let dcchance=Math.floor(Math.random() * (randrange + 1)) + randmin;
        if(dcchance<=50){
          document.getElementById("words2").innerHTML="You run away unscathed"
        document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
        }else{
          document.getElementById("words2").innerHTML="The deathclaw see's you and rips you to pieces<b>You Died</b>"
          document.getElementById("choices").innerHTML=""
        }
      }
      
    }else if(mwchance==7){
      document.getElementById("words").innerHTML="You walked around for a while but coudlnt find anything"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"

    }else if(mwchance==8){
      document.getElementById("words").innerHTML="You walked around for a while but coudlnt find anything"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
    }else if(mwchance==9){
      document.getElementById("words").innerHTML="You found yourself in a area where heavy radiation is present<div id='words2'>"
      if(e>=7){
        document.getElementById("words2").innerHTML="<br>You endured the radiation and survive"
      document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Go Back<br><input type='radio' onclick='mw2()'>Keep Exploring"
      }else{
        document.getElementById("words2").innerHTML="<br>You could not endure the radiation and <b> You Died</b>"
      document.getElementById("choices").innerHTML=""
      }
      
    }else if(mwchance==10){
      document.getElementById("words").innerHTML="You just die, like no reason <b>You died</b>"
      document.getElementById("choices").innerHTML=""
    }
    
  }
  

  

  //--------Misc-------

  let store1=function(){
    document.getElementById("words").innerHTML="Here you can buy and sell items<br><br><br><br> Caps:"+caps
    if(inv.includes("rifle")){
      document.getElementById("choices").innerHTML="<br><input type='checkbox' id='rifle' onclick='capdate(500,rifle)'>Rifle<br><br><input type='radio' onclick='submit()'>Submit <br><input type='radio' onclick='nv2()'>Leave GunRunners"
      
    }else if(inv.includes("AR")){
      document.getElementById("choices").innerHTML="<br><input type='checkbox' id='ar' onclick='capdate(1000,ar)'>Asault Carabine <br><br><input type='radio' onclick='submit()'>Submit <br><input type='radio' onclick='nv2()'>Leave GunRunners"
      
  }else{
    document.getElementById("words").innerHTML="You have nothing to sell"
    document.getElementById("choices").innerHTML="<br><input type='radio' onclick='nv2()'>Leave GunRunners"
  }
  }
  
let capdate=function(capa,checks){
  
  if(checks.checked){
caps+=capa
document.getElementById("words").innerHTML="Here you can buy and sell items<br><br><br><br> Caps:"+caps
}else{
  caps-=capa
document.getElementById("words").innerHTML="Here you can buy and sell items<br><br><br><br> Caps:"+caps
}
}


let submit=function(){
  if(rifle.checked){
    inv=inv.replace("rifle","")

  }else if(ar.checked){
    inv=inv.replace("AR","")
  }
caps=caps
nv2();

}

