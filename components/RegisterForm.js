import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser
import { useAuth } from '../utils/context/authContext';

function RegisterForm() {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    uId: user.fbUser.Uid,
    firstName: '',
    lastname: '',
    email: '',
    userName: '',
    address: '',
    isSeller: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser(formData).then(() => updateUser(user.fbUser.Uid));
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
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" name="FirstName" required placeholder="First Name" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your first name</Form.Text>
        <Form.Control type="text" name="LastName" required placeholder="Last Name" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your last name</Form.Text>
        <Form.Control type="text" name="UserName" required placeholder="Enter User Name" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your user name</Form.Text>
        <Form.Control type="text" name="Address" required placeholder="Enter Address" onChange={handleChange} />
        <Form.Text className="text-muted">Please enter your address</Form.Text>
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
      uId: PropTypes.string.isRequired,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      userName: PropTypes.string,
      address: PropTypes.string,
      isSeller: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default RegisterForm;
