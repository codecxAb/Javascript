// Short-Circuiting Rules:
// Logical AND (&&):

// If the first operand (left side) evaluates to false, the result will always be false, so the evaluation stops, and the value of the first operand is returned.
// If the first operand evaluates to true, the second operand (right side) is evaluated. If both operands are true, the result is true, and the value of the second operand is returned.

// Logical OR (||):

// If the first operand (left side) evaluates to true, the result will always be true, so the evaluation stops, and the value of the first operand is returned.
// If the first operand evaluates to false, the second operand (right side) is evaluated. If both operands are false, the result is false, and the value of the second operand is returned.

// Example: Set a default value for a function parameter
function greet(name) {
  name = name || "Guest";
  console.log(`Hello, ${name}!`);
}

greet();
greet("John");
greet("lily");

// Example: Safely access a property of an object
const someObject = null;

// Example: Sending an email if the user exists and has a valid email address
function sendEmail(user) {
  // Check if the user object exists and if it has a valid email address
  if (user && user.email) {
    console.log(`Sending email to ${user.email}`);
    // Code to send email
  } else {
    console.log("Unable to send email: Invalid user or email address");
  }
}

// Test with valid user object
const validUser = {
  name: "John",
  email: "john@example.com",
};
sendEmail(validUser); // Output: Sending email to john@example.com

// Test with invalid user object (missing email property)
const invalidUser = {
  name: "Jane",
};
sendEmail(invalidUser); // Output: Unable to send email: Invalid user or email address

// Test with null user object
sendEmail(null); // Output: Unable to send email: Invalid user or email address

sendEmail(); // Output: Unable to send email: Invalid user or email address
