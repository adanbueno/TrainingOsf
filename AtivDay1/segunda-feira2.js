$("#custom-form").submit(function () {

    let $customForm = $(this);

  //  console.log("Entrei no submit")

  //console.log($customForm.serializeArray());

    let arrayForm = $customForm.serializeArray();

    let name = arrayForm[0];
    let email = arrayForm[1];
    let senha = arrayForm[2];

    alert("name: " + name.value + "\nemail: " +
     email.value + "\npassword: " + senha.value)


})
