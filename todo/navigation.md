Basierend auf typischen Banking/FinTech-Strukturen, hier eine sinnvolle Aufteilung:

## **Aufteilung: /settings vs. /security**

### **/settings** → Allgemeine Einstellungen & Präferenzen
```tsx
/**
 * @file /settings/page.tsx
 * @description General account and preference settings
 */

// Core Sections:
1. Account Settings
   - Profile Information (Name, Contact)
   - Language & Region
   - Communication Preferences
   - Tax Information

2. Financial Preferences
   - Default Currency
   - Transaction Preferences
   - Budget Categories
   - Savings Goals

3. Digital Experience
   - Theme & Appearance
   - Dashboard Layout
   - Notification Preferences
   - Accessibility Settings

4. Data Management
   - Data Export
   - Backup Settings
   - Data Retention
   - Account Statements

5. Family & Sharing
   - Joint Accounts
   - Family Member Access
   - Shared Budgets
```

### **/security** → Sicherheitsspezifische Einstellungen
```tsx
/**
 * @file /security/page.tsx
 * @description Security and authentication settings
 */

// Core Sections:
1. Authentication
   - Two-Factor Authentication (2FA)
   - Biometric Login (Face ID/Touch ID)
   - Password Management
   - Security Questions

2. Access Control
   - Login History & Sessions
   - Device Management
   - Trusted Locations/IPs
   - API Key Management

3. Protection Features
   - Fraud Detection Settings
   - Transaction Limits
   - Blocked Countries/IPs
   - Suspicious Activity Alerts

4. Emergency & Recovery
   - Emergency Contacts
   - Account Recovery Options
   - Digital Legacy
   - Self-Exclusion Settings
```

## **Was in der Sidebar noch fehlt:**

### **1. Banking Core Features:**
```tsx
<SidebarLink href="/accounts" label={t("accounts")} />
<SidebarLink href="/transactions" label={t("transactions")} />
<SidebarLink href="/transfer" label={t("transfer")} />
<SidebarLink href="/payments" label={t("payments")} />
```

### **2. Investment & Wealth:**
```tsx
<SidebarLink href="/investments" label={t("investments")} />
<SidebarLink href="/wealth" label={t("wealth")} />
<SidebarLink href="/portfolio" label={t("portfolio")} />
<SidebarLink href="/trading" label={t("trading")} />
```

### **3. Cards & Products:**
```tsx
<SidebarLink href="/cards" label={t("cards")} />
<SidebarLink href="/loans" label={t("loans")} />
<SidebarLink href="/insurance" label={t("insurance")} />
<SidebarLink href="/products" label={t("products")} />
```

### **4. Analytics & Reports:**
```tsx
<SidebarLink href="/analytics" label={t("analytics")} />
<SidebarLink href="/reports" label={t("reports")} />
<SidebarLink href="/statements" label={t("statements")} />
<SidebarLink href="/tax" label={t("tax")} />
```

### **5. Messaging & Support:**
```tsx
<SidebarLink href="/messages" label={t("messages")} />
<SidebarLink href="/inbox" label={t("inbox")} />
<SidebarLink href="/notifications" label={t("notifications")} />
<SidebarLink href="/help" label={t("help")} />
```

## **Vollständige Sidebar-Struktur:**

