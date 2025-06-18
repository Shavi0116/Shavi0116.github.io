let users = [];
let user = {};

const validateUser = () => {
  let email = document.getElementById("txtEmail1").value;
  let pass = document.getElementById("txtPass1").value;
  const found = users.find(
    (value) => value.email === email && value.pass === pass
  );
  if (found) {
    showHome();
  } else {
    document.getElementById("errorTxt").innerHTML = "Access Denied";
  }
};

const loginForm = () => {
  let userIs = "<ul>";
  users.forEach((u) => {
    userIs += `<li>${u.name} (${u.email})</li>`;
  });
  userIs += "</ul>";

  const str = `
    <div style='display:flex'>
      <div>
        <h3>Login Form</h3>
        <p id='errorTxt' style='color:red'></p>
        <p><input type='text' id='txtEmail1' placeholder='Email'></p>
        <p><input type='password' id='txtPass1' placeholder='Password'></p>
        <p><button onclick='validateUser()'>Submit</button></p>
        <p><button onclick='registerForm()'>Create Account</button></p>
      </div>
      <div>
        <h3>List of Users</h3>
        ${userIs}
      </div>
    </div>
  `;
  root.innerHTML = str;
};


const saveUser = () => {
  let name = document.getElementById("txtName").value;
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  users.push({
    name,
    email,
    pass,
  });
  loginForm();
};

const registerForm = () => {
  const str = `<div>
    <h3>Registration Form</h3>
    <p><input type='text' id='txtName' placeholder="Name"></p>
    <p><input type='text' id='txtEmail' placeholder="Email"></p>
    <p><input type='password' id='txtPass' placeholder="Password"></p>
    <p><button onclick='saveUser()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    `;
  root.innerHTML = str + "</div>";
};

const showHome = () => {
  const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `;
  root.innerHTML = str + "</div>";
};