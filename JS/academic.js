
function per(){
    var a = document.getElementById("marks").value;
    var b = document.getElementById("total").value;
    var c = a/b * 100;
    
    
    document.getElementById("result").innerHTML=(c);

    switch(true){
        case ( c<=100 && c>=80):
        document.getElementById("result2").innerHTML=("Distction");
        break;
        case ( c<=80 && c>=60):
        document.getElementById("result2").innerHTML=("First class");
        break;
        case ( c<=60 && c>=35):
        document.getElementById("result2").innerHTML=("Second Class");
        break;
        case ( c<35):
        document.getElementById("result2").innerHTML=("fail");
        break;
        default: 
        document.getElementById("result2").innerHTML=("NaN");
    
    }

    


}

function per1(){
    var a = document.getElementById("marks1").value;
    var b = document.getElementById("total1").value;
    var c = a/b * 100;
    
    
    document.getElementById("result1").innerHTML=(c);

    switch(true){
        case ( c<=100 && c>=80):
        document.getElementById("result12").innerHTML=("Distction");
        break;
        case ( c<=80 && c>=60):
        document.getElementById("result12").innerHTML=("First class");
        break;
        case ( c<=60 && c>=35):
        document.getElementById("result12").innerHTML=("Second Class");
        break;
        case ( c<35):
        document.getElementById("result12").innerHTML=("fail");
        break;
        default: 
        document.getElementById("result12").innerHTML=("NaN");
    
    }

    


}

function per2(){
    var a = document.getElementById("marks2").value;
    var b = document.getElementById("total2").value;
    var c = a/b * 100;
    
    
    document.getElementById("result21").innerHTML=(c);

    switch(true){
        case ( c<=100 && c>=80):
        document.getElementById("result22").innerHTML=("Distction");
        break;
        case ( c<=80 && c>=60):
        document.getElementById("result22").innerHTML=("First class");
        break;
        case ( c<=60 && c>=35):
        document.getElementById("result22").innerHTML=("Second Class");
        break;
        case ( c<35):
        document.getElementById("result22").innerHTML=("fail");
        break;
        default: 
        document.getElementById("result22").innerHTML=("NaN");
    
    }

    


}


function back(){
    location.assign("file:///D:/mini%20projects/application%20form/personal.html")
}

function next2(){
   


    console.log({
    "passing": passing.value,
    "Marks obtained": marks.value,
    "Total Marks": total.value,
    "Uni Name" : uname.value,
    "Total Percentage": result.value, 
    "Class Obtained" : result2.value
    
    
    });

    console.log({
        "passing": passing1.value,
        "Marks obtained": marks1.value,
        "Total Marks": total1.value,
        "Uni Name" : uname1.value,
        "Total Percentage": result1.value, 
        "Class Obtained" : result12.value
        
        
        });

        console.log({
            "passing": passing2.value,
            "Marks obtained": marks2.value,
            "Total Marks": total2.value,
            "Uni Name" : uname2.value,
            "Total Percentage": result21.value, 
            "Class Obtained" : result22.value
            
            
            });

            if(passing.value, marks.value,total.value,uname.value == 0){
                document.getElementById('error').innerHTML="Please Entre All SSLC Detailes"
              }
            else if(passing1.value, marks1.value,total1.value,uname1.value == 0){
                document.getElementById('error1').innerHTML="Please Entre All PUC/DIPLOMA Detailes"
              }
              else if(passing2.value, marks2.value,total2.value,uname2.value == 0){
                document.getElementById('error2').innerHTML="Please Entre All DEGREE Detailes"
              }
             
             
              
             
             
             
             else{
                
             location.assign("file:///D:/mini%20projects/application%20form/upload.html");     
             } 
}


