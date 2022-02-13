import React from "react";
import AllUsers from "./components/AllUsers";

function Home() {
  if (!window.sessionStorage.getItem("token")) {
    window.location.href = "./login";
    console.log(window.sessionStorage);
  }

  function clearSession() {
    console.log("ahora se borratotod");
    sessionStorage.clear();
    window.location.href = "./login";
  }

  return (
    <div>
      <div>
        <button type="button" onClick={clearSession}>
          Logout
        </button>
      </div>
      <h2>Welcome to Our Page</h2>
      <div>
        <AllUsers />
      </div>
    </div>
  );
}

export default Home;
