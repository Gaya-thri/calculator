function create(element) {
    return  document.createElement(element);
}
var container = create("div");
container.setAttribute("class","container")
var row1 = create("div")
row1.setAttribute("class","row")
var col1 = create("div")
col1.setAttribute("class","col-lg-4 col-md-4 col-sm-4 col-xs-4 col-3")
var col3 = create("div")
col3.setAttribute("class","col-lg-4 col-md-4 col-sm-4 col-3 col-xs-4")
var col2 = create("div")
col2.setAttribute("class","col-lg-4 col-md-4 col-sm-4 col-6  col-xs-4 col2")
var calbody = create("div");
calbody.setAttribute("class","calbody")
var rowdiv = create("div")
rowdiv.setAttribute("class","row")
var result = create("div")
result.setAttribute("class","col-lg-12 col-md-12 col-sm-12  col-xs-12 col-12 result")
var display = create("div")
display.setAttribute("class","col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 display")

rowdiv.append(result,display)
col2.append(rowdiv)
col2.append(rowdiv);
row1.append(col1,col2,col3)
container.append(row1)

var col1 = document.createElement('div')
col1.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button1 = create("button")
button1.setAttribute("class","operator btn-block btn-info btn-square")
button1.setAttribute("id","btn=")
button1.setAttribute("type","button")
button1.innerText = "="
col1.append(button1)
rowdiv.append(col1)


var col2 = document.createElement('div')
col2.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button2 = create("button")
button2.setAttribute("class","operator btn-lg btn-md btn-sm btn-xs btn-secondary btn-square")
button2.setAttribute("id","btnplus")
button2.setAttribute("type","button")
button2.innerText = "+"
col2.append(button2)
rowdiv.append(col2)

var col3 = document.createElement('div')
col3.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button3 = create("button")
button3.setAttribute("class","operator btn-lg btn-md btn-sm btn-xs btn-secondary btn-square")
button3.setAttribute("id","btnmin")
button3.setAttribute("type","button")
button3.innerText = "-"
col3.append(button3)
rowdiv.append(col3)


var col4 = document.createElement('div')
col4.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button4 = create("button")
button4.setAttribute("class","operator btn-lg btn-md btn-sm btn-xs btn-secondary btn-square")
button4.setAttribute("type","button")
button4.setAttribute("id","btnmul")
button4.innerText = "*"
col4.append(button4)
rowdiv.append(col4)




var col5 = document.createElement('div')
col5.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button5 = create("button")
button5.setAttribute("class","operator btn-lg btn-md btn-sm btn-xs btn-secondary btn-square")
button5.setAttribute("id","btndiv")
button5.setAttribute("type","button")
button5.innerText = "/"
col5.append(button5)
rowdiv.append(col5)


var col6 = document.createElement('div')
col6.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button6 = create("button")
button6.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button6.setAttribute("id","btn1")
button6.setAttribute("type","button")
button6.innerText = "1"
col6.append(button6)
rowdiv.append(col6)
button6.onclick = function() {
    display.innerHTML = "1";
}

var col7 = document.createElement('div')
col7.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button7 = create("button")
button7.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button7.setAttribute("id","btn2")
button7.setAttribute("type","button")
button7.innerText = "2"
col7.append(button7)
rowdiv.append(col7)




var col8 = document.createElement('div')
col8.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button8 = create("button")
button8.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button8.setAttribute("id","btn3")
button8.innerText = "3"
col8.append(button8)
rowdiv.append(col8)



var col9 = document.createElement('div')
col9.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button9 = create("button")
button9.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button9.setAttribute("id","btn4")
button9.innerText = "4"
col9.append(button9)
rowdiv.append(col9)

var col10 = document.createElement('div')
col10.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button10 = create("button")
button10.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button10.setAttribute("id","btn5")
button10.innerText = "5"
col10.append(button10)
rowdiv.append(col10)

var col11 = document.createElement('div')
col11.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button11 = create("button")
button11.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button11.setAttribute("id","btn6")
button11.innerText = "6"
col11.append(button11)
rowdiv.append(col11)


