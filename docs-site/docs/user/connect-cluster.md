---
id: connect-cluster
title: Connect your first cluster
sidebar_label: Connect a cluster
sidebar_position: 2
description: Connect an existing Kubernetes cluster to ROZOOM via kubeconfig upload, paste, or auto-detection.
---

# Connect your first cluster

The first screen after install is **Manage Kubernetes Clusters**. ROZOOM doesn't create clusters — it only connects to ones you already have. Three ways in:

- Upload a kubeconfig file
- Paste kubeconfig YAML directly
- Let ROZOOM scan standard locations (`~/.kube/config`, `$KUBECONFIG`, cloud CLIs) — matches show up under **Detected kubeconfig files**

:::note

Nothing connects automatically. Every detected or pasted config needs a confirmation click before ROZOOM touches it.

:::

Once a cluster is connected, ROZOOM runs a health check immediately — see [Pausing the linter](/user/pausing-linter/) for how results appear and how to pause checks.
