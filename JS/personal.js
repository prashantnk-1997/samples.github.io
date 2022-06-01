function next(){

    console.log({"First Name": firstname.value,
                "middle name": mname.value,
                "Last Name": lname.value,
                "phone": phone.value,
                "email": email.value, 
                
                "DOB" : DOB.value,
                "Gender": Gender.value
                
                });


                if(firstname.value, mname.value,lname.value,phone.value,email.value, DOB.value,Gender.value == 0){
                  document.getElementById('error').innerHTML="Please Entre All Detailes"
                }
               
                
               
               
               
               else{
                  
                location.assign("file:///D:/mini%20projects/application%20form/academic.html");     
               }   
               
               
               if(yes.checked == true){
                console.log(["PWD:" + yes.value])
             }
             else if (no.checked == true){
               console.log(["PWD:" + no.value])
             }else{
              document.getElementById('error').innerHTML="Please Entre All Detailes"
             }
      
}

function back(){
  location.assign("file:///D:/mini%20projects/application%20form/login.html");  
}