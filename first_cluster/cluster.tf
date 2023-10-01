terraform {
  required_providers {
    kind = {
      source = "unicell/kind"
      version = "0.0.2-u2"
    }
  }
  
  required_version = ">= 1.2.0"
}

provider "kind" {}

resource "kind_cluster" "default" {
    name = "test-cluster"
}