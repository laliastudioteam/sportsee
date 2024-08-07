function DataLoad() {

    const getUser = (idUser) => {
      return fetch("http://localhost:3000/user/"+idUser, {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getUser
    };
  }
  
  export default DataLoad();