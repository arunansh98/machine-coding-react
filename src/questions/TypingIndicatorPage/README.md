# 💬 Typing Indicator using React

This project demonstrates a simple typing indicator using `useState`, `useEffect`, and `setTimeout`.

## 🚀 Features
- Displays a typing indicator when a user is typing.
- Hides the indicator after 1.5 seconds of inactivity.
- Works for multiple users in a chat window.

## 📌 How It Works
1. **State Management:**
   - `useState` stores the input value and typing status.
   - Two states (`isFirstUserTyping` and `isSecondUserTyping`) track each user's typing status.

2. **Typing Detection using `useEffect`:**
   - When the user types, `setIsUserTyping(true)` is triggered.
   - A `setTimeout` of 1.5 seconds resets `setIsUserTyping(false)`.
   - The timeout is cleared to prevent unnecessary state updates.

3. **Component Structure:**
   - `App.js` manages typing states for both users.
   - `ChatWindow.js` handles UI and typing logic.


