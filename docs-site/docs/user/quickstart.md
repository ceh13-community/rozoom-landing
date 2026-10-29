---
id: quickstart
title: Install ROZOOM
sidebar_label: Install ROZOOM
sidebar_position: 1
description: Download and install the ROZOOM desktop app on Linux, Windows, or macOS.
---

# Install ROZOOM

Download the installer for your OS from the [latest release](https://github.com/ceh13-community/rozoom/releases/latest).

Each platform has two variants — **slim** (smaller download, pulls in CLI tools like kubectl on first use) and **full-offline** (everything bundled, no network needed after download). Pick slim unless you need to work offline.

## Linux

ROZOOM ships as `.deb` and `.rpm` packages.

**`.deb`** (Ubuntu, Debian, and derivatives): download the file, then either double-click it in your file manager, or run:

```bash
sudo apt install ./ROZOOM_K8s_Linter_IDE_<version>_amd64_slim.deb
```

**`.rpm`** (Fedora, openSUSE, and derivatives): download the file, then run:

```bash
sudo dnf install ./ROZOOM_K8s_Linter_IDE-<version>-1.x86_64_slim.rpm
```

On openSUSE:

```bash
sudo zypper install ./ROZOOM_K8s_Linter_IDE-<version>-1.x86_64_slim.rpm
```

Swap `slim` for `full-offline` in the filename if you picked that variant.

## Windows

Download the `.exe` or `.msi` installer and run it.

## macOS

Download the `.dmg` (Apple Silicon / aarch64 only — no Intel build yet), open it, and drag ROZOOM to Applications.

---

Launch ROZOOM from your applications menu (or Start menu / Launchpad) once installed. The first screen you see is **Manage Kubernetes Clusters** — continue with [Connect your first cluster](/user/connect-cluster/).
