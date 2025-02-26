$(function(){
    $("#close").click(function(){
        $(".box").hide(1000)
    })
    $("#open").click(function(){
        $(".box").show(1000)
    })
    $("#openAndClose").click(function(){
        $(".box").toggle(1000)
    })
    $("#fadeOut").click(function(){
        $(".box").fadeOut(1000)
    })
    $("#fadeIn").click(function(){
        $(".box").fadeIn(1000)
    })
    $("#fadeInOut").click(function(){
        $(".box").fadeToggle(1000)
    })
    $("#japan").click(function(){
        $(".green").addClass("white")
    })
    $("#japanOut").click(function(){
        $(".green").removeClass("white")
    })
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/28/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());