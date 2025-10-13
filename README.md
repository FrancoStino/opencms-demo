# OpenCMS Headless Project with Next.js

This project contains a complete development environment for a headless OpenCMS setup. It includes:

1. A **Next.js/React frontend application** for rendering content.
2. A **Docker Compose environment** to run the OpenCMS backend and a MariaDB database.

---

## 1. Frontend Development (Next.js)

The `src/` directory contains a modern frontend application built with Next.js. It fetches and displays content from the
OpenCMS instance, acting as a headless consumer.

### Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.

### Getting Started (Frontend)

**Prerequisites:**

- Node.js (v16 or later)
- npm or yarn

**1. Install Dependencies:**
Navigate to the project root and run:

```bash
npm install
```

**2. Configure Environment:**
Create a `.env.local` file in the root of the project. This file will hold the URL of your OpenCMS backend.

```
NEXT_PUBLIC_OPENCMS_SERVER=http://localhost
NEXT_PUBLIC_OPENCMS_SERVER_IMAGE=http://localhost
```

**3. Run the Development Server:**
Make sure the OpenCMS Docker environment is running (see section 2 below). Then, start the Next.js development server:

```bash
npm run dev
```

The application will be available at **http://localhost:3000**.

### Frontend Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production build of the application.
- `npm run start`: Starts the production server.
- `npm run buildMercury`: A special build script that packages the Next.js app into a format suitable for deployment
  inside OpenCMS itself.

---

## 2. Backend Environment (Docker)

A scaffolded OpenCMS development environment with Docker Compose.

### Quick Start (Backend)

**1. Configure Environment:**
If it doesn't exist, copy the example environment file. The variables are used by Docker Compose.

```bash
cp .env.development .env
```

*Note: This is separate from the `.env.local` used by the frontend.*

**2. Start the Environment:**

```bash
docker-compose up -d
```

**3. Access OpenCMS:**
Wait 2-3 minutes for the services to initialize on the first startup.

- **OpenCMS Frontend**: http://localhost/opencms/
- **OpenCMS Workplace**: http://localhost/system/workplace/
- **Default Credentials**: `Admin` / `admin`

### Backend Management

- `docker-compose up -d`: Start all services.
- `docker-compose down`: Stop all services.
- `docker-compose logs opencms`: View OpenCMS specific logs.
- `docker-compose exec opencms bash`: Shell into the OpenCMS container.

---

## 📁 Project Structure

```
├── docker-compose.yml      # Docker services definition
├── .env.development        # Docker environment template
├── .env.production         # Docker production environment
├── package.json            # Frontend dependencies and scripts
├── next.config.js          # Next.js configuration (if present)
├── postcss.config.js       # PostCSS configuration for Tailwind
├── public/                 # Static assets for the Next.js app
└── src/                    # Source code for the Next.js frontend
    ├── components/         # React components
    └── pages/              # Next.js pages (routes)
```

## Data Persistence

Docker volumes are used for data persistence:

- `mariadb_data`: Database files.
- `opencms_webapps`: OpenCMS application files.
- `opencms_logs`: Tomcat/OpenCMS logs.

## References

- [OpenCMS Documentation](https://documentation.opencms.org/)
- [Alkacon OpenCMS Docker](https://hub.docker.com/r/alkacon/opencms-docker/)
- [Next.js Documentation](https://nextjs.org/docs)
