$(document).ready(function() {
  var breakNum = parseInt($("#breakNum").html());
  var sessionNum = parseInt($("#sessionNum").html());
  var alarm = $("#timer")[0];
  $("#reset").hide();
  
                       
 //When "Session in Progress" is clicked, countdown begins                 
 $("#progress").click(function() {
    var counter = setInterval(timer, 1000);
    var count = parseInt($("#num").html());
    count *= 60;
    breakNum *= 60;
   
   $("#session, #break").hide();
   $(".instruct").hide();
   $("#progress").addClass("remove-click");
    
   //Timing work intervals
  function timer() {
    
    //Decrement time by 1 second until clock is at 0
    if (count > 0) {
      $("#num").html(count -= 1);
    }
    
    //Sound alarm and reset when clock is at 0
    if (count === 0) {
      alarm.play();
      clearInterval(counter);
      var beginBreak = setInterval(breakTime, 1000);
    }
      //Formatting minutes and seconds
      if (count % 60 >= 10) {
        $("#num").html(Math.floor(count/60) + ":" + count % 60);
      } else {
        $("#num").html(Math.floor(count/60) + ":" + "0"+ count % 60);
      }
    
    //Timing the Break Sessions
    function breakTime() {
      $("#seshBreak").html("Break in Progress");
      
      //Decrement time by 1 second until 0
      if (breakNum > 0) {
        $("#num").html(breakNum -= 1);
      }
      
      //Sound alarm and reset when clock is at 0
      if (breakNum === 0) {
        clearInterval(beginBreak);
        alarm.play();
        $("#reset").show();
      } 
        //Formatting minutes and seconds
        if (breakNum % 60 >= 10) {
          $("#num").html(Math.floor(breakNum/60) + ":" + breakNum % 60);
        } else {
          $("#num").html(Math.floor(breakNum/60) + ":" + "0"+ breakNum % 60);
        }
  }
       
   }

  });
  
    //When clicking minus sign of Break Length...
  $("#breakMinus").click(function() {
    if (breakNum > 1) {
      $("#breakNum").html(breakNum-=1);
    }
  });
  
  //When clicking plus sign of Break Length...
   $("#breakPlus").click(function() {
       $("#breakNum").html(breakNum += 1);
  });
  
  //When clicking minus sign of Session Length...
  $("#sessionMinus").click(function() {
    if (sessionNum > 1) {
      $("#sessionNum").html(sessionNum -= 1);
      $("#num").html(sessionNum);
    }
  });
  
  //When clicking plus sign of Session Length...
   $("#sessionPlus").click(function() {
       $("#sessionNum").html(sessionNum += 1);
        $("#num").html(sessionNum);
  });
  
  //When reset button is clicked...
  $("#reset").click(function() {
        $("#seshBreak").html("Session in Progress");
        sessionNum = 25;
        breakNum = 5;
        $("#sessionNum").html(sessionNum);
        $("#progress").removeClass("remove-click");
        $("#breakNum").html(breakNum);
        $("#num").html(sessionNum);
        $("#session, #break").show();
        $(".instruct").show();
        $("#reset").hide();
    });
  
  
});
