output "cluster-name" {
  value = module.eks.cluster_name
}

output "cluster-endpoint" {
  value = module.eks.cluster_endpoint
}

output "kubeconfig-file" {
  value = local_file.kubeconfig.filename
}