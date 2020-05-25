const text = document.querySelector(".wow");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0;i<splitText.length;i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fadee');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

// skill bar
$('.bar div').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
  });


function yeah(){
    var element = document.getElementById('yeah');
    if(element.style.display == 'block'){
        element.style.display = 'none';
    }
    else{
        element.style.display = 'block';
    }
}
    
