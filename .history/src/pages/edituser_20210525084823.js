import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] =  React.useState(props.user);

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.first}
        onChange={handleChange}
      />
      <input
        type="text"
        name="last"
        value={formData.last}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Edituser;