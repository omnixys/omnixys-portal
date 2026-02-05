Basierend auf einer typischen Banking/FinTech-Plattform fehlen noch folgende wichtige Navigationen:

## **1. Banking Kern-Funktionen:**
```tsx
// Fehlende Hauptnavigationen
<SidebarLink href="/accounts" label="Accounts" icon={<AccountBalanceIcon />} />
<SidebarLink href="/transactions" label="Transactions" icon={<CompareArrowsIcon />} />
<SidebarLink href="/transfer" label="Transfer" icon={<SwapHorizIcon />} />
<SidebarLink href="/payments" label="Payments" icon={<PaymentsIcon />} />
<SidebarLink href="/deposit" label="Deposit" icon={<AccountBalanceWalletIcon />} />
```

## **2. Investment & Wealth Management:**
```tsx
<SidebarLink href="/investments" label="Investments" icon={<TrendingUpIcon />} />
<SidebarLink href="/portfolio" label="Portfolio" icon={<PieChartIcon />} />
<SidebarLink href="/trading" label="Trading" icon={<CandlestickChartIcon />} />
<SidebarLink href="/crypto" label="Crypto" icon={<CurrencyBitcoinIcon />} />
<SidebarLink href="/savings" label="Savings" icon={<SavingsIcon />} />
```

## **3. Cards & Products:**
```tsx
<SidebarLink href="/cards" label="Cards" icon={<CreditCardIcon />} />
<SidebarLink href="/loans" label="Loans" icon={<RequestQuoteIcon />} />
<SidebarLink href="/insurance" label="Insurance" icon={<ShieldIcon />} />
<SidebarLink href="/products" label="Products" icon={<WidgetsIcon />} />
<SidebarLink href="/offers" label="Offers" icon={<LocalOfferIcon />} />
```

## **4. Analytics & Reports:**
```tsx
<SidebarLink href="/analytics" label="Analytics" icon={<AnalyticsIcon />} />
<SidebarLink href="/reports" label="Reports" icon={<AssessmentIcon />} />
<SidebarLink href="/statements" label="Statements" icon={<ReceiptLongIcon />} />
<SidebarLink href="/tax" label="Tax" icon={<CalculateIcon />} />
<SidebarLink href="/budget" label="Budget" icon={<PieChartIcon />} />
```

## **5. Messaging & Communication:**
```tsx
<SidebarLink href="/messages" label="Messages" icon={<EmailIcon />} />
<SidebarLink href="/inbox" label="Inbox" icon={<InboxIcon />} />
<SidebarLink href="/notifications" label="Notifications" icon={<NotificationsIcon />} />
<SidebarLink href="/documents" label="Documents" icon={<DescriptionIcon />} />
<SidebarLink href="/alerts" label="Alerts" icon={<NotificationsActiveIcon />} />
```

## **6. Business Banking (falls relevant):**
```tsx
<SidebarLink href="/business" label="Business" icon={<BusinessIcon />} />
<SidebarLink href="/invoices" label="Invoices" icon={<ReceiptIcon />} />
<SidebarLink href="/payroll" label="Payroll" icon={<GroupsIcon />} />
<SidebarLink href="/vendors" label="Vendors" icon={<StorefrontIcon />} />
```

## **7. Premium Services:**
```tsx
<SidebarLink href="/premium" label="Premium" icon={<DiamondIcon />} />
<SidebarLink href="/concierge" label="Concierge" icon={<ConciergeIcon />} />
<SidebarLink href="/private" label="Private Banking" icon={<LockPersonIcon />} />
<SidebarLink href="/wealth" label="Wealth Management" icon={<AccountBalanceIcon />} />
```

## **Vollständige, strukturierte Sidebar:**

