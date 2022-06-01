function login(){
    var username= document.getElementById("username").value
    var password= document.getElementById("password").value
    
    if(username=="admin" && password=="1234"){
       location.assign("file:///D:/mini%20projects/application%20form/personal.html")
       alert("Login Success");
        console.log("Login Success")
        console.log({"username" : username ,
        "password" : password});

        
        
    }else{
       
        document.getElementById('error').innerHTML="Please Entre Corrcet Detailes"
        document.getElementById('error2').innerHTML="Note: <br> User Name: admin <br>Password: 1234"
        console.log({"username" : username ,
          
        "password" : password});
    }
}

var username= document.querySelector("#username");
username.addEventListener("keyup",function(){
   

    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
   

    if (username.value.length == 0 || username.value.length < 5){
        username.style.border= '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
    }else{
        username.style.border= '1px solid green';
        u_times.style.display = 'none';
        u_check.style.display = 'block';

    }
    

});

var password= document.querySelector("#password");
password.addEventListener("keyup",function(){
   

    var p_times = document.querySelector('.p_times');
    var p_check = document.querySelector('.p_check');
   

    if (password.value.length == 0 || password.value.length < 4){
        password.style.border= '1px solid red';
        p_times.style.display = 'block';
        p_check.style.display = 'none';
        return false;
    }else{
        password.style.border= '1px solid green';
        p_times.style.display = 'none';
        p_check.style.display = 'block';

    }
    

});