#  DevOps Portfolio Project (Jenkins + AWS + Terraform + EKS + Node.js)

This repository demonstrates a **full-scale CI/CD pipeline** built using Jenkins, Docker, Terraform, Kubernetes (EKS), and AWS.  
It showcases modern DevOps practices including Infrastructure as Code (IaC), containerization, security scanning, and automated deployment to the cloud.

---

# CI/CD Workflow

  . Checkout Source
      Jenkins pulls the code from GitHub.

  . Build & Scan
      Each microservice is built into a Docker image and scanned for vulnerabilities using Trivy.

  . Push to ECR
      Built images are pushed to AWS Elastic Container Registry with a build-specific tag.

  . Terraform Apply
      Terraform provisions the AWS infrastructure — including the EKS Cluster, VPC, and Node Groups.

  . Deploy to EKS
      Jenkins applies Kubernetes manifests to deploy the services into the cluster.

---
    
# How to Run

1. Prerequisites:

. AWS account with ECR and EKS permissions

. Jenkins with the following tools installed:

  docker, terraform, awscli, kubectl

. AWS credentials stored in Jenkins as aws-credentials



2. Setup AWS ECR

. Create repositories for each service:
    aws ecr create-repository --repository-name devops-portfolio-user
    aws ecr create-repository --repository-name devops-portfolio-product
    aws ecr create-repository --repository-name devops-portfolio-gateway


3️. Run Pipeline in Jenkins

  . Create a new Pipeline project

  . Set Pipeline from SCM → Git

  . Use your GitHub repo URL

  . Jenkins automatically detects the Jenkinsfile

  . Click Build Now

---

# Links
- GitHub: https://github.com/MDFZ-83
- Linkedin: www.linkedin.com/in/mohammad-feizi-408972348
- Email: mfz.code83@gmail.com
    
