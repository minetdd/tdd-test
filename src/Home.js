import React, {Fragment} from "react";

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
      />
      <button>Submit</button>
    </Fragment>
  )
}

export default Home;