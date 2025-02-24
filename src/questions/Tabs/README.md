# Tabs Form Page  

## Overview  
A simple multi-tab form that displays different components inside separate tabs. Each tab contains multiple input fields, and users can navigate between tabs using **Next**, **Previous**, or by clicking on the tab labels. Once submitted, the entire form data is collected, allowing an API call to be made.  

## Features  
- 🏷 **Multiple Tabs** - Displays different form sections (Profile, Interests, Settings).  
- ✍️ **Dynamic Input Fields** - Each tab contains multiple input fields.  
- 🔄 **Cross Navigation** - Users can switch tabs using **Next**, **Previous**, or directly clicking on the tab.  
- 📤 **Form Submission** - Captures the complete form data for an API call.  

## How It Works  
1. **Tabs & Components**:  
   - Each tab represents a different section of the form.  
   - Clicking a tab switches to the corresponding form section.  
2. **State Management with useReducer**:  
   - Manages form values dynamically.  
   - Updates input values based on user input.  
3. **Navigation Between Tabs**:  
   - Users can navigate using **Next** and **Previous** buttons.  
   - Clicking on a tab also switches the view.  
4. **Form Submission**:  
   - On submission, all form data is logged and can be sent via an API call.  

## Future Enhancements  
- ✅ **Validation** for input fields before submission.  
- 🔀 **Auto-saving** progress while switching tabs.  
- 📧 **API Integration** to store form data.  
