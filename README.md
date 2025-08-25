# ✍️ Blogly - Full-Stack Blog Platform

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

A **modern blogging platform** where ideas meet a clean, scalable tech stack.  
Built with **React + Vite**, styled with **Tailwind CSS**, and powered by **Vercel Serverless Functions + PostgreSQL**.

---

## ✨ Features

✅ **User Authentication** – OTP-based secure signup/login  
✅ **Blog Management** – Create, read, update, delete blogs  
✅ **Social Features** – Like, comment, and track views  
✅ **Admin Panel** – Manage users and blogs with analytics  
✅ **Responsive Design** – Sleek UI with TailwindCSS  
✅ **Serverless Backend** – Deployed on Vercel with Postgres DB  

---

## 🚀 Live Demo

> 🌍 Deployed with [Vercel](https://blogly-seven.vercel.app/).  

---

## 📸 Screenshot

![Main Page](blog 1.png)

---

## ⚙️ Tech Stack

**Frontend:** React 18, Vite, Tailwind CSS, React Router  
**Backend:** Vercel Functions, PostgreSQL, Nodemailer, bcryptjs  
**Deployment:** Vercel (serverless, auto-scaling)  

---

## 📊 API Highlights

- `POST /api/send-otp` → Send OTP via email  
- `POST /api/verify-otp` → Verify OTP & register user  
- `POST /api/login` → Login with email/OTP  
- `GET /api/blogs` → Fetch all blogs  
- `POST /api/blogs` → Create a new blog  
- `POST /api/blogs/[id]/like` → Like/unlike a blog  
- `POST /api/blogs/[id]/comment` → Add comment  
- `GET /api/admin/users` → Manage users  
- `DELETE /api/admin/blogs` → Remove blog posts  

---

## 🛠️ Local Setup

1️⃣ Clone the repo  
```bash
git clone https://github.com/yourusername/Blogly.git
cd Blogly
````

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Start dev server

```bash
npm run dev
```

4️⃣ Visit in browser

```
http://localhost:5173
```

---

## 📌 Future Improvements

🔹 Rich text editor for blogs
🔹 User profiles with avatars & bios
🔹 Blog categories & tags
🔹 Notifications & subscriptions
🔹 Mobile app integration

---

## 🔒 Security

* OTP-based email verification
* bcrypt password hashing
* Parameterized queries to prevent SQL injection
* CORS handling per endpoint

---

## 📝 License

Licensed under the **MIT License**.
See [LICENSE](./LICENSE) for more info.

---

## 🤝 Connect with Me

Made with ❤️ by **Muhammad Ahmed**

🔗 [LinkedIn](https://www.linkedin.com/in/muhammad-ahmed-5b7850340/)
💻 [GitHub](https://github.com/Ahmed291005)

---
