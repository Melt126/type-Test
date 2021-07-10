function start(){
    const AOT={
        text: ['Nothing ', 'changed! ', 'You ', 'haven\'t ', 'changed ', 'one ', 'bit, '
        ,'dammit! ', 'You\'re ', 'still ', 'as ', 'useless ', 'as ', 'you ', 'were! ','Nothing '
        , 'changed!'],
        from:'Attack on Titan - Eren Yeager'
    }
    const type=document.getElementById('type');
    for(let i=0;i<AOT.text.length; i++){
        for(let c=0; c<AOT.text[i].length;c++){
            type.innerHTML=type.innerHTML+ '<span id='+i.toString()+c.toString()+'>'+AOT.text[i][c]+'</span>'; //id=[word][character]
        }
       // type.textContent=type.textContent + AOT.text[i]+ ' ';
      // type.innerHTML= type.innerHTML+'<span id='+i.toString()+'>'+AOT.text[i]+'</span>';
    }

    var i=0;
    var green;
    var word=document.querySelector('input');
    word.addEventListener('input', function(key){
       // console.log(this.value);  //In the text box
        //console.log(key.data);    //Most recent input
        //Checking indivudual letters
        var right=1; // To make every character after a wrong one be wrong as well
        for(let char=0;char<this.value.length;char++){
           if(this.value[char]==AOT.text[i][char] && right==1){
            document.getElementById(i.toString()+char.toString()).style.color='green';  //green on char if right
           }
           else{
               document.getElementById(i.toString()+char.toString()).style.color='red'; //red on char if wrong
               right=0;
           }
        }

        //Need to make sure after backspaces to make text white again
        for(let x=this.value.length; x<AOT.text[i].length;x++){
            if(document.getElementById(i.toString()+x.toString()).style.color=='red'||document.getElementById(i.toString()+x.toString()).style.color=='green'){
                console.log('yes');
                document.getElementById(i.toString()+x.toString()).style.color='whitesmoke';
            }
        }
        //Checking if the words match
        if(this.value.toString()==AOT.text[i]){
            this.value='';
            i=i+1;
        }
    })
}
start();