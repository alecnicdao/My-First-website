function myMessage() {
    //spring
    var season = document.getElementById("seasonInput").value; 
    //2019
    var year = document.getElementById("yearInput").value; 
    //Josh
    var nameOne = document.getElementById("nameOneInput").value; 
    // Brad
    var nameTwo = document.getElementById("nameTwoInput").value; 
    // Brad
    var nameThree = document.getElementById("nameThreeInput").value;
    // Russia
    var country = document.getElementById("countryInput").value; 
    // 2 weeks
    var timePeriod = document.getElementById("timePeriodInput").value; 
    // Europe
    var countryTwo = document.getElementById("countryTwoInput").value; 
    // Moscow
    var placeCountry = document.getElementById("placeCountryInput").value; 
    // Females
    var favGender = document.getElementById("favGenderInput").value;
    // Nicoli
    var nameFour = document.getElementById("nameFourInput").value; 

    var displayMessage = "<p> It was the <span>" + season + "</span> of <span>" + year + "</span>, <span> " + nameOne + "</span> and his two friends <span>" + nameTwo + "</span> and <span>" + nameThree + "</span> went on a trip to <span> " + country + "</span> for <span> " + timePeriod + "</span> . The reason why they were going was, because it was <span> " + nameOne + "</span> is time to pick a country to travel to. PS, every year the three gentlemen go on a trip and it's either in the states or in another country. In addition to, every year they take turns on which places they want to go to. This time it was <span> " + nameOne + "</span> is time to pick for the three of them. As <span>" + nameOne + " </span> was deciding between <span>" + countryTwo + "</span> and <span>" + country + "</span> he then decides to pick <span>" + country + "</span>. <span>" + country + "</span>, because he is interested in their culture and how they are different compared to where they are from. So, after one person decides which state or country they are going to, the place is then randomized. So, after one person decides which state or country to go to, the city in that place is randomized. For example, if <span>" + nameOne + "</span> were to choose the United States, that state will then be randomized with all 50 states. So, the place that they were to visit was <span>" + placeCountry + "</span>. As the three of them traveled and got to <span>" + placeCountry + "</span>. Everything looked amazing. The beaches, people, hotels and especially the <span>" + favGender + "</span>.</p>";

    displayMessage += "<p>As they were enjoying their week there everything was going pretty smooth. The food was amazing, the people they met there were very welcoming and lastly all the <span>" + favGender + "</span> they met were very beautiful, but as the three of them approach their last night there. They get invited from one of their friends they met in <span>" + placeCountry + "</span> to go to a go away party for them. As <span> " + nameOne + "</span> said yes to the invite <span> " + nameTwo + " </span> and <span> " + nameThree + "</span> investigate many different rumors about the city, in which they found themselves in a deadly game..... This isn't no deadly game where someone just takes them and tortures them then eventually kills them, but something VERY different to the point where you wouldn't even expect it coming. <span>" + nameFour + "</span>, which is the friend that invited all of them to the go away party has had his eye on the three since they go to the country. So, <span>" + nameFour + "</span> is one or maybe the worlds top programmers in the world and the best in the country. He is co-founder of many popular massive multiplayer online games. For example, World of Warcraft, Star Wars, Rift, WildStar and more. Basically, what he does is whoever visits his country he takes them for ransom and takes their DNA to create sentient digital clones of them and puts them into his horror, action, or puzzle games. </p>"; 


    document.getElementById("myMessage").innerHTML = displayMessage;

}