import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateContactName, validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactBox, setContactBox] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else {
      setContactBox(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!email || !validateEmail(email)) {
      setErrorMessage('Please enter an email address');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!contactName || !validateContactName(contactName)) {
      setErrorMessage(
        `Please provide your name.`
      );
      return;
    }
    if (!contactBox) {
      setErrorMessage(
        `Please leave a message no longer than 250 characters.`
      );
      return;
    }
    alert(`Hello ${contactName}, Thank you for contacting me!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setContactName('');
    setContactBox('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div>
      <p>Hello {contactName}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="contact name"
        />
        <textarea
          value={contactBox}
          name="contactBox"
          onChange={handleInputChange}
          type="text"
          placeholder="Message Me"
          maxLength="250"
          pattern="([a-zA-Z0-9_\-\.]+)"
        ></textarea>
        <p>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
        </p>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
