$(document).ready(function(){
  var array=[];
  var rand;
  var min=0;
  var inc=0;
  var idcount=0;   
  var cc=true;
  var jj=0;
  var bb=true;
  var level=0; 
  var state=false;
  var strict=true;
  var sound;
  var count;
  var start=false;      
 const redSound = new   Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  const greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  const blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  const yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

  //a function to create random number
  function random(){
    rand=(Math.random()*3).toFixed();
    return rand;
  }   
  
  function reset(){
    array=[];
    min=0;
   inc=0;
   idcount=0;
   cc=true;
   jj=0;
   bb=true;
   level=0; 
    $(".step").html("---");
     
  }  
  
  
  function show(arr,a,k){
    var pushed=random();
    if(cc==true&&k===true){
    arr.push(pushed);
    }
    
    cc=false;
      
   var app=$("#b"+arr[a]).css("background-color");
    if(arr[a]==="0"){
     var color="#32CD32"
     sound=greenSound;
     
    }
     if(arr[a]==="1"){
       sound=redSound;
       color="red";
    }
      if(arr[a]==="2"){
        sound=yellowSound;
        color="yellow" 
    }
      if(arr[a]==="3"){
        sound=blueSound;
      color="blue";
    }
   sound.play();
   $("#b"+arr[a]).css("background-color",color); 
    
    setTimeout(function(){
      $("#b"+arr[a]).css("background-color",app);
      
    },500); 
    
  }
  
     
  function rep(re){
      
    cc=true;
      count=0;
    
    if(re===true){
      
     level++;
    setTimeout(function(){
      $(".step").html(level);
      
    },1100);
    } 
    if(level===21){
      setTimeout(function(){
        alert("Congrats!! You Won");
        reset();
        min=1;
        //rep(bb);
      },300);
      setTimeout(function(){
        rep(bb);
      },500);
     
    }
     var gen= setInterval(function(){ 
        if(count===inc){
         clearInterval(gen);
       }
       else{ 
         
      show(array,count,re);
      count++;
       
     }
       
      },1600); 
       inc++; 
    }
  
  
  function listen(para){
   
      if(para[1]===array[jj]){
        idcount++;
        jj++;
      }  
      else{
        if(strict===true){
          
        idcount=0;
         inc=inc-1;
        jj=0;
        alert("Wrong!! Try Again");
        bb=false;
          setTimeout(function(){
            rep(bb);
          },400);
        
        }
        else if(strict===false){
          alert("Wrong!! Game Restarts");
          reset();
          min=1;
        }
      }
        
      if(idcount===array.length){
        bb=true;
        //c++;
        setTimeout(function(){
         rep(bb); 
        },700);
       
        jj=0;
        idcount=0;
        
      }  
  }
  
  
   $("#b0").click(function(){
     if(state===true){
       
     
     greenSound.play();
    $("#b0").css("background-color","#32CD32");
     setTimeout(function(){
      $("#b0").css("background-color"," #008000");
      
    },350);
     } 
  });
  $("#b1").click(function(){
    if(state===true){
      
    
    redSound.play();
    $("#b1").css("background-color","red");
     setTimeout(function(){
      $("#b1").css("background-color","#9f0f17");
      
    },350);
    }
    
  });
  $("#b2").click(function(){
    if(state===true){
      
    
    yellowSound.play();
    $("#b2").css("background-color","yellow");
     setTimeout(function(){
      $("#b2").css("background-color","#cca707 ");
      
    },350);
    }
  });
  $("#b3").click(function(){
    if(state===true){
      
    
    blueSound.play();
    $("#b3").css("background-color","blue");
     setTimeout(function(){
      $("#b3").css("background-color","#1933B2");
      
    },350);
    }
  });
  
    
  $(".start").on("click",function(){
    if(state===true&&min<1){
    rep(bb);
    min++;
    start=true;
    }
    else if(state===true&&min>=1){
      alert("restarting");
      reset();
      min=1;
      setTimeout(function(){
        rep(bb);
      },500)
                 
                 
    }
    
  });
  $(".one").click(function(){
    if(state===true&&start===true){
      
    
    var gett=$(this).attr("id");
    listen(gett);
    }   
  }); 
  $(".stateoff").click(function(){
   state=false;
   start=false;
   strict=true;
   $(".stateoff").addClass("btn-primary");
   $(".stateon").removeClass("btn-primary");
     $(".start").addClass("btn-primary");
     $(".start").removeClass("starton");
    $(".str").css("background-color","#FF6347");
   reset();
});    
   $(".stateon").click(function(){
   state=true;
     $(".stateon").addClass("btn-primary");
   $(".stateoff").removeClass("btn-primary");
    $(".start").removeClass("btn-primary");
     $(".start").addClass("starton");
   
});
  
    $(".str").click(function(){
    
    if(state===true){ 
   strict=!strict;
     
      if(strict===false)
      $(".str").css("background-color","#ff1919");
      if(strict===true)
        $(".str").css("background-color","#FF6347");
    }            
      
});   
  
});