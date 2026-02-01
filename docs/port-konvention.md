# 🔌 Port-Konvention – GentleCorp-Ecosystem

Diese Datei definiert die empfohlene Portvergabe für alle Microservices, das API-Gateway sowie das Frontend innerhalb des GentleCorp-Ecosystems. Ziel ist eine klare, konsistente und zukunftssichere Struktur zur leichteren Verwaltung, Monitoring und Fehleranalyse.

---

## 🎯 Allgemeine Portbereiche

| Service-Typ               | Portbereich | Beispiel                |
| ------------------------- | ----------- | ----------------------- |
| Core Services             | 7000–7099   | `7001` → person         |
| Shopping Services         | 7100–7199   | `7101` → shopping-cart  |
| Finance Services          | 7200–7299   | `7201` → payment        |
| Product & Inventory       | 7300–7399   | `7301` → product        |
| Support & Activity        | 7400–7499   | `7402` → notification   |
| Identity & Authentication | 7500–7599   | `7501` → authentication |
| API Gateway               | 8000        | `8000` → gateway        |
| Frontend (Next.js)        | 3000        | `3000` → omnixys-ui     |

---

## 📦 Aktuelle Service-Ports

| Microservice   | Empfohlener Port |
| -------------- | ---------------- |
| user.          | 7001             |
| account        | 7002             |
| profile        | 7003             |
| shopping-cart  | 7101             |
| order          | 7102             |
| payment        | 7201             |
| invoice        | 7202             |
| transaction    | 7203             |
| product        | 7301             |
| inventory      | 7302             |
| logstream      | 7401             |
| notification   | 7402             |
| authentication | 7501             |
| **Gateway**    | **8000**         |
| **Frontend**   | **3000**         |


| Microservice        | Prod Port | Dev/Test Port |
|---------------------|-----------|----------------|
| person              | 7001      | 9001           |
| account             | 7002      | 9002           |
| shopping-cart       | 7101      | 9101           |
| order               | 7102      | 9102           |
| payment             | 7201      | 9201           |
| invoice             | 7202      | 9202           |
| transaction         | 7203      | 9203           |
| property            | 7204      | 9204           |
| booking             | 7205      | 9205           |
| entertainment       | 7206      | 9206           |
| activity            | 7207      | 9207           |
| todo                | 7208      | 9208           |
| product             | 7301      | 9301           |
| inventory           | 7302      | 9302           |
| analytics           | 7303      | 9303           |
| logcollector        | 7401      | 9401           |
| notification        | 7402      | 9402           |
| recommendation      | 7403      | 9403           |
| reviews             | 7404      | 9404           |
| transport           | 7405      | 9405           |
| event               | 7406      | 9406           |
| invitation          | 7407      | 9407           |
| ticket              | 7408      | 9408           |
| authentication      | 7501      | 9501           |
| gateway             | 8000      | 9800           |
| frontend (Next.js)  | 3000      | 3900           |

---

## ✅ Vorteile der Struktur

- **Konsistenz** über alle Services hinweg
- **Skalierbar** für zukünftige Erweiterungen
- **Monitoring-freundlich** (z. B. Prometheus, Grafana)
- **Weniger Konflikte** bei lokaler oder Docker-Ausführung

---

✍️ Autor: GentleCorp Core Engineering  
🕓 Letzte Aktualisierung: 2025-05-05
