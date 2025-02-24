# 🛠️ React Machine Coding Questions Repository

## 📌 Description
This repository contains various **machine coding questions** related to **React.js**, commonly asked in **top product-based companies**.  
Each question is implemented as a **standalone React component** with its own setup and logic.

🌐 **Live Demo:** [Machine Coding React](https://arunansh98.github.io/machine-coding-react/)  

---

## 📂 Structure
Each question is organized into its own folder inside the `questions/` directory.

### 📁 Folder Structure:
- Each **question** is placed inside the `questions/` directory.
- Every question contains:
  - The **React component** implementation.
  - A **README.md** explaining the approach.
  - Any **necessary styles/assets**.

---

## 🚀 How to Add a New Question
1. **Create a new folder** inside the `questions/` directory.
2. **Add your component file** (e.g., `QuestionName.js`).
3. **Write a `README.md`** inside that folder, explaining your solution.
4. **Ensure routing is handled properly** in `App.js`:
   ```js
   import { Route } from "react-router-dom";
   <Route path="/question-name" element={<QuestionComponent />} />;
