---
id: quickstart
title: Встановлення ROZOOM
sidebar_label: Встановлення ROZOOM
sidebar_position: 1
description: Завантажте і встановіть десктопний застосунок ROZOOM на Linux, Windows або macOS.
---

# Встановлення ROZOOM

Завантажте інсталятор для своєї ОС зі [сторінки останнього релізу](https://github.com/ceh13-community/rozoom/releases/latest).

Для кожної платформи є два варіанти — **slim** (менший файл, підтягує CLI-інструменти типу kubectl при першому використанні) і **full-offline** (усе вже всередині, мережа після завантаження не потрібна). Обирайте slim, якщо не потрібна офлайн-робота.

## Linux

ROZOOM постачається у форматах `.deb` і `.rpm`.

**`.deb`** (Ubuntu, Debian та похідні): завантажте файл, потім двічі клацніть на нього у файловому менеджері, або виконайте в терміналі:

```bash
sudo apt install ./ROZOOM_K8s_Linter_IDE_<версія>_amd64_slim.deb
```

**`.rpm`** (Fedora, openSUSE та похідні): завантажте файл, потім виконайте:

```bash
sudo dnf install ./ROZOOM_K8s_Linter_IDE-<версія>-1.x86_64_slim.rpm
```

На openSUSE:

```bash
sudo zypper install ./ROZOOM_K8s_Linter_IDE-<версія>-1.x86_64_slim.rpm
```

Замініть `slim` на `full-offline` у назві файлу, якщо обрали цей варіант.

## Windows

Завантажте інсталятор `.exe` або `.msi` і запустіть його.

## macOS

Завантажте `.dmg` (лише Apple Silicon / aarch64 — збірки для Intel ще немає), відкрийте його і перетягніть ROZOOM у Applications.

---

Після встановлення запустіть ROZOOM з меню застосунків (або зі Start menu / Launchpad). Перший екран — **Manage Kubernetes Clusters**; далі — [Підключення першого кластера](/user/connect-cluster/).
