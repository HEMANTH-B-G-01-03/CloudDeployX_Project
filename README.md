<!-- # 🚀 CloudDeployX: Automated Deployment and Orchestration of Multi-Tier Applications

## 📌 Project Overview

CloudDeployX is a cloud-native deployment platform designed to automate the deployment, management, and orchestration of multi-tier applications using modern DevOps and cloud technologies.

The system enables users to deploy containerized frontend and backend services seamlessly, monitor deployment status, manage application configurations, and orchestrate workloads using Kubernetes. By leveraging Docker containers, Kubernetes orchestration, MongoDB metadata storage, and AWS cloud services, CloudDeployX simplifies application deployment while improving scalability, reliability, and maintainability.

---

## 🎯 Problem Statement

Traditional application deployment processes are often manual, time-consuming, and prone to configuration errors. Managing multiple application tiers such as frontend, backend, and database services becomes increasingly complex as applications scale.

CloudDeployX addresses these challenges by providing:

* Automated deployment workflows
* Containerized application packaging
* Kubernetes-based orchestration
* Centralized deployment tracking
* Cloud-native infrastructure management
* Scalable and reliable service deployment

---

## 🏗️ System Architecture

The project follows a multi-tier architecture:

### Frontend Layer

* Built using ReactJS and Bootstrap
* Provides an intuitive user interface for deployment management
* Displays deployment status and application information

### Backend Layer

* Developed using Python Flask
* Handles deployment requests and API communication
* Manages application metadata and deployment records

### Database Layer

* MongoDB stores:

  * Deployment metadata
  * Application configurations
  * Deployment history
  * Service information

### Containerization Layer

* Docker packages frontend and backend services into isolated containers
* Ensures portability and consistency across environments

### Orchestration Layer

* Kubernetes (Minikube) manages:

  * Pod creation
  * Service exposure
  * Application scaling
  * Container lifecycle management

### Cloud Infrastructure Layer

* AWS EC2 hosts application workloads
* AWS IAM manages access permissions
* AWS S3 stores deployment artifacts and backups
* AWS CloudWatch provides monitoring and logging capabilities

---

## ⚙️ Technology Stack

| Component        | Technology            |
| ---------------- | --------------------- |
| Frontend         | ReactJS, Bootstrap    |
| Backend          | Python Flask          |
| Database         | MongoDB               |
| Containerization | Docker                |
| Orchestration    | Kubernetes (Minikube) |
| Cloud Platform   | AWS EC2               |
| Monitoring       | AWS CloudWatch        |
| Storage          | AWS S3                |
| Security         | AWS IAM               |
| Version Control  | GitHub                |

---

## ✨ Key Features

### Automated Deployment

* One-click deployment workflow
* Reduced manual intervention
* Faster application delivery

### Multi-Tier Application Management

* Frontend service deployment
* Backend service deployment
* Database integration

### Docker Containerization

* Lightweight application packaging
* Consistent execution environments
* Simplified dependency management

### Kubernetes Orchestration

* Pod management
* Service discovery
* Load balancing
* Auto-recovery capabilities

### Deployment Tracking

* Deployment history management
* Status monitoring
* Metadata storage in MongoDB

### Cloud Monitoring

* AWS CloudWatch integration
* Resource utilization tracking
* Application monitoring

---

## 📂 Project Structure

```text
CloudDeployX/
│
├── frontend/              # React Frontend
├── backend/               # Flask Backend
├── docker/                # Docker Configuration Files
├── kubernetes/            # Kubernetes Manifests
├── docs/                  # Project Documentation
├── screenshots/           # Application Screenshots
│
├── README.md
└── .gitignore
```

---

## 🔄 Project Workflow

1. User submits deployment request through React UI.
2. Flask backend processes deployment request.
3. Deployment information is stored in MongoDB.
4. Docker images are created for application services.
5. Kubernetes deploys containers as pods.
6. Services are exposed through Kubernetes networking.
7. AWS CloudWatch monitors deployed services.
8. Deployment status is displayed on the dashboard.

---

## ☁️ AWS Services Used

### Amazon EC2

Hosts application infrastructure and deployment environment.

### Amazon S3

Stores deployment artifacts and application packages.

### AWS IAM

Provides secure access control and resource permissions.

### Amazon CloudWatch

Monitors application health, logs, and resource utilization.

---

## 📊 Expected Outcomes

* Automated application deployment
* Reduced deployment complexity
* Improved scalability and reliability
* Better resource utilization
* Centralized deployment management
* Enhanced cloud-native application orchestration

---

## 🔮 Future Enhancements

* CI/CD Pipeline Integration
* Horizontal Pod Autoscaling
* Multi-Cluster Deployment
* Role-Based Access Control (RBAC)
* Real-Time Monitoring Dashboard
* Infrastructure as Code (Terraform)
* GitHub Actions Integration

---

## 👨‍💻 Developed By

**Hemanth B G**

Master of Technology (Computer Science & Engineering)

BMS College of Engineering, Bengaluru

---

## 📜 License

This project is developed for academic and educational purposes as part of the Cloud Computing Laboratory Mini Project. -->


# 🚀 CloudDeployX: Automated Deployment and Orchestration of Multi-Tier Applications

## 📌 Project Overview

CloudDeployX is a cloud-native deployment management platform designed to simplify the deployment and monitoring of multi-tier applications using modern cloud and containerization technologies.

The platform enables users to manage application deployments through a centralized dashboard, store deployment metadata, and deploy services using a multi-container Docker architecture hosted on AWS Cloud infrastructure.

