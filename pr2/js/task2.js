document.write("<p>Завдання 2</p>");


function time()
{
    let time = new Date();
    let a, b, c;

    if(time.getHours() < 10) 
        a = "0" + time.getHours();
    else 
        a = time.getHours();

    if(time.getMinutes() < 10) 
        b = "0" + time.getMinutes();
    else 
        b = time.getMinutes();

    if(time.getSeconds() < 10) 
        c = "0" + time.getSeconds();
    else 
        c = time.getSeconds();

    chas.value = a + ":" + b + ":" + c;
}

time()
setTimeout(window.close(), 30000)
setTimeout(function(){
    location.reload();
}, 5000);
