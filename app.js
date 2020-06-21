//chapter 1 
//task1

function task1(){
    var f_name=prompt("enter ur first name");
    var l_name=prompt("enter ur last name");
    var name=f_name.concat(" ",l_name);
    alert("welcome "+ name + " on our site");
}


//task2

function task2(){
    var f_name=prompt("enter ur faviourite mobile phone model");
    document.write(f_name);
    var name=f_name.length;
    document.write("<br> you text leghth is: "+name);
}

//task3
function task3(){
    var a="Pakistan";
    var b=a.indexOf("n", 1)
    document.write("sting: Pakistan <br> index of n is: "+b);
    

}
//task4
function task4(){
    var a="Hello World";
    var b=a.lastIndexOf("l", 15);
    document.write("sting: Hello World <br> last index of l is: "+b);
    

}

//task5
function task5(){
    var a="PAKISTANI";
    var b=a.charAt(3);
    document.write("sting at no 3 is: "+b);
    

}

//task6
function task6(){
    var f_name=prompt("enter ur first name");
    var l_name=prompt("enter ur last name");
    var name=f_name.concat(" ",l_name);
    alert("welcome "+ name + " on our site");
}

//task7
function task7(){
    var str="Hyderabad";
    var str1=str.replace("Hyder","Islam");
    document.write(str + "<br> after replacemnet: "+str1);
}
//task 8
function task8(){
    var message = "Ali and Sami are best friends. They play cricket and football together"; 
    var a=message.replace(/and/g,"&");
    document.write("befor: "+message+"<br> after: "+a);
}

//task 9
function task9(){
    var a="472";
    var b=parseInt(a);
    document.write(typeof a +"<br> after conversion "+ typeof b);
}

//task 10
function task10(){
    var a="peanut";
    var b =a.toUpperCase();
    document.write(a+" to "+b);
}

//task11
function task11(){
    var a=prompt("enter something");
    var b=a.charAt(0).toUpperCase();
    var c=a.substr(1).toLowerCase()
    document.write("<br> convert into title case: " +b + c);

}

//task13
function task13(){
    var a=prompt("enter a username");
    
    if(True==a.indexOf("@",1)){
        alert("eneter a valid username");
    }if(True==a.indexOf(".",1)){
        alert("eneter a valid username");
    }if(True==a.indexOf(",",1)){
        alert("eneter a valid username");
    }if(True==a.indexOf("!",1)){
        alert("eneter a valid username");
    }else{
        document.write(a);
    }
}
