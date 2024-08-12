function DataLoad() {

    const getUser = (data) => {
     
if(data.fake===0){
        console.log("success");
      return fetch("http://localhost:3000/user/"+data.id, {
        type: "GET",
      }).then((res) => res.json());
    }else{
      console.log("fake");
    }
    };
  
    return {
      getUser
    };
  }
  
  export default DataLoad();