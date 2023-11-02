const zero=document.getElementById('zero');
const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eight=document.getElementById('eight');
const nine=document.getElementById('nine');

const point=document.getElementById('point');
const equal=document.getElementById('equal');
const clear=document.getElementById('clear');
const back=document.getElementById('back');

const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const divide=document.getElementById('divide');
const multiply=document.getElementById('multiply');

const display=document.querySelector('.display');

const buttons=document.querySelectorAll('.btn');
const op=document.querySelectorAll('.op');
buttons.forEach((e)=>{
    e.addEventListener('click',()=>{
        display.textContent += e.textContent;
        if(oper !== undefined)
        {
            last=display.textContent.slice(first.length+1,display.textContent.length);
        }
    });
});
back.addEventListener('click',()=>{
    display.textContent=display.textContent.slice(0,-1);
});

clear.addEventListener('click',()=>{
    display.textContent="";
    isClicked= true;
    first=undefined;
    last=undefined;
    oper=undefined;
});

var first;
var last;
var oper;
var isClicked= true;

function operate(a,b,operator)

{
    a=Number(a);
    b=Number(b);
    switch(operator)
    {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
    }
}
op.forEach((e)=>{
    
        e.addEventListener('click',()=>{
            if(isClicked)
            {
            display.textContent += e.textContent;
            first=display.textContent.slice(0,-1);
            isClicked=!isClicked;
            oper=display.textContent.slice(first.length,first.length+1);
            }
            if(last !== undefined)
            {
                display.textContent=operate(first,last,oper);
                first=display.textContent;
                display.textContent += e.textContent;
                oper=display.textContent.slice(first.length,first.length+1);
                last=undefined;
            }
        });
});
equal.addEventListener('click',()=>{
    display.textContent=operate(first,last,oper);
    isClicked=!isClicked;
});