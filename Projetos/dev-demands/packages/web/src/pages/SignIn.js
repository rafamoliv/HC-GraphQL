import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      //.then((response) => response.JSON())
      .then((data) => {
        console.log("Success", data);
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={handleEmailChange} type="email" inputMode="email" autoComplete="username" />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Senha</label>
          <input id="password" value={password} onChange={handlePasswordChange} type="password" autoComplete="current-username" />
        </fieldset>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default SignIn;
