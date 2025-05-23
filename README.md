# Expense Tracker App

I have created a full-stack **Expense Tracker** application where users can register, log in, and manage their daily expenses and categories with real-time monthly summaries and charts. Built with **React**, **Tailwind CSS**, **Spring Boot**, and **MySQL**.

👉 **[View Backend Repository](https://github.com/ritik178/personal-expanse-tracker)**

---

## 🚀 Features

* ✅ User Registration & Login (JWT Auth)
* 📂 Add, Edit, Delete Expenses
* 📒 Category Management (CRUD)
* 📊 Monthly Summary Visualization (Pie + Bar Chart)
* 🌗 Light/Dark Mode Toggle (Tailwind + `ThemeToggle`)
* 🔐 Secure API calls using JWT token
* 💅 Responsive and clean UI with Tailwind CSS
* 🎨 Framer Motion for animations

---

## 🧰 Tech Stack

### 🔹 Frontend

* React (Vite)
* Tailwind CSS with Dark Mode
* Framer Motion
* Axios
* React Router
* React Toastify

### 🔸 Backend

* Spring Boot (Java)
* Spring Security with JWT
* JPA & Hibernate
* MySQL
* Swagger for API Documentation

---

## 🌙 Dark Mode

* Toggle implemented via a button in `Header.jsx` using Tailwind's `dark` class.
* Smooth transition support using Tailwind `transition-colors`.
* Dark mode state is persisted using `localStorage`.

---

## 🗂 UI Preview

| Dashboard Light Mode                | Dashboard Dark Mode                |
| ----------------------------------- | ---------------------------------- |
| ![Light](./Screenshot%20\(13\).png) | 👇 Enable dark mode in app to view |

---

## 📁 Project Structure (Frontend)

```bash
src/
├── component/
│   ├── LoginPage.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── MainDashboard/
│   │   ├── ExpenseList.jsx
│   │   ├── AddExpense.jsx
│   │   ├── EditExpense.jsx
│   │   ├── CategoryList.jsx
│   │   ├── CategoryCrud.jsx
│   │   └── MonthlySummary.jsx
│   ├── Header.jsx
│   └── ThemeToggle.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/expense-tracker-app.git
cd expense-tracker-app
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Start React App

```bash
npm run dev
```

---

## 🛠 Backend Setup (Spring Boot)

### 1. Create MySQL Database

```sql
CREATE DATABASE expensetracker;
```

### 2. Set DB Config in `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/expensetracker
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
jwt.secret=your_jwt_secret
```

### 3. Start Spring Boot Server

```bash
./mvnw spring-boot:run
```

---

## 📚 API Documentation

* Swagger UI: `http://localhost:8080/swagger-ui/index.html`

---

## 🙌 Contribution

Feel free to fork the repo, suggest improvements, or open PRs.

---

## 📃 License

MIT License © Ritik

---

# personal-expanse-tracker-frontend
