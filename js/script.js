document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Declare variables
    var fullNameInput = document.getElementById("fullname");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Initialize data and errors
    var data = {};
    var errors = [];
  
    // Full Name validation
    if (fullNameInput.value !== "") {
      data.fullname = fullNameInput.value;
    } else {
      errors.push("Full Name is required");
    }
  
    // Email validation
    if (emailInput.value !== "") {
      if (emailRegex.test(emailInput.value)) {
        data.email = emailInput.value;
      } else {
        errors.push("Invalid Email");
      }
    } else {
      errors.push("Email is required");
    }
  
    // Message validation
    if (messageInput.value !== "") {
      data.message = messageInput.value;
    } else {
      errors.push("Message is required");
    }
  
    // Print feedback/errors
    if (errors.length > 0) {
      console.log("Errors:", errors);
    } else {
      console.log("Data:", data);
      fullNameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });
  
