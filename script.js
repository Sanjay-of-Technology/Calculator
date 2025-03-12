let outputScreen = document.getElementById("output-screen");

function displaybutton(num)
{
    outputScreen.value += num;
}

function calculate()
{
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid")
    }
}

function Clear(){
    outputScreen.value = "";
}

function Del(){
    outputScreen.value = outputScreen.value.slice( 0, -1 );
}