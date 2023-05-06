$(function () {
  

  $("#formSubmit").on("click", (e) => {
    // ii. Package the data

    e.preventDefault();

    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let age = $("#age").val();
    let zipCode = $("#zipCode").val();
    let language = $("#language").val();

    alert(
      JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
        zipCode: zipCode,
        language: language,
      })
    );
  });


  $("#showPwdBtn").on("click", function () {
    let pwdInput = $("#pwd");
    let pwdFieldType = pwdInput.attr("type");

    if (pwdFieldType === "password") {
      pwdInput.attr("type", "text");
      $(this).text("Hide Password");
    } else {
      pwdInput.attr("type", "password");
      $(this).text("Show Password");
    }
  });
  $("#loadProfile").on("click", function () {
    console.log("button clicked: "); //TODO: find out who clicked me, w/this?

    $.ajax({
      url: "https://replit.com/@Catharsis11867/india#data.json",
      dataType: "json",
      success: function (data) {
        console.log(data.userName);
        $("#userName").val(data.userName);
        console.log(data.optIn);

        $("#optIn").prop("checked", data.optIn);
      },
    });

    //TODO: can we grab data form anohter website.
  });

  $("#displayProfile").on("click", function () {
    console.log("dipsplay button clicked: "); //TODO: find out who clicked me, w/

    $("#dataContainer").append(
      $("#userName").val() + " put in ... data from my input boxes"
    );
  });
});
});
