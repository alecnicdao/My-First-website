//intro to jQuery

$(document).ready(function(){
    $('.sway').slideUp()
    $('.sway').slideDown()
    $('nba').fadeOut(9000)
    $('nba').fadeIn(9000)
    
    $('#click').click(function(){
        //reset pics for future clicks
        //then show them
        $('.gary').animate({
            height: '0px',
            width: '0px',
            top: '340px',
            left: '340px'
        }, function(){
            $(this).show()
        })
        
        $('.jordan').animate({
            height: '0px',
            width: '0px',
            top: '340px',
            left: '340px'
        }, function(){
            $(this).show()
        })
        
        $('.lebron').animate({
            height: '0px',
            width: '0px',
            top: '340px',
            left: '340px'
        }, function(){
            $(this).show()
        })
        
        $('.malone').animate({
            height: '0px',
            width: '0px',
            top: '340px',
            left: '340px'
        }, function(){
            $(this).show()
        })
        
        $('.shaq').animate({
            height: '0px',
            width: '0px',
            top: '340px',
            left: '340px'
        }, function(){
            $(this).show()
        })
        
        
        $('h2').fadeOut()
        
        //grow and move the "gary payton"
        //use the linear easing
        //then I want to hide it
        
        $('.gary').animate({
            height: '340px',
            width: '340px',
            top: '430px',
            left: '300px'
        }, 2000, "swing", function(){
            $(this).hide()
        })
        
        //delay 
        //grow and move the "jordan"
        //use the linear easing
        //then I want to hide it
        
        $('.jordan').delay(2000).animate({
            height: '340px',
            width: '340px',
            top: '430px',
            left: '500px'
        }, 2000, "linear", function(){
            $(this).hide()
        })
        
        //delay 
        //grow and move the "lebron"
        //use the linear easing
        //then I want to hide it
        
        $('.lebron').delay(4000).animate({
            height: '340px',
            width: '340px',
            top: '430px',
            left: '900px'
        }, 2000, "linear", function(){
            $(this).fadeOut(2000)
        })
        
        //delay
        //grown and move "malone"
        //use linear
        //then hide
        $('.malone').delay(6000).animate({
            height: '340px',
            width: '340px',
            top: '15px',
            left: '155px'
        }, 2000, "linear", function(){
            $(this).fadeOut(2000)
        })
        
        //delay
        //grow and move shaq
        //use linear
        //then hide
        $('.shaq').delay(8000).animate({
            height: '340px',
            width: '340px',
            top: '15px',
            left: '900px'
        }, 2000, "linear", function(){
            $(this).fadeOut(2000)
        })
        
        $('h2').delay(1700).fadeIn(1800)
    })
})