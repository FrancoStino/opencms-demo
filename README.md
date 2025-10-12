# OpenCMS Development Environment

A scaffolded OpenCMS development environment with Docker Compose.

## 🚀 Quick Start

```bash
# Copy and customize environment file
cp .env.example .env

# Start the environment
docker-compose up -d

# Access OpenCMS (wait 2-3 minutes for first startup)
open http://localhost:8080/opencms/
```

**Access URLs:**
- **OpenCMS Frontend**: http://localhost:8080/opencms/
- **OpenCMS Workplace**: http://localhost:8080/opencms/opencms/system/workplace/
- **Default Credentials**: `Admin` / `admin`

## Prerequisites

- Docker and Docker Compose installed
- At least 4GB RAM available for containers
- Ports 8080 and 3306 available

## 📋 Basic Commands

```bash
# Container management
docker-compose up -d         # Start all services
docker-compose down          # Stop all services
docker-compose logs          # View logs
docker-compose logs opencms  # OpenCMS specific logs

# Container access
docker-compose exec opencms bash    # Shell into OpenCMS container
docker-compose exec mariadb bash    # Shell into MariaDB container

# Database access
docker-compose exec mariadb mysql -u root -p  # MySQL connection
```

## 📁 Project Structure

```
├── docker-compose.yml              # Docker services definition
├── .env.example                    # Environment template
├── .gitignore                      # Git ignore rules
├── README.md                       # Main documentation
├── config/                         # Configuration files (empty)
│   ├── mariadb/                    # MariaDB configurations (empty)
│   └── opencms/                    # OpenCMS configurations (empty)
├── modules/                        # Custom OpenCMS modules (empty)
├── scripts/                        # Utility scripts (empty)
└── src/                           # Source code (empty)
```

## Services

### OpenCMS (Port 8080)
- **Image**: `alkacon/opencms-docker:latest`
- **URL**: http://localhost:8080/opencms/
- **Workplace**: http://localhost:8080/opencms/opencms/system/workplace/
- **Components**: workplace, demo

### MariaDB (Port 3306)
- **Image**: `mariadb:11.4`
- **Database**: `opencms`

## Default Credentials

- **OpenCMS Admin**: `Admin` / `admin`
- **Database Root**: `root` / `${DB_ROOT_PASSWORD}`
- **Database User**: `opencms` / `${DB_PASSWORD}`

## Environment Configuration

Copy and customize the environment file:
```bash
cp .env.example .env
```

Key variables:
- `DB_ROOT_PASSWORD`: Database root password
- `DB_NAME`: OpenCMS database name
- `DB_USER`: Database user for OpenCMS
- `DB_PASSWORD`: Database password for OpenCMS
- `JAVA_OPTS`: JVM options for OpenCMS

## Data Persistence

Docker volumes for data persistence:
- `mariadb_data`: Database files
- `opencms_webapps`: OpenCMS application files
- `opencms_logs`: Tomcat/OpenCMS logs

## Development

This is a scaffolded environment ready for:
- Custom OpenCMS module development (`modules/` directory)
- Custom scripts and utilities (`scripts/` directory)
- Source code development (`src/` directory)

## References

- [OpenCMS Documentation](https://documentation.opencms.org/)
- [Alkacon OpenCMS Docker](https://hub.docker.com/r/alkacon/opencms-docker/)
- [OpenCMS GitHub](https://github.com/alkacon/opencms-core)
