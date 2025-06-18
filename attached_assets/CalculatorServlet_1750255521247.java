@WebServlet("/calculate")
public class CalorieCalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve form data
        int height = Integer.parseInt(request.getParameter("height"));
        int weight = Integer.parseInt(request.getParameter("weight"));
        int age = Integer.parseInt(request.getParameter("age"));
        double activityLevel = Double.parseDouble(request.getParameter("activityLevel"));
        int daysAvailable = Integer.parseInt(request.getParameter("days"));
        int hoursPerDay = Integer.parseInt(request.getParameter("hours"));
        
        // Perform calculations
        // Implement your logic here to calculate maintenance calories, calories to lose/gain weight
        
        // Suggest workout plan
        String workoutPlan = suggestWorkoutPlan(daysAvailable);
        
        // Set attributes to pass data to JSP
        request.setAttribute("workoutPlan", workoutPlan);
        
        // Forward to result JSP
        RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
        dispatcher.forward(request, response);
    }
    
    // Method to suggest workout plan based on the number of days available
    private String suggestWorkoutPlan(int daysAvailable) {
        String workoutPlan;
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
}
