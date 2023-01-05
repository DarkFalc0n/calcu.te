const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfdf578bd0msh91dc38cddc7e62dp1f2febjsn586e1722a677',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

const curr1=document.getElementById('currency1');
const curr2=document.getElementById('currency2');
const in1=document.getElementById('inputCurr1');
const in2=document.getElementById('inputCurr2');
console.log(curr1,curr2)
var val1='SGD',val2='SGD';

const list=[];

window.addEventListener('DOMContentLoaded',()=>{
fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
	.then(response => response.json()
       )
	.then(response =>  {
        console.log(response)
        insertion(response)})
	.catch(err => console.error(err));


})

function insertion(res){
    res.forEach(e => {
list.push(`<option value=${e}>${e}</option>`)
        
    });

    list.join(',')
    curr1.innerHTML=list
    curr2.innerHTML=list
}

curr1.addEventListener("change",(e)=>{console.log(e.target.value)
val1=e.target.value
exchange(val1,val2,in1.value)
})
curr2.addEventListener("change",(e)=>{console.log(e.target.value)
    val2=e.target.value
	exchange(val1,val2,in1.value)
})

in1.addEventListener('input',(e)=>{
exchange(val1,val2,e.target.value)
    
})
function exchange(val1,val2,value){
	if(val1===val2)in2.value=in1.value
	else{
	fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${val1}&to=${val2}&q=${value}`, options)
	.then(response => response.json())
	.then(response => {console.log(value*response)
		in2.value=value*response})
	.catch(err => console.error(err));
	}
	
}