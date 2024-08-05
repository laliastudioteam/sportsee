function SessionLoad() {
    const getSession = () => {
      return fetch("http://localhost:3000/user/12/average-sessions", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getSession
    };
  }
  
  export default SessionLoad();