The project demonstrates the integration of React, Flask, MongoDB, Docker, and AWS EC2 to provide a scalable and portable deployment environment.

---

## 🎯 Problem Statement

Traditional application deployment processes are often manual, complex, and prone to configuration errors. Managing multiple application tiers such as frontend, backend, and database services becomes increasingly difficult as applications scale.

CloudDeployX addresses these challenges by providing:

* Centralized deployment management
* Containerized application packaging
* Automated service deployment
* Deployment tracking and monitoring
* Cloud-based hosting environment
* Scalable multi-tier architecture

---

## 🏗️ System Architecture

```text
                    User Browser
                          │
                          ▼
                 React Frontend
                    (Port 3000)
                          │
                          ▼
                  Flask Backend
                    (Port 5000)
                          │
                          ▼
                    MongoDB
                   (Port 27017)

         All services run as Docker containers
              hosted on AWS EC2 Instance
```

---

## ⚙️ Technology Stack

| Component               | Technology     |
| ----------------------- | -------------- |
| Frontend                | ReactJS        |
| Backend                 | Python Flask   |
| Database                | MongoDB        |
| Containerization        | Docker         |
| Container Orchestration | Docker Compose |
| Cloud Platform          | AWS EC2        |
| Version Control         | GitHub         |

---

## ✨ Key Features

### 🚀 Deployment Dashboard

* User-friendly deployment management interface
* Real-time deployment overview
* Deployment statistics and monitoring

### 📦 Docker-Based Deployment

* Multi-container application architecture
* Separate frontend, backend, and database containers
* Simplified deployment process

### 🗄️ MongoDB Integration

* Stores deployment metadata
* Maintains deployment history
* Stores application configuration information

### ☁️ Cloud Deployment

* Hosted on AWS EC2
* Publicly accessible deployment environment
* Remote deployment management

### 📊 Deployment Monitoring

* Deployment lifecycle visualization
* Deployment status tracking
* Application history management

---

## 📂 Project Structure

```text
CloudDeployX_Project/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.py
│   ├── config.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
│
├── docker/
├── docs/
├── kubernetes/
├── screenshots/
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

## 🔄 Application Workflow

1. User submits deployment information through the React dashboard.
2. Flask backend processes the deployment request.
3. Deployment information is stored in MongoDB.
4. Docker containers manage application services.
5. Deployment details are displayed on the dashboard.
6. Users can view deployment history and status.

---

# 🐳 Running the Project Locally

## Prerequisites

* Docker Desktop
* Git

---

## Clone Repository

```bash
git clone https://github.com/HEMANTH-B-G-01-03/CloudDeployX_Project.git

cd CloudDeployX_Project
```

---

## Start Application

```bash
docker compose up --build
```

---

## Access Application

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:5000
```

---

# ☁️ AWS EC2 Deployment

## Infrastructure Configuration

* Ubuntu Server 26.04 LTS
* AWS EC2 t3.micro Instance
* 18 GB GP3 Storage
* Docker Engine
* Docker Compose
* MongoDB Container

---

## Security Group Configuration

| Port  | Purpose              |
| ----- | -------------------- |
| 22    | SSH Access           |
| 3000  | Frontend Application |
| 5000  | Backend API          |
| 27017 | MongoDB              |

---

## Connect to EC2

```bash
ssh -i clouddeployx-key.pem ubuntu@<EC2_PUBLIC_IP>
```

---

## Clone Repository on EC2

```bash
git clone https://github.com/HEMANTH-B-G-01-03/CloudDeployX_Project.git

cd CloudDeployX_Project
```

---

## Configure Environment Variables

Create:

```text
backend/.env
```

Add:

```env
MONGODB_URI=mongodb://mongodb:27017/
```

---

## Deploy Application

```bash
docker compose up --build -d
```

---

## Verify Containers

```bash
docker ps
```

Expected Containers:

* clouddeployx-frontend
* clouddeployx-backend
* clouddeployx-mongodb

---

## View Logs

Frontend:

```bash
docker logs clouddeployx-frontend
```

Backend:

```bash
docker logs clouddeployx-backend
```

MongoDB:

```bash
docker logs clouddeployx-mongodb
```

---

## Access Deployed Application

```text
http://<EC2_PUBLIC_IP>:3000
```

Example:

```text
http://98.88.30.154:3000
```

---

## 📸 Screenshots

### Dashboard

(Add Dashboard Screenshot)

### Docker Containers

(Add docker ps Screenshot)

### AWS EC2 Deployment

(Add EC2 Screenshot)

### MongoDB Connection

(Add MongoDB Connection Screenshot)

---

## 📊 Project Outcomes

* Successful deployment of a multi-tier application
* Containerized application architecture
* Cloud-based hosting on AWS EC2
* Centralized deployment management
* MongoDB-based deployment metadata storage
* Docker-based service orchestration

---

## 🔮 Future Enhancements

* Kubernetes Deployment Automation
* AWS IAM Integration
* AWS S3 Integration
* CI/CD Pipeline using GitHub Actions
* Real-Time Monitoring Dashboard
* Role-Based Access Control (RBAC)
* Infrastructure as Code using Terraform

---

## 👨‍💻 Developed By

**Hemanth B G**

Master of Technology (Computer Science & Engineering)

BMS College of Engineering, Bengaluru

GitHub: https://github.com/HEMANTH-B-G-01-03

---

## 📜 License

This project is developed for academic and educational purposes as part of the Cloud Computing Laboratory Mini Project.
