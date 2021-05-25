import React from "react";

const Edituser = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] =  React.useState(props.user) //props.user);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
     <div> 
      <h1 className="form-header stroke-me"> Update Registration: </h1>
    <div className="container">
    <form onSubmit={handleSubmit}>
<ul className="form">
    <li><input
        placeholder="First"
        type="text"
        name="first"
        value={formData.first}
        onChange={handleChange}
      /></li>
 <li><input
         placeholder="Last"
        type="text"
        name="last"
        value={formData.last}
        onChange={handleChange}
        /></li>
        <li><input
      placeholder="Username"
        type="text"
        name="user"
        value={formData.user}
        onChange={handleChange}
        /></li>
        <li><input
       placeholder="Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        /></li>
 <li><input
      placeholder="Telephone - xxxxxxxxx"
        type="number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        /></li>
        <li><input
      placeholder="Street"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        /></li>
        <li><input
    placeholder="City"
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        /></li>
        <li><input
    placeholder="State"
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        /></li>
        <li><input
          placeholder="Zip Code"
        type="number"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        /></li>
        <li><input
          placeholder="Image Url"
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      /></li>
      </ul>

      <input id="main-login-button" type="submit" value={props.label} />
    </form>

    </div>
    </div>
  );
};

export default Edituser;