```tsx
/**
 * @file UserSidebar.tsx
 * @description Complete user navigation sidebar
 */

"use client";

import { 
  Divider, 
  Drawer, 
  useTheme, 
  Box, 
  Typography,
  List,
  ListSubheader 
} from "@mui/material";
import SidebarLink from "../navigation/SidebarLink";
import { JSX } from "react";
import { useTranslations } from "next-intl";
import {
  Home as HomeIcon,
  Person as ProfileIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Receipt as BillingIcon,
  SupportAgent as SupportIcon,
  AccountBalance as AccountsIcon,
  CompareArrows as TransactionsIcon,
  SwapHoriz as TransferIcon,
  Payments as PaymentsIcon,
  TrendingUp as InvestmentsIcon,
  CreditCard as CardsIcon,
  Analytics as AnalyticsIcon,
  Email as MessagesIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

export default function UserSidebar({ width }: { width: number }): JSX.Element {
  const theme = useTheme();
  const t = useTranslations("sidebar");

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width,
          boxSizing: "border-box",
          bgcolor: theme.palette.background.default,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRight: `1px solid ${theme.palette.divider}`,
          pt: 8,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {/* Quick Access */}
        <List>
          <SidebarLink href="/home" label={t("home")} icon={<HomeIcon />} />
          <SidebarLink href="/profile" label={t("profile")} icon={<ProfileIcon />} />
        </List>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Banking */}
        <ListSubheader sx={{ 
          bgcolor: 'transparent', 
          color: 'text.secondary',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {t("banking")}
        </ListSubheader>
        <List>
          <SidebarLink href="/accounts" label={t("accounts")} icon={<AccountsIcon />} />
          <SidebarLink href="/transactions" label={t("transactions")} icon={<TransactionsIcon />} />
          <SidebarLink href="/transfer" label={t("transfer")} icon={<TransferIcon />} />
          <SidebarLink href="/payments" label={t("payments")} icon={<PaymentsIcon />} />
        </List>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Wealth */}
        <ListSubheader sx={{ 
          bgcolor: 'transparent', 
          color: 'text.secondary',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {t("wealth")}
        </ListSubheader>
        <List>
          <SidebarLink href="/investments" label={t("investments")} icon={<InvestmentsIcon />} />
          <SidebarLink href="/cards" label={t("cards")} icon={<CardsIcon />} />
          <SidebarLink href="/analytics" label={t("analytics")} icon={<AnalyticsIcon />} />
        </List>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Account Management */}
        <ListSubheader sx={{ 
          bgcolor: 'transparent', 
          color: 'text.secondary',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {t("account")}
        </ListSubheader>
        <List>
          <SidebarLink href="/settings" label={t("settings")} icon={<SettingsIcon />} />
          <SidebarLink href="/security" label={t("security")} icon={<SecurityIcon />} />
          <SidebarLink href="/billing" label={t("billing")} icon={<BillingIcon />} />
          <SidebarLink href="/messages" label={t("messages")} icon={<MessagesIcon />} />
        </List>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Support */}
        <List>
          <SidebarLink href="/support" label={t("support")} icon={<SupportIcon />} />
          <SidebarLink href="/notifications" label={t("notifications")} icon={<NotificationsIcon />} />
        </List>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ 
        p: 2, 
        borderTop: `1px solid ${theme.palette.divider}`,
        bgcolor: 'rgba(0,0,0,0.02)'
      }}>
        <Typography variant="caption" color="text.secondary" display="block">
          Nexys Banking
        </Typography>
        <Typography variant="caption" color="text.secondary" fontSize="0.7rem">
          v2.1.0 • Secure Connection
        </Typography>
      </Box>
    </Drawer>
  );
}
```

## **Fehlende wichtige Pages:**

### **1. /accounts** - Kontenübersicht
```tsx
// Features:
- Alle Konten (Checking, Savings, Credit)
- Saldo Übersicht
- Kontostände in Echtzeit
- Konto-Details
- Konto-Eröffnung
```

### **2. /transactions** - Transaktionshistorie
```tsx
// Features:
- Vollständige Transaktionshistorie
- Filter & Suche
- Kategorisierung
- Export-Funktion
- Cashflow Analyse
```

### **3. /transfer** - Geldtransfers
```tsx
// Features:
- Interne Transfers
- Externe Transfers (SEPA, SWIFT)
- Daueraufträge
- Vorlagen & Favoriten
- Transfer-Historie
```

### **4. /investments** - Investment-Portal
```tsx
// Features:
- Portfolio Übersicht
- Aktien, ETFs, Krypto
- Marktdaten
- Trading Interface
- Performance Analytics
```

### **5. /analytics** - Finanzanalysen
```tsx
// Features:
- Ausgabenanalyse
- Budget-Tracking
- Sparziele
- Finanzielle Gesundheit
- Predictive Analytics
```

### **6. /messages** - Banking-Kommunikation
```tsx
// Features:
- Bank-Nachrichten
- Dokumente
- Benachrichtigungen
- Support-Tickets
- Chat mit Berater
```

## **Empfohlene Navigation-Struktur:**

```
/home          → Dashboard mit Bento Grid
/profile       → Persönliche Daten & Einstellungen
/accounts      → Kontenverwaltung
/transactions  → Transaktionshistorie
/transfer      → Geldtransfers & Daueraufträge
/investments   → Investment-Portal
/cards         → Kartenverwaltung
/analytics     → Finanzanalysen
/settings      → Allgemeine Einstellungen
/security      → Sicherheitseinstellungen
/billing       → Abrechnung & Rechnungen
/messages      → Nachrichten & Dokumente
/support       → Hilfe & Kontakt
```

## **Zusätzliche Features für Premium:**
```tsx
// Premium/Enterprise Features
- /private-banking    → Premium Banking Services
- /estate-planning    → Vermögensplanung
- /tax-optimization   → Steueroptimierung
- /business-banking   → Geschäftskonten
- /international      → International Services
- /concierge          → Persönlicher Berater
```

Diese Struktur ist **logisch, benutzerfreundlich und skalierbar** für ein modernes Banking-System!