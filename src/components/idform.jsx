import { useState } from 'react';

function IdentityForm() {
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:5000/forms", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameText,
            email: emailText,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setNameText("");
          setEmailText("");
        } else {
          m = 1 //this is nothing
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type='text' value={nameText} placeholder='Name' onChange={(e) => setNameText(e.target.value)} />
        <input type='text' value={emailText} placeholder='Email' onChange={(e) => setEmailText(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    );
  }

  export default IdentityForm;