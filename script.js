//I WROTE THIS CODE IN 2021, I'M SO SORRY IF YOU'RE GOING THROUGH IT. I DIDN'T KNOW WHAT I WAS DOING
//I have come a long way since then, I swear
function start(){
    function whole(){


    //getting random file
   const opt=['AOT.txt', 'ReZero.txt', 'DemonSlayer.txt', 'CodeGeass.txt', 'DeathNote.txt','DrStone.txt'];    // THE ONLY THING I NEED TO CHANGE IF ADDING MORE QUOTES IS OPT AND NUMBER NEXT TO RANDOM
    var chosenOne=opt[Math.floor(Math.random()*6)];
    //reading file
    fetch('quoteList/allQuotes.txt')
    .then(function(response){
        return (response.text());
    })
    .then(function(data){
        lines=data.split('\n'); //seperates completely different sources
        var randomNum=Math.floor(Math.random()*(lines.length-1)) //randon Number using file length
        tab=lines[randomNum].split('\t'); // seperates info ab sources
        console.log(lines[randomNum])
        console.log(tab);
        const og= document.getElementById('origin'); 
        pic=document.getElementById('picture')
        for(let i=0; i<tab.length-1;i++){ 
        }
        let sen=tab[0].split(' ');
        for(let c=0; c<sen.length-1;c++){
            sen[c]=sen[c]+' ';
        } 
        const type=document.getElementById('type');
        if(type.innerHTML==''){
            og.innerHTML=tab[2];
            pic.innerHTML=tab[1];

            for(let i=0;i<sen.length;i++){
                for(let c=0; c<sen[i].length;c++){
                    type.innerHTML=type.innerHTML+'<span id='+i.toString()+'-'+c.toString()+'>'+sen[i][c]+'</span>'; //id=[word][character]'
                }
            }
        }
        else{
            sen=type.textContent.split(' ');
            console.log(sen);
            let temporary=[];
            for(let c=0; c<sen.length;c++){
                if(sen[c]!=''){
                    if(c!=sen.length-1){
                        temporary.push(sen[c]+' ')} //adding space to end of each word except last
        
                    else{
                        temporary.push(sen[c])
                    }
                }
            }
            sen=temporary;
            /*
            for(let c=0; c<sen.length-1;c++){
                sen[c]=sen[c]+' ';
            }*/
        }
        console.log(sen);
        var i=0;
        //finding key strokes to calc WPM
        var keystrokes=0;
        for(let words=0;words<sen.length;words++){
            keystrokes=keystrokes+sen[words].length;
        }
        console.log(keystrokes);
        const result=document.getElementById('result');
    
        var green;
        var word=document.querySelector('input');
        var begin; //for timer




        word.addEventListener('input', press);
        function press(key){
            if(begin==undefined){ //When timer starts
                begin=Date.now();
                console.log(begin);
    
                
            }
           // console.log(this.value);  //In the text box
            //console.log(key.data);    //Most recent input
            var right=1; // To make every character after a wrong one be wrong as well
            //Checking indivudual letters
            for(let char=0;char<this.value.length;char++){
                if(this.value.length<=sen[i].length){
                    if(this.value[char]==sen[i][char][0] && right==1){
                        document.getElementById(i.toString()+'-'+char.toString()).style.color='green';  //green on char if right
                        document.getElementById(i.toString()+'-'+char.toString()).style.backgroundColor='#272944'; //new
                   }
                   else{
                       //Trying background
                    document.getElementById(i.toString()+'-'+char.toString()).style.backgroundColor='red'; //red on char if wrong
                    document.getElementById(i.toString()+'-'+char.toString()).style.color='whitesmoke';  //new
                    //Trying background
                    right=0;
                   }
                }
            }
            var extra=sen[i].length-1;
            var last= document.getElementById(i.toString()+'-'+extra.toString());
            if(this.value.length >= sen[i].length){
                if(sen[i].substring(sen[i].length-1)==' '){  //For every word except last
                    last.innerHTML=this.value.slice(extra)+sen[i].substring(sen[i].length-1);
                    last.backgroundColor='red';
                    last.style.color='whitesmoke';
                }
                else{ //For last word
                    last.textContent=sen[i].substring(sen[i].length-1)+this.value.slice(extra+1);
                }
            }
            else{
                    last.textContent=sen[i].substring(sen[i].length-1);
                }
            //Need to make sure after backspaces to make text white again
            for(let x=this.value.length; x<sen[i].length;x++){
                if(document.getElementById(i.toString()+'-'+x.toString()).style.backgroundColor=='red'||document.getElementById(i.toString()+'-'+x.toString()).style.color=='green'){
                    document.getElementById(i.toString()+'-'+x.toString()).style.backgroundColor='#272944';
                    document.getElementById(i.toString()+'-'+x.toString()).style.color='whitesmoke';
                }
            }
            //Checking if the words match
            if(this.value.toString()==sen[i]){
                this.value='';
                i=i+1;
            }
            //When quote is complete
            if(i==sen.length){
                var time=((Date.now()-begin)/1000);
                var WPMnum=(Math.round((keystrokes/5)/((Date.now()-begin)/1000/60)));
                const top=document.getElementById('top');
                
                const WPM= document.getElementById('WPM');
                const span=document.querySelectorAll('span');
                const timer=document.getElementById('timer');
                const quote=document.getElementById('quote');
                const retry=document.getElementById('retry');
                const newRace=document.getElementById('newRace');
                top.innerHTML='You just typed a quote from:';
                WPM.innerHTML= WPM.innerHTML+('WPM= '+WPMnum.toString());
                span.forEach(span =>{  //turning every span(text) white
                    span.style.color='whitesmoke';
                })
                
                timer.innerHTML=timer.innerHTML+((Date.now()-begin)/1000).toFixed(2)+'s';
                quote.innerHTML='\"'+ type.textContent+'\"';
                if(keystrokes<130){
                    quote.style.fontSize='26px';
                }//try to make quote bigger if possible
                else{
                    quote.style.fontSize='22px';
                }
                if (keystrokes>240){
                    quote.style.fontSize='20px';
                }

                result.classList.remove('out');
                retry.classList.remove('out');
                newRace.classList.remove('out');
                word.classList.add('out');
                type.classList.add('out') //for now
                word.removeEventListener('input', press);
                return; //back to button I think
            }
        }
        return randomNum;
    })
    
    }
        //call most of top function before btn is a thing
        var prevQuote;
        prevQuote = whole();
        console.log(prevQuote);
        btn.addEventListener('click', function(){
             //add documents that were lost in prev function
             const word=document.querySelector('input');
             result.classList.add('out');
             retry.classList.add('out');
             newRace.classList.add('out');
             word.classList.remove('out');
             type.classList.remove('out');
           //  type.innerHTML='';
             begin=undefined;
             WPM.innerHTML='<span id=\'icon\' class=\'material-icons\'>keyboard</span>';
             timer.innerHTML='<span id= \'icon\' class=\"material-icons\">timer</span>';
            // word.removeEventListener('click', press);
            //make new race randomly chosen
             // make most of the top a function, then call that function here
             whole();




            

        })

        //maybe don't remove event lister for word here, and put back type and remove result?
        // OR add the quote to type.innerHTML here, and check for type in whole function
        newRace.addEventListener('click', function(){
            //add documents that were lost in prev function
            const word=document.querySelector('input');
            result.classList.add('out');
            retry.classList.add('out');
            newRace.classList.add('out');
            word.classList.remove('out');
            type.classList.remove('out');
            type.innerHTML='';
            begin=undefined;
            WPM.innerHTML='<span id=\'icon\' class=\'material-icons\'>keyboard</span>';
            timer.innerHTML='<span id= \'icon\' class=\"material-icons\">timer</span>';
           // word.removeEventListener('click', press);
           //make new race randomly chosen
            // make most of the top a function, then call that function here
            whole();
        })
}
start();
