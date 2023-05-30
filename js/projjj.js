//  Structuree -------------------------------------------------------------------------------------
const body=document.getElementById("bodyy");

const bodyText=

`<section>
<h1>CROMA Sign in:</h1>

<form action="" id="login">
        <div>
            <p>E-mail:</p>
            <input type="text" required placeholder="Enter your e-mail id" name="email">
        </div>
        <div>
            <p>Password:</p>
            <input type="password" id="input" required placeholder="Enter Password" name="password">
        </div>
        <div>
            <button type="submit">Sign in</button>
        </div>
</form>
</section>`

body.innerHTML = bodyText;

// Login -------------------------------
const loginURL="https://students.codex.today/login";

const loginData=document.getElementById("login");

loginData.addEventListener("submit", (event)=>{
    event.preventDefault();

    const loginFormData={
        email: loginData.email.value,
        password: loginData.password.value
    };

    fetch(loginURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData)
    }) 
    .then(res => res.json())
    .then(data => {
        const keys=Object.keys(data);
        keys.forEach((e) => localStorage.setItem(e,data[e]));
        if(data.token){

            window.location.assign("/html/proj.html");
        }
    })
    .catch(err => console.log(err))
})