```tsx
/**
 * @file UserSidebar.tsx
 * @description Complete banking navigation sidebar
 */

"use client";

import { 
  Divider, 
  Drawer, 
  useTheme, 
  Box, 
  Typography,
  List,
  ListSubheader,
  Collapse,
  IconButton
} from "@mui/material";
import SidebarLink from "../navigation/SidebarLink";
import { JSX, useState } from "react";
import { useTranslations } from "next-intl";
import {
  // Core Navigation
  Home as HomeIcon,
  Person as ProfileIcon,
  
  // Banking
  AccountBalance as AccountsIcon,
  CompareArrows as TransactionsIcon,
  SwapHoriz as TransferIcon,
  Payments as PaymentsIcon,
  AccountBalanceWallet as DepositIcon,
  
  // Wealth
  TrendingUp as InvestmentsIcon,
  PieChart as PortfolioIcon,
  CandlestickChart as TradingIcon,
  CurrencyBitcoin as CryptoIcon,
  Savings as SavingsIcon,
  
  // Products
  CreditCard as CardsIcon,
  RequestQuote as LoansIcon,
  Shield as InsuranceIcon,
  Widgets as ProductsIcon,
  LocalOffer as OffersIcon,
  
  // Analytics
  Analytics as AnalyticsIcon,
  Assessment as ReportsIcon,
  ReceiptLong as StatementsIcon,
  Calculate as TaxIcon,
  
  // Account Management
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Receipt as BillingIcon,
  
  // Communication
  Email as MessagesIcon,
  Inbox as InboxIcon,
  Notifications as NotificationsIcon,
  Description as DocumentsIcon,
  
  // Support
  SupportAgent as SupportIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

export default function UserSidebar({ width }: { width: number }): JSX.Element {
  const theme = useTheme();
  const t = useTranslations("sidebar");
  const [bankingOpen, setBankingOpen] = useState(true);
  const [wealthOpen, setWealthOpen] = useState(true);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);

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

        {/* Banking Section */}
        <ListSubheader 
          sx={{ 
            bgcolor: 'transparent', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 }
          }}
          onClick={() => setBankingOpen(!bankingOpen)}
        >
          <Typography variant="caption" sx={{ 
            color: 'text.secondary',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            {t("banking")}
          </Typography>
          <IconButton size="small">
            {bankingOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        </ListSubheader>
        
        <Collapse in={bankingOpen}>
          <List>
            <SidebarLink href="/accounts" label={t("accounts")} icon={<AccountsIcon />} />
            <SidebarLink href="/transactions" label={t("transactions")} icon={<TransactionsIcon />} />
            <SidebarLink href="/transfer" label={t("transfer")} icon={<TransferIcon />} />
            <SidebarLink href="/payments" label={t("payments")} icon={<PaymentsIcon />} />
            <SidebarLink href="/deposit" label={t("deposit")} icon={<DepositIcon />} />
          </List>
        </Collapse>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Wealth Section */}
        <ListSubheader 
          sx={{ 
            bgcolor: 'transparent', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 }
          }}
          onClick={() => setWealthOpen(!wealthOpen)}
        >
          <Typography variant="caption" sx={{ 
            color: 'text.secondary',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            {t("wealth")}
          </Typography>
          <IconButton size="small">
            {wealthOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        </ListSubheader>
        
        <Collapse in={wealthOpen}>
          <List>
            <SidebarLink href="/investments" label={t("investments")} icon={<InvestmentsIcon />} />
            <SidebarLink href="/portfolio" label={t("portfolio")} icon={<PortfolioIcon />} />
            <SidebarLink href="/trading" label={t("trading")} icon={<TradingIcon />} />
            <SidebarLink href="/crypto" label={t("crypto")} icon={<CryptoIcon />} />
            <SidebarLink href="/savings" label={t("savings")} icon={<SavingsIcon />} />
          </List>
        </Collapse>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Products */}
        <ListSubheader sx={{ 
          bgcolor: 'transparent', 
          color: 'text.secondary',
          fontWeight: 600,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {t("products")}
        </ListSubheader>
        <List>
          <SidebarLink href="/cards" label={t("cards")} icon={<CardsIcon />} />
          <SidebarLink href="/loans" label={t("loans")} icon={<LoansIcon />} />
          <SidebarLink href="/insurance" label={t("insurance")} icon={<InsuranceIcon />} />
          <SidebarLink href="/offers" label={t("offers")} icon={<OffersIcon />} />
        </List>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Analytics Section */}
        <ListSubheader 
          sx={{ 
            bgcolor: 'transparent', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            '&:hover': { opacity: 0.8 }
          }}
          onClick={() => setAnalyticsOpen(!analyticsOpen)}
        >
          <Typography variant="caption" sx={{ 
            color: 'text.secondary',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            {t("analytics")}
          </Typography>
          <IconButton size="small">
            {analyticsOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
          </IconButton>
        </ListSubheader>
        
        <Collapse in={analyticsOpen}>
          <List>
            <SidebarLink href="/analytics" label={t("analytics")} icon={<AnalyticsIcon />} />
            <SidebarLink href="/reports" label={t("reports")} icon={<ReportsIcon />} />
            <SidebarLink href="/statements" label={t("statements")} icon={<StatementsIcon />} />
            <SidebarLink href="/tax" label={t("tax")} icon={<TaxIcon />} />
            <SidebarLink href="/budget" label={t("budget")} icon={<PieChartIcon />} />
          </List>
        </Collapse>

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
          <SidebarLink href="/documents" label={t("documents")} icon={<DocumentsIcon />} />
          <SidebarLink href="/notifications" label={t("notifications")} icon={<NotificationsIcon />} />
        </List>

        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />

        {/* Support */}
        <List>
          <SidebarLink href="/support" label={t("support")} icon={<SupportIcon />} />
          <SidebarLink href="/inbox" label={t("inbox")} icon={<InboxIcon />} />
        </List>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ 
        p: 2, 
        borderTop: `1px solid ${theme.palette.divider}`,
        bgcolor: 'rgba(0,0,0,0.02)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Nexys Banking
          </Typography>
          <Box sx={{ 
            width: 8, 
            height: 8, 
            borderRadius: '50%', 
            bgcolor: '#4CAF50',
            animation: 'pulse 2s infinite'
          }} />
        </Box>
        <Typography variant="caption" color="text.secondary" fontSize="0.7rem">
          v2.1.0 • Secure Connection
        </Typography>
      </Box>
    </Drawer>
  );
}
```

