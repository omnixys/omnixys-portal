Für **Omnixys / Nexys** sollte die Username-Syntax **eindeutig, maschinenfreundlich, menschenlesbar und langfristig stabil** sein.
Nachfolgend die **klare Best-Practice-Empfehlung**, inklusive Alternativen und Entscheidungsgrundlagen.

---

## ✅ **Empfohlene Standard-Syntax (Primary)**

### **`firstname.lastname`**

**Beispiel**

```text
caleb.gyamfi
rachel.mueller
max.mustermann
```

**Warum das der richtige Standard ist**

* International etabliert (Enterprise-Standard)
* Gut lesbar
* Stabil (ändert sich selten)
* Perfekt für:

  * Login
  * Audit-Logs
  * Support & Admin-UIs
  * IAM / SSO / Keycloak

➡️ **Das sollte der Default für menschliche User sein.**

---

## 🔁 **Eindeutigkeit bei Namensgleichheit**

### Regel: **Suffix mit Zahl**

```text
max.mustermann
max.mustermann2
max.mustermann3
```

❌ **Nicht empfohlen**

* UUIDs im Username
* Geburtsjahre
* Sonderzeichen

---

## 🧩 **System- & Service-Accounts (separater Namensraum!)**

### **`svc.<service>`**

```text
svc.user-service
svc.audit-service
svc.notification
```

**Vorteile**

* sofort als nicht-menschlich erkennbar
* sauber trennbar in Logs & RBAC
* gut für Mongo / Kafka / CI-User

---

## 🔐 **Technische / CI / Bot-Accounts**

### **`bot.<purpose>`**

```text
bot.github-actions
bot.release
bot.data-migration
```

---

## 🧪 **Dev / Test / Local User**

### **`dev.<name>`**

```text
dev.caleb
dev.testuser
```

Oder für automatische Tests:

```text
test.user01
test.user02
```

---

## ❌ **Nicht empfohlene Syntaxen**

| Syntax              | Grund                    |
| ------------------- | ------------------------ |
| `CalebGyamfi`       | Case-Sensitivity-Risiken |
| `caleb_gyamfi`      | uneinheitlich            |
| `caleb-gyamfi`      | kollidiert mit Slugs     |
| `caleb123`          | nicht sprechend          |
| E-Mail als Username | E-Mail kann sich ändern  |

---

## 🧠 **Wichtige Architektur-Regel**

> **Username ≠ User ID**

* `id` → technisch (UUID / CUID)
* `username` → human-readable, eindeutig, loginfähig
* `email` → Kommunikationskanal, nicht Identität

---

## 🏁 **Klare Empfehlung für Omnixys**

### ✔ Menschliche User

```text
firstname.lastname
```

### ✔ Services

```text
svc.<service-name>
```

### ✔ Bots

```text
bot.<purpose>
```

Wenn du willst, definiere ich dir als Nächstes:

* Username-Validation-Regex
* Case-Handling-Strategie (lowercase enforced)
* Keycloak-Mapping (username vs. preferred_username)
* Mongo-Index-Strategie für `username`
