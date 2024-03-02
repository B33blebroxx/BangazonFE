import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser
import { useAuth } from '../utils/context/authContext';

function RegisterForm() {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    uid: user.fbUser.uid,
    firstName: '',
    lastname: '',
    email: '',
    userName: '',
    profileImgUrl: '',
    address: '',
    isSeller: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser(formData).then(() => updateUser(user.fbUser.uid));
    console.warn(user.uid, user.fbUser.uid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Registration</Form.Label><br />
        <Form.Text className="text-muted">Please enter your first name</Form.Text>
        <Form.Control type="text" name="FirstName" required placeholder="First Name" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your last name</Form.Text>
        <Form.Control type="text" name="LastName" required placeholder="Last Name" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your user name</Form.Text>
        <Form.Control type="text" name="UserName" required placeholder="Enter User Name" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your email address</Form.Text>
        <Form.Control type="email" name="Email" required placeholder="Enter Email Address" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your address</Form.Text>
        <Form.Control type="text" name="Address" required placeholder="Enter Address" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter a profile image url</Form.Text>
        <Form.Control type="text" name="ProfileImgUrl" required placeholder="Profile Image URL" onChange={handleChange} /><br />
        <Form.Check
          className="seller?"
          type="switch"
          id="seller"
          name="IsSeller"
          checked={formData.IsSeller}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              IsSeller: e.target.checked,
            }));
          }}
        />
        <Form.Text className="text-muted">Are you a seller?</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    fbUser: PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.string.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      userName: PropTypes.string,
      profileImgUrl: PropTypes.string,
      address: PropTypes.string,
      isSeller: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default RegisterForm;