var col12 = document.createElement('div')
col12.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button12 = create("button")
button12.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button12.setAttribute("id","btn7")
button12.innerText = "7"
col12.append(button12)
rowdiv.append(col12)

var col13 = document.createElement('div')
col13.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button13 = create("button")
button13.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button13.setAttribute("id","btn8")
button13.innerText = "8"
col13.append(button13)
rowdiv.append(col13)

var col14 = document.createElement('div')
col14.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button14 = create("button")
button14.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button14.setAttribute("id","btn9")
button14.innerText = "9"
col14.append(button14)
rowdiv.append(col14)


var col15 = document.createElement('div')
col15.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button15 = create("button")
button15.setAttribute("class","number btn-lg btn-md btn-sm btn-xs btn-success btn-square")
button15.setAttribute("id","btn0")
button15.innerText ="0"
col15.append(button15)
rowdiv.append(col15)

var col16 = document.createElement('div')
col16.setAttribute("class","col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6")
var button16 = create("button")
button16.setAttribute("class","number  btn-lg btn-md btn-sm btn-xs btn-danger btn-square")
button16.setAttribute("id","btnC")
button16.innerText = "C"
col16.append(button16)
rowdiv.append(col16)

rowdiv.append(col1,col2,col3,col4,col5,col6,col7,col8,col9,col10,col11,col12,col13,col14,col15,col16)
document.body.append(container)

let array = "";
display.innerHTML =""
button1.addEventListener("click",function() {
        result.innerHTML = final(array);
})
button2.addEventListener("click",function() {
    array += ' + '
    display.innerHTML = array;
})
button3.addEventListener("click",function() {
    array += ' - '
    display.innerHTML = array;
})
button4.addEventListener("click",function() {
    array += ' * '
    display.innerHTML = array;
})
button5.addEventListener("click",function() {
    array += ' / '
    display.innerHTML = array;
})
button6.addEventListener("click",function() {
    array += '1'
    display.innerHTML = array;
})
button7.addEventListener("click",function() {
    array +=  '2'
    display.innerHTML = array;
})
button8.addEventListener("click",function() {
    array += '3'
    display.innerHTML = array;
})
button9.addEventListener("click",function() {
    array += '4'
    display.innerHTML = array;
})
button10.addEventListener("click",function() {
    array += '5'
    display.innerHTML = array;
})
button11.addEventListener("click",function() {
    array += '6'
    display.innerHTML = array;
})
button12.addEventListener("click",function() {
    array += '7'
    display.innerHTML = array;
})
button13.addEventListener("click",function() {
    array += '8'
    display.innerHTML = array;
})
button14.addEventListener("click",function() {
    array += '9'
    display.innerHTML = array;
})
button15.addEventListener("click",function() {
    array += '0'
    display.innerHTML = array;
})
button16.addEventListener("click",function() {
    array = null;
    array = "";
    display.innerHTML = clear();
})
function clear(val) {
    return null;
}
function final(val) {
    var ele = val.split(" ");
    var sum = parseInt(ele[0]);
     for(i=0;i<ele.length;i++) {
         if(ele[i]=='+') {
             if(ele[i+1]=='+'||ele[i+1]=='-'||ele[i+1]=='*'||ele[i+1]=='/') {
                 sum = "NaN"
                 break;
             }
             sum = sum + parseInt(ele[i+1]);
         }
         if(ele[i]=='-') {
            if(ele[i+1]=='+'||ele[i+1]=='-'||ele[i+1]=='*'||ele[i+1]=='/') {
                sum = "NaN"
                break;
            }
             sum = sum - parseInt(ele[i+1]);
         }
         if(ele[i]=='*'){
            if(ele[i+1]=='+'||ele[i+1]=='-'||ele[i+1]=='*'||ele[i+1]=='/') {
                sum = "NaN"
                break;
            }
             sum = sum * parseInt(ele[i+1]);
         }
         if(ele[i]=='/') {
            if(ele[i+1]=='+'||ele[i+1]=='-'||ele[i+1]=='*'||ele[i+1]=='/') {
                sum = "NaN"
                break;
            }
             sum = sum / ele[i+1];
         }
     }
     display.innerHTML= null;
     array=null;
     array="";
     return sum;
}