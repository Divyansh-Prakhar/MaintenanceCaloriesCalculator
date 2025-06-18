document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseFloat(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);
    const daysAvailable = parseInt(document.getElementById('days').value);

    // Calculate maintenance calories
    const maintenanceCalories = calculateMaintenanceCalories(height, weight, age, activityLevel);

    // Calculate suggested workout plan
    const workoutPlan = suggestWorkoutPlan(daysAvailable);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Maintenance Calories: ${maintenanceCalories.toFixed(2)} cal/day</h2>
        <p>To lose weight: ${maintenanceCalories - 500} cal/day</p>
        <p>To maintain weight: ${maintenanceCalories} cal/day</p>
        <p>To gain weight: ${maintenanceCalories + 500} cal/day</p>
        <h2>Suggested Workout Plan: ${workoutPlan}</h2>
    `;
});

function calculateMaintenanceCalories(height, weight, age, activityLevel) {
    // Formula for calculating BMR (Basal Metabolic Rate) using Harris-Benedict equation
    const bmr = 10 * weight + 6.25 * height - 5 * age;
    // Multiply BMR by activity level to get maintenance calories
    return bmr * activityLevel;
}

function suggestWorkoutPlan(daysAvailable) {
    let workoutPlan;
    switch(daysAvailable) {
        case 1:
            workoutPlan = "Full Body Workout (1 day/week)";
            break;
        case 2:
            workoutPlan = "Push-Pull Workout (2 days/week)";
            break;
        case 3:
            workoutPlan = "Push-Pull-Legs (3 days/week)";
            break;
        case 4:
            workoutPlan = "Upper/Lower Split (4 days/week)";
            break;
        case 5:
            workoutPlan = "Arnold Split (5 days/week)";
            break;
        default:
            workoutPlan = "Bro Split (6+ days/week)";
    }
    return workoutPlan;
}
