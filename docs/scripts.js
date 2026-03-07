let value = "";

function press(num){
    value += num;
    update();
}

function del(){
    value = value.slice(0,-1);
    update();
}

function update(){
    if(value === ""){
        document.getElementById("amount").innerText = "$0";
    }else{
        document.getElementById("amount").innerText = "$" + value;
    }
}
