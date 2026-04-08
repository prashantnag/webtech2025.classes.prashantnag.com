/**
 * Lecture 1 Demo - Web Development Fundamentals
 * JavaScript: Behavior and Interactivity
 */

// ============================================
// 3️⃣ JavaScript Demo - Simple Greeting
// ============================================
document.getElementById("greetBtn").addEventListener("click", function () {
  const userName = document.getElementById("userName").value || "Friend";
  const message = document.getElementById("greetMessage");
  const output = document.getElementById("jsOutput");

  // JavaScript updates the page dynamically
  message.textContent =
    "✅ Success! JavaScript just read your input and updated this message!";
  message.classList.add("show");

  // Show the output
  output.style.display = "block";
  output.innerHTML = `
    <strong>What JavaScript Did:</strong><br>
    1. Read input value: "${userName}"<br>
    2. Created a greeting message<br>
    3. Updated the HTML on the page<br>
    4. Changed styling with classes<br>
    <br>
    <strong>Console Output:</strong><br>
    Name entered: ${userName}<br>
    Message type: Greeting<br>
    Timestamp: ${new Date().toLocaleTimeString()}<br>
    Status: ✓ Working!
  `;

  // Show in browser console too
  console.log("✅ JavaScript Demo");
  console.log("User input:", userName);
  console.log("Message displayed:", message.textContent);
});

// ============================================
// Simulate Frontend Login Interaction
// ============================================
document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("userName2").value;
  const message = document.getElementById("loginMessage");
  const output = document.getElementById("flowOutput");

  // Frontend validation
  const isValid = email.includes("@") && email.includes(".");

  output.style.display = "block";

  if (isValid) {
    message.textContent = `✅ Login successful! Welcome, ${email}`;
    message.classList.add("show");
    message.style.backgroundColor = "#d4edda";
    message.style.color = "#155724";
    message.style.borderColor = "#c3e6cb";

    output.innerHTML = `
      <strong>Frontend Processing (Browser Only):</strong><br>
      1. Frontend captured email: "${email}"<br>
      2. Frontend validated format: ✓ Looks good<br>
      3. Frontend displayed success message<br>
      <br>
      <strong>What Would Happen Next (Backend):</strong><br>
      • Frontend would send email + password to server via HTTP<br>
      • Backend would check against database<br>
      • Backend would return session token<br>
      • Frontend would redirect to dashboard<br>
      <br>
      <strong>Demo Status:</strong><br>
      ✓ Frontend validation: PASSED<br>
      ⏸ Backend communication: NOT SHOWN (server required)<br>
      Time: ${new Date().toLocaleTimeString()}
    `;
  } else {
    message.textContent = `❌ Invalid email format. Please use format: user@example.com`;
    message.classList.add("show");
    message.style.backgroundColor = "#f8d7da";
    message.style.color = "#721c24";
    message.style.borderColor = "#f5c6cb";

    output.innerHTML = `
      <strong>Frontend Validation Failed:</strong><br>
      Email: "${email}"<br>
      Issue: Missing @ or . (required for valid email)<br>
      <br>
      <strong>What Happened:</strong><br>
      1. Frontend captured input<br>
      2. Frontend checked format<br>
      3. Frontend displayed error without contacting backend<br>
      <br>
      <strong>Why This Matters:</strong><br>
      ✓ Fast feedback (instant, no network delay)<br>
      ✓ Reduces server load (invalid submissions blocked)<br>
      ✓ Better user experience
    `;
  }

  console.log("🔐 Login Simulation");
  console.log("Email entered:", email);
  console.log("Validation result:", isValid ? "VALID" : "INVALID");
});

// ============================================
// Console Messages for Learning
// ============================================
console.log(
  "%c📚 Welcome to Lecture 1 Demo!",
  "font-size: 16px; color: #053660; font-weight: bold;"
);
console.log(
  "%cThis demo shows how HTML, CSS, and JavaScript work together.",
  "font-size: 13px; color: #35557a;"
);
console.log(
  "%c\n🎯 Try these in console:",
  "font-size: 12px; color: #0d6efd; font-weight: bold;"
);
console.log('1. Edit input: document.getElementById("userName").value = "Your Name"');
console.log(
  "2. Trigger click: document.getElementById('greetBtn').click()"
);
console.log(
  '3. Check HTML: document.getElementById("greetMessage").innerHTML'
);
console.log(
  "\n💡 This is how frontend developers debug and interact with their code!"
);
