window.addEventListener("load", addListeners)

var images = new Array("twoKmain.jpg", "twoK.jpg", "twoKone.jpg", "twoKtwo.jpg", "twoKthree.jpg", 
"twoKfour.jpg", "twoKfive.jpg", "twoKsix.jpg", "twoKseven.jpg", "twoKeight.jpg",
"twoKnine.jpg", "twoKten.jpg", "twoKeleven.jpg", "twoKtwelve.jpg", 
"twoKthirteen.jpg", "twoKfourteen.jpg", "twoKfifteen.jpg", "twoKsixteen.jpg",
"twoKseventeen.jpg", "twoKeighteen.jpg", "twoKnineteen.jpg");

var captions = new Array("ALL 2K GAMES", "NBA 2K - Allen Iverson", "NBA 2K1 - Allen Iverson", "NBA 2K2 - Allen Iverson", "NBA 2K3 - Allen Iverson", "NBA 2K4 - Allen Iverson", "NBA 2K5 - Ben Wallace", "NBA 2K6 - Shaquille O'Neal", "NBA 2K7 - Shaquille Oneal", "NBA 2K8 - Chris Paul", "NBA 2K9 - Kevin Garnett", 
"NBA 2K10 - Kobe Bryant", "NBA 2K11 - Michael Jordan", "NBA 2K12 - Larry Bird, Magic Johnson, Michael Jordan", "NBA 2K13 - Blake Griffin, Kevin Durant, Derrick Rose", "NBA 2K14 - LeBron James", "NBA 2K15 - Kevin Durant",
"NBA 2K16- James Harden, Stephen Curry, Anthony Davis", "NBA 2K17 - Paul George", "NBA 2K18 - Kyrie Irving", "NBA 2K19 - LeBron James");

var index = 0
var timer 

function addListeners(){
    document.getElementById("next").addEventListener("click", changeImage)
    
    document.getElementById("play").addEventListener("click", function(){
        clearInterval(timer)
        timer = setInterval(changeImage, 2000);
    });
    
    document.getElementById("pause").addEventListener("click", function() {
        clearInterval(timer)
    });
    
    document.getElementById("previous").addEventListener("click", previousImage);
}

function changeImage(){
    index++;
    if (index >= images.length){
        index = 0;
    }
    document.getElementById("picture").src = "resources/" + images[index];
    
    document.getElementById("caption").innerHTML = captions[index];
}

function previousImage(){
    if (index == 0) {
        index = images.length - 1
    }
    
    else {
        index--;
    }
    document.getElementById("picture").src = "resources/" + images[index];
    
    document.getElementById("caption").innerHTML = captions[index];
    
}