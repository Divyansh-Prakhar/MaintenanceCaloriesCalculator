# Maintenance Calories Calculator

A complete static web application for calculating maintenance calories, BMR, and providing personalized workout recommendations.

## Files Included

### Core Files (Static Version)
- **static_index.html** - Main calculator page with modern Bootstrap design
- **static_style.css** - Complete styling with animations and responsive design  
- **static_script.js** - All calculation logic and form handling
- **result.jsp** - JSP results page for server-side processing

### Legacy Files (Server Version)
- **index.html** - Original calculator page
- **style.css** - Original styling
- **script.js** - Original JavaScript
- **server.js** - Node.js backend server
- **CalculatorServlet.java** - Java servlet implementation
- **WebServer.java** - Java HTTP server

## How to Use (Static Version)

1. Open `static_index.html` in any web browser
2. Fill out the calculator form with your details:
   - Height, weight, age, gender
   - Activity level
   - Workout days and hours available
   - Fitness goal (lose/maintain/gain weight)
3. Click "Calculate My Calories & Get Workout Plan"
4. View your personalized results instantly

## Features

- **Accurate Calculations**: Uses Mifflin-St Jeor equation for BMR
- **Personalized Workout Plans**: Based on available days and hours
- **Macronutrient Breakdown**: 30% protein, 35% carbs, 35% fat distribution
- **BMI Calculator**: With health category classification
- **Diet Information**: Comprehensive guide to different diet types
- **Protein Food Sources**: Lists for vegetarian and non-vegetarian options
- **Responsive Design**: Works on all devices and screen sizes
- **Modern UI**: Bootstrap 5 with custom animations and gradients

## Technical Details

- Pure HTML5, CSS3, and JavaScript (no dependencies for static version)
- Bootstrap 5.3.0 for responsive design
- Font Awesome 6.4.0 for icons
- Chart.js for data visualization
- Google Fonts (Poppins) for typography

## Browser Compatibility

Works in all modern browsers including:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- No installation required

## Customization

The CSS uses custom properties (variables) for easy color scheme changes:
- Primary colors, gradients, shadows, and animations can be modified
- Responsive breakpoints are clearly defined
- All animations and transitions use CSS variables for consistency