function DataLoad() {
    const getUser = () => {
      return fetch("http://localhost:3000/user/12", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getUser
    };
  }
  
  export default DataLoad();