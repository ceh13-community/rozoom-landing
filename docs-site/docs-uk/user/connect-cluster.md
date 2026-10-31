---
id: connect-cluster
title: Підключення першого кластера
sidebar_label: Підключення кластера
sidebar_position: 2
description: Підключіть наявний Kubernetes-кластер до ROZOOM - з файлу kubeconfig або без нього, через шість способів автентифікації.
---

import ConnectClusterFlowchart from '../../src/assets/connect-cluster-flowchart.svg';

# Підключення першого кластера

Перший екран після встановлення - **Manage Kubernetes Clusters**. ROZOOM не створює кластери - лише підключається до тих, що вже є.

Нічого не підключається автоматично. Кожен знайдений, вставлений чи введений вручну доступ потребує підтвердження кліком, перш ніж ROZOOM його використає.

## Уже є kubeconfig?

Три шляхи:

- **Завантажити файл kubeconfig**
- **Вставити YAML** kubeconfig напряму
- **Дати ROZOOM просканувати стандартні місця** (`~/.kube/config`, `$KUBECONFIG`, теки конфігів хмарних CLI) - знахідки зʼявляються в **Detected kubeconfig files**, готові до додавання по одній або всі разом.

## Немає локального kubeconfig? Майстер підключення кластера

Відкрийте згорнуту панель **Connect Cluster** - шість способів автентифікації без файлу kubeconfig на диску:

| Спосіб | Для кого | Як працює |
| --- | --- | --- |
| **Cloud Provider** | AWS EKS, GKE, AKS, DigitalOcean | Імпорт в один клік через CLI провайдера, з виявленням по всіх регіонах. `aws`, `az`, `doctl` вбудовані в ROZOOM; `gcloud` для GKE треба встановити окремо. |
| **Exec Plugin** | Команди, що вже використовують client-go credential plugin | Рекомендовано проєктом Kubernetes - повертає короткоживучий токен на кожен виклик API, нічого довготривалого на диск не пишеться. |
| **Manual OIDC / SSO** | Azure AD, Okta, Keycloak, Google або будь-який OIDC-провайдер | Генерує kubeconfig з exec-плагіном `kubelogin`. |
| **HashiCorp Vault** | Команди з динамічними обліковими даними для кластера | Автентифікація через token, Kubernetes, OIDC або AppRole у Vault. |
| **X.509 Certificate** | Налаштування з mutual TLS | Клієнтський сертифікат + приватний ключ (base64 PEM). |
| **Bearer Token** | Швидкий статичний доступ, токени CI | Статичний токен або токен ServiceAccount - без авторотації, ROZOOM попереджає про це одразу. |

Обидві панелі, **Connect Cluster** і **Cloud Providers**, за замовчуванням згорнуті.

## Що відбувається після підключення

Щойно кластер додано, ROZOOM одразу запускає перевірку здоровʼя - див. [Призупинення лінтера](/user/pausing-linter/), як виглядають результати і як призупинити перевірки.

<ConnectClusterFlowchart />
