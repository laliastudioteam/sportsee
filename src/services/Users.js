


const arrayUsers = ["12","18"]

function Users(id){
    if(id!==undefined){
        // Check if ID exists in the list 
        if(arrayUsers.includes(id)){
          return true;
        }else{
          return false; 
        }
        }else{
          return false;
        }
  };

  export default Users;




