<form id="registration-form">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <label for="password-confirm">Confirm Password:</label>
  <input type="password" id="password-confirm" name="password-confirm">

  <input type="submit" value="Submit">
</form>

<script>
  const form = document.getElementById("registration-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;

    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);

    form.reset();
  });
</script>
