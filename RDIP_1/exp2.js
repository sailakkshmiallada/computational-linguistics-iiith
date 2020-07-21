var corpus = [
    'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.',
    'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
    'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'
    ];

var corpValue;

    function dispCorpus(value){

        document.getElementById("so1").innerHTML = "";
        document.getElementById("so2").innerHTML = "";
        document.form2.roots.value = "";
        document.form.tokens.value = "";
        document.form.types.value = "";
        document.getElementById("h1").style.backgroundColor = "white";
        document.getElementById("h2").style.backgroundColor = "white";
        document.getElementById("h3").style.backgroundColor = "white";
        document.getElementById("d1").classList.remove("hide");
        document.getElementById("root-input").classList.add("hide");
        document.getElementById("secondMsg").innerHTML = "";

        corpValue = value;

        if(value != "select"){
            document.getElementById("initialMsg").innerHTML = "Enter the correct number of tokens and types for the above corpus:";
            document.getElementById("corpus-display").innerHTML = corpus[value];
            document.getElementById("input-form").classList.remove("hide");
        }
        else {
            alert("Select a Corpus!");
        }
    };

    function checkAnswer(form){
            var tokens = document.getElementById("h1");
            var types = document.getElementById("h2");
            var s = document.getElementById("so1");

            var q = corpus[corpValue].toLowerCase();
            var q1 = q.replace(/[".?,]+/g , '');
            var q2 = q1.replace(/\s\s+/g, ' ');
            var words = q2.split(" ");
            var length = words.length;
            var unique = countUnique(words);

            if(document.form.tokens.value == length && document.form.types.value == unique){
                s.innerHTML = "RIGHT ANSWER!";
                s.style.color ="darkgreen";
                tokens.style.backgroundColor = "green";
                types.style.backgroundColor = "green";
                document.getElementById("c1").classList.remove("hide");
            }
            else if(document.form.tokens.value == length && document.form.types.value != unique){
                s.innerHTML = "WRONG ANSWER!";
                s.style.color ="red";
                tokens.style.backgroundColor = "green";
                types.style.backgroundColor = "red";
                document.getElementById("c1").classList.add("hide");

            }
            else if(document.form.tokens.value != length && document.form.types.value == unique){
                s.innerHTML = "WRONG ANSWER!";
                s.style.color ="red";
                tokens.style.backgroundColor = "red";
                types.style.backgroundColor = "green";
                document.getElementById("c1").classList.add("hide");
            }
            else {
                s.innerHTML = "WRONG ANSWER!";
                s.style.color ="red";
                tokens.style.backgroundColor = "red";
                types.style.backgroundColor = "red";
                document.getElementById("c1").classList.add("hide");
            }      
    }

    function countUnique(array) {
        uniqueWords = new Set(array).size;

        return uniqueWords;
    };

    function dispRoot(){
        document.getElementById("d1").classList.add("hide");
        document.getElementById("c1").classList.add("hide");
        document.getElementById("so1").innerHTML = "";
        document.getElementById("root-input").classList.remove("hide");
        document.getElementById("secondMsg").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types." + "<br><br>" + "#new types:";

    };

    require(['../Libraries/Snowball.min']);
   
    function findRoots() {

        var q = corpus[corpValue].toLowerCase();
        var q1 = q.replace(/[".?,]+/g , '');
        var q2 = q1.replace(/\s\s+/g, ' ');
        var words = q2.split(" ");
        var length = words.length;

        var roots = [];

        var stemmer = new Snowball('English');

        for(var i=0; i<length; i++){ //finding and storing all the roots words in roots array
            stemmer.setCurrent(words[i]);
            stemmer.stem();
            roots[i] = stemmer.getCurrent();
            }

        var types;
       
        if(corpValue == 0){
            types = countUnique(roots) - 5; //To account for under-stemming of (found(find),ate(eat),grown(grow),had(have),were(be))
        }
        else if(corpValue == 1){
            types = countUnique(roots) - 8; //To account for under-stemming if (him(he),himself(he),heard(hear),had(have),me(I),[was(be)-are(be)],his(he),done(do),a(the))
        }
        else if(corpValue == 2){
            types = countUnique(roots) - 7; //To account for under-stemming of (did(do),does(do),himself(he),men(man),ran(run),was(is),they(it))
        }

        checkAnswer2(types);

    };

    function checkAnswer2(roots){

        var answer = document.form2.roots.value;
        var s = document.getElementById("so2");

        if(answer == roots){
            s.innerHTML = "RIGHT ANSWER!";
            s.style.color ="darkgreen";
            document.getElementById("h3").style.backgroundColor = "green";
        }

        else{
            s.innerHTML = "WRONG ANSWER!";
            s.style.color ="red";
            document.getElementById("h3").style.backgroundColor = "red";
        }

    };