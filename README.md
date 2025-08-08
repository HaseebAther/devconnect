# 💼 DevConnect

DevConnect is a beginner-friendly, full-stack web application built with Django that allows developers to showcase their skills, share their projects, and connect with other like-minded developers for collaboration. It’s a lightweight portfolio and networking platform inspired by GitHub and LinkedIn — created as a learning project with real-world use.

---

## 📌 Table of Contents

- [🚀 Features](#-features)
- [📸 Screenshots](#-screenshots)
- [📦 Tech Stack](#-tech-stack)
- [⚙️ Setup Instructions](#️-setup-instructions)
- [🧠 Project Structure](#-project-structure)
- [📁 Models Overview](#-models-overview)
- [🎯 Future Improvements](#-future-improvements)
- [🤝 Contributions](#-contributions)
- [📃 License](#-license)

---

## 🚀 Features

- 🔐 User authentication (Sign up, Login, Logout)
- 👤 Developer profile with:
  - Name, bio, skills, social links (GitHub, LinkedIn, etc.)
  - Profile image
- 💻 Project showcase:
  - Title, description, technologies used, live link, image
- 🔍 Explore other developers
  - Search and filter by skills
- 📄 Clean UI using Django templates and Bootstrap
- 🖼️ Media and static file handling
- 🔧 CRUD functionality for profiles and projects
- 🚧 Pagination and filtering

---

## 📸 Screenshots

> _(Add screenshots here after designing pages with Loveable.dev or once you build the templates)_

---

## 📦 Tech Stack

**Frontend:**  
- HTML5 + CSS3 (Bootstrap 5)  
- Django Template Engine  

**Backend:**  
- Python 3  
- Django (4.x or 5.x)  
- SQLite (default) or PostgreSQL (optional)  

**Other:**  
- Pillow (for image uploads)  
- Crispy Forms (optional, for better form styling)  

---

## ⚙️ Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/devconnect.git
cd devconnect

# 2. Create a virtual environment
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Apply migrations
python manage.py makemigrations
python manage.py migrate

# 5. Create superuser
python manage.py createsuperuser

# 6. Run the development server
python manage.py runserver
```

---

## 🧠 Project Structure

```
devconnect/
├── accounts/         # Handles user profiles, registration
├── projects/         # Project upload, view, and explore
├── templates/        # Global and app-specific templates
├── static/           # CSS, JS, images
├── media/            # Uploaded images/files
├── db.sqlite3        # SQLite database
├── manage.py
└── README.md
```

---

## 📁 Models Overview

### `UserProfile` (OneToOne with User)
| Field         | Type         | Description                   |
|---------------|--------------|-------------------------------|
| user          | OneToOne     | Django auth user              |
| bio           | Text         | Short bio                     |
| profile_image | ImageField   | Profile picture               |
| skills        | CharField    | Comma-separated tech skills   |
| github_link   | URLField     | GitHub profile                |
| linkedin_link | URLField     | LinkedIn profile              |
| website       | URLField     | Personal site or portfolio    |

### `Project` (ForeignKey to UserProfile)
| Field         | Type         | Description                     |
|---------------|--------------|---------------------------------|
| owner         | ForeignKey   | Who posted it                   |
| title         | CharField    | Project title                   |
| description   | Text         | What the project is about       |
| tech_stack    | CharField    | Comma-separated tech names      |
| project_link  | URLField     | GitHub or live URL              |
| image         | ImageField   | Optional screenshot             |
| created_at    | DateTime     | Timestamp of creation           |

---

## 🎯 Future Improvements

- ✅ REST API with Django Rest Framework  
- ✅ Chat or comment system between devs  
- ✅ Advanced filtering (by location, collaboration interest)  
- ✅ Tags as ManyToMany field instead of comma-separated  
- ✅ Add followers/following functionality  
- ✅ Better dashboard UI with charts/analytics  

---

## 🤝 Contributions

This is a personal learning project, but contributions are welcome!  
- Fork the repo  
- Create a feature branch  
- Submit a pull request  

---

## 📃 License

MIT License — feel free to use, modify, and share!

---

> Built with 💙 by [Your Name]
