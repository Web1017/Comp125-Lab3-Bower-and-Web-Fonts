/**
 * FileName: app.js
 * @Author Javid Niftaliyev
 * Student ID: 300742916
 * @description: This is the main javascript file for the current web site.
 * Website(Azure): http://comp125-lab3-bower.azurewebsites.net/index.html
 * Website(Github): https://github.com/Web1017/Comp125-Lab3-Bower-and-Web-Fonts
 * 
 */
//IIFE - Immediately invoked Expression 

(function () {
    "use strict";  //doesnt allow variables to be redeclared
    // Define Array of HTML elements
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("ParagraphOne");
    paragraphElements[1] = document.getElementById("ParagraphTwo");
    paragraphElements[2] = document.getElementById("ParagraphThree");
    paragraphElements[3] = document.getElementById("ParagraphFour");
    paragraphElements[4] = document.getElementById("ParagraphFive");

    var paragraphs = [];

    //Page Data
    paragraphs[0] = "Life is a series of experiences, each one of which makes us bigger, even though sometimes it is hard to realize this. For the world was built to develop character, and we must learn that the setbacks and grieves which we endure help us in our marching onward. - Henry Ford";

   
    paragraphs[1] = "<span class = 'firstSentence' >Study of history has always been a passion of mine. Studies from Ancient Egypt to Political systems, has always brought me interest. One of my recent project that I have worked on is the study of Latin and how it had dominated the European language for centuries.</span>";
    
    paragraphs[2] = "My personal goal is to gain more knowledge and experience in life in order to succeed. With more interest and practise, I hope to gain more than before. My personal ambition has shown me that I am capable of doing more with my life and being able to expand my horizon in terms of knowledge and skills, which will guide me toward my future ";
    
    paragraphs[3] = "<span class = 'firstSentence' >Study of the economy and market which dominate this world has been one of my personal interests. Commodity which sets the structure of how modern economy function, has been one of my personal interest which I persue to gain and understand.</span>";
    
    paragraphs[4] = "<span class = 'firstSentence' >One of My favorite projects was programming and creating websites. Creating a website as well as creating applications using C# has been a memorable time. Using programming tools to create my ideas and share it with others.</span> "
    

    //check if paragraph exists   

    var paragraphElementsLength = paragraphElements.length - 1; // counting from 3 to 1, descending order
    
// If paragraph one currently exists then fill each paragraph inside the page.   
    for (var index = paragraphElementsLength; index >= 0; index--) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }



})();