## **Wichtigste fehlende Pages:**

### **1. /accounts** - Kontenübersicht
- Alle Bankkonten (Checking, Savings)
- Kreditkarten
- Kreditlinien
- Kontostände
- Konto-Details

### **2. /transactions** - Transaktionshistorie
- Alle Buchungen
- Filter & Suche
- Kategorisierung
- Export-Funktion

### **3. /transfer** - Überweisungen
- Interne Transfers
- Externe Überweisungen
- Daueraufträge
- Vorlagen

### **4. /investments** - Investment-Portal
- Portfolio Übersicht
- Aktien, ETFs
- Krypto
- Marktdaten

### **5. /analytics** - Finanzanalysen
- Ausgabenanalyse
- Budget-Tracking
- Sparziele
- Cashflow

### **6. /messages** - Banking-Kommunikation
- Bank-Nachrichten
- Dokumente
- Benachrichtigungen
- Support-Tickets

## **Zusätzliche wichtige Features:**

### **7. Quick Actions Widget** (im Dashboard)
```tsx
// Schnellzugriff auf häufig genutzte Funktionen
- Quick Transfer
- Mobile Payment
- Bill Pay
- Card Freeze
- Statement Download
```

### **8. Notification Center**
```tsx
// Zentrale Benachrichtigungen
- Transaction Alerts
- Security Notifications
- Payment Reminders
- System Updates
- Marketing Messages
```

### **9. Favorites/Shortcuts**
```tsx
// Benutzerdefinierte Favoriten
- Favorite Transfers
- Saved Reports
- Quick Actions
- Dashboard Widgets
```

Die Sidebar sollte **hierarchisch strukturiert** sein mit **Collapsible Sections** für bessere Übersichtlichkeit. Die wichtigsten Banking-Funktionen sollten immer sichtbar sein, während erweiterte Features einklappbar sein können.