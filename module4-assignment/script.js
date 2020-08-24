/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye Jain
Good Bye Jerry
Good Bye Jimmy
Hello Pooja
Hello Franky
Hello Larry
Hello Pinky
Hello Lorry
Good Bye Jim
*/

(function() {
    var names = ["Yaakov", "Jain", "Jerry", "Jimmy", "Pooja", "Franky", "Larry", "Pinky", "LOrry", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
