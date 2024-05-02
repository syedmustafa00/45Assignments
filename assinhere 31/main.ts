let users :string[]=["Admin","Mustafa","mohsinaYasoob"];
if (users.length===0) {
    console.log("we need to find some user");
        
}else{
    for (let  user of users) {
            if(user==="admin"){
                console.log("would you like to see a status report?");
                
            }else{
                console.log(`hello ${user}, thank you for logging in again `);
                
            }
        
        
    }

}
users=[];
if (users.length===0){
    console.log("we need to find some users");
    
}

