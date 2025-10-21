variable "aws-region" {
  type = string
  default = "us-east-1"
}

variable "aws-profile" {
  type = string
  default = "default"
}

variable "node-instance-type" {
  type = string
  default = "t3.medium"
}

variable "cluster-name" {
  type = string
  default = "node-devops-pro"
}

variable "desired-capacity" {
  type = number
  default = 2
}