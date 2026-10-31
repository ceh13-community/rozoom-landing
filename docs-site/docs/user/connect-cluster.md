---
id: connect-cluster
title: Connect your first cluster
sidebar_label: Connect a cluster
sidebar_position: 2
description: Connect an existing Kubernetes cluster to ROZOOM - from a kubeconfig file, or without one, through six credential methods.
---

# Connect your first cluster

The first screen after install is **Manage Kubernetes Clusters**. ROZOOM doesn't create clusters - it only connects to ones you already have.

Nothing connects automatically. Every detected, pasted, or manually entered credential needs a confirmation click before ROZOOM touches it.

## Already have a kubeconfig?

Three ways in:

- **Upload a kubeconfig file**
- **Paste kubeconfig YAML** directly
- **Let ROZOOM scan standard locations** (`~/.kube/config`, `$KUBECONFIG`, cloud CLI config dirs) - matches show up under **Detected kubeconfig files**, ready to add individually or all at once.

## No local kubeconfig? Use the Connect Cluster Wizard

Open the collapsible **Connect Cluster** panel for six ways to authenticate without a kubeconfig file on disk:

| Method | Best for | How it works |
| --- | --- | --- |
| **Cloud Provider** | AWS EKS, GKE, AKS, DigitalOcean | One-click import via the provider's own CLI, with cross-region discovery. `aws`, `az`, `doctl` are bundled with ROZOOM; `gcloud` for GKE must be installed separately. |
| **Exec Plugin** | Teams already using a client-go credential plugin | Recommended by the Kubernetes project - returns a short-lived token on every API call, nothing long-lived written to disk. |
| **Manual OIDC / SSO** | Azure AD, Okta, Keycloak, Google, or a generic OIDC provider | Generates a kubeconfig with a `kubelogin` exec plugin. |
| **HashiCorp Vault** | Teams issuing dynamic cluster credentials | Token, Kubernetes, OIDC, or AppRole auth against Vault. |
| **X.509 Certificate** | Mutual TLS setups | Client certificate + private key (base64 PEM). |
| **Bearer Token** | Quick static access, CI tokens | Static or ServiceAccount token - no auto-rotation, ROZOOM warns you up front. |

Both the **Connect Cluster** and **Cloud Providers** panels are collapsed by default.

## What happens after you connect

Once a cluster is added, ROZOOM runs a health check immediately - see [Pausing the linter](/user/pausing-linter/) for how results appear and how to pause checks.

```mermaid
flowchart TD
    A[Open Manage Kubernetes Clusters] --> B{Have a kubeconfig file?}
    B -- Yes --> C[Upload / paste / auto-detect]
    C --> D[Confirm the detected cluster]
    B -- No --> E[Open Connect Cluster Wizard]
    E --> F{Pick one of 6 methods}
    F --> G[Cloud Provider]
    F --> H[Exec Plugin]
    F --> I[Manual OIDC / SSO]
    F --> J[HashiCorp Vault]
    F --> K[X.509 Certificate]
    F --> L[Bearer Token]
    G --> M[Confirm credentials]
    H --> M
    I --> M
    J --> M
    K --> M
    L --> M
    D --> N[Cluster added]
    M --> N
    N --> O[Health check runs automatically]
```
