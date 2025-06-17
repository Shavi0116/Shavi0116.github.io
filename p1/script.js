const loginForm=()=>{
    const str=`
    <div>
    <h3>Login Form</h3>
    <input type="email" id="email" placeholder="enter email">
    <input type="password" id="password" placeholder="enter password">
    <p><button onclick="showHome()">Submit</button></p>
    <p><button onclick="RegisterForm()">Create Account</button></p>
    `
    root.innerHTML=str+'</div>';
}

const RegisterForm=()=>{
    const str=`
    <div>
    <h3>Register Form</h3>
    <input type="name" id="name" placeholder="enter name">
    <input type="email" id="email" placeholder="enter email">
    <input type="password" id="password" placeholder="enter password">
    <p><button onclick="loginForm()">Submit</button></p>
    <p>Already a member? <button onclick="loginForm()">Login</button></p>
    `
    root.innerHTML=str+'</div>';
}

const showHome=()=>{
    const str=`
    <div>
    <h3>Welcome</h3>
    <p><button onclick="loginForm()">Logout</button></p>
     `
    root.innerHTML=str+'</div>';
}