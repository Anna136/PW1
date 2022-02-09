let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
let c = Number(prompt("Введите третье число"));
let maximum;
let minimum;
if(a>b){
    maximum=a;
    minimum=b;
}else{maximum=b; minimum=a;} 
if(c>maximum){
    maximum=c;
} else if(c<minimum){minimum=c;}
alert("Max="+maximum+", min="+minimum);