

//jshint esversion:6

exports.getDate = function(){

    const today = new Date();

    const options = {
        weeekday:'long',
        day:"numeric",
        month:'long',
        year:'numeric'
    };
   

   return today.toLocaleDateString("en-US",options);
}


exports.getDay = function(){

    const today = new Date();

    const options = {
        weeekday:'long',
       
    };
   

    return today.toLocaleDateString("en-US",options);
}



   
    
   