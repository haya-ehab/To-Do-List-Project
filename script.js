const addTaskButton = document.getElementById("add-task-btn");
const createTaskButton = document.getElementById("create-task-btn");
const backToCalendarButton = document.getElementById("back-to-calendar");
const backToCalendarAnalyticsButton = document.getElementById("back-to-calendar-analytics");
const taskNameInput = document.getElementById("task-name");
const taskDateInput = document.getElementById("task-date");
const taskTimeInput = document.getElementById("task-time");
const taskCategoryInput = document.getElementById("task-category");
const todayTasksList = document.getElementById("today-tasks");
const toggleButton = document.getElementById("toggle-mode");
const container = document.querySelector(".container"); // Reference to the container

// Function to switch to the task creation screen
addTaskButton.addEventListener("click", function() {
    document.getElementById("calendar-screen").style.display = "none";
    document.getElementById("task-creation-screen").style.display = "block";
});

// Function to create a new task
createTaskButton.addEventListener("click", function() {
    const taskName = taskNameInput.value.trim();
    const taskDate = taskDateInput.value;
    const taskTime = taskTimeInput.value;
    const taskCategory = taskCategoryInput.value;

    if (taskName) {
        const li = document.createElement("li");
        li.textContent = `${taskName} - ${taskDate} at ${taskTime} [${taskCategory}]`;
        li.classList.add("task-item");

        // Append the new task to the today tasks list
        todayTasksList.appendChild(li);

        // Clear the input fields
        taskNameInput.value = "";
        taskDateInput.value = "";
        taskTimeInput.value = "";

        // Switch back to the calendar screen
        document.getElementById("task-creation-screen").style.display = "none";
        document.getElementById("calendar-screen").style.display = "block";
    } else {
        alert("Please enter a task name.");
    }
});

// Function to go back to the calendar screen from task creation
backToCalendarButton.addEventListener("click", function() {
    document.getElementById("task-creation-screen").style.display = "none";
    document.getElementById("calendar-screen").style.display = "block";
});

// Function to go back to the calendar screen from analytics
backToCalendarAnalyticsButton.addEventListener("click", function() {
    document.getElementById("analytics-screen").style.display = "none";
    document.getElementById("calendar-screen").style.display = "block";
});

// Function to toggle night mode
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("night");
    document.body.classList.toggle("morning");
    container.classList.toggle("night"); // Toggle night class on container
    container.classList.toggle("morning"); // Toggle morning class on container

    // Save the current mode in localStorage
    if (document.body.classList.contains("night")) {
        localStorage.setItem("theme", "night");
        toggleButton.textContent = "🌞 Day Mode"; // Change button text to Day Mode
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙 Night Mode"; // Change button text to Night Mode
    }
});

// Function to set today's date and current time in the input fields
function setCurrentDateTime() {
    const now = new Date();
    
    // Set the date input to today's date
    const today = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    taskDateInput.value = today;

    // Set the time input to the current time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    taskTimeInput.value = `${hours}:${minutes}`; // Format: HH:MM
}

// Call the function to set the date and time when the page loads
setCurrentDateTime();

// Function to apply morning or night theme based on the current time
function applyTimeBasedTheme() {}
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 6 && hours < 18)  // Morning (6 AM to 6 PM)
        document.body.classList.add("morning");
        document.body.classList.remove("night");
        container.classList.add("morning"); // Add morning class to container
        // Function to set today's date in the date input field

        
        // Function to set today's date in the header
        function setCurrentDate() {
            const now = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = now.toLocaleDateString('en-US', options);2/18/2025 // Format: "Month Day, Year"
            document.getElementById("current-date").textContent = formattedDate;2/18/2025 // Set the date in the header
        }
        
        // Call the function to set the date when the page loads
        setCurrentDate(2/18/2025);
        
        // Other existing functions...