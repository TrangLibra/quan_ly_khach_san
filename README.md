# Grand Horizon Hospitality Management & Digital Experience Platform

[![Enterprise Architecture](https://img.shields.io/badge/Architecture-Modular%20Micro--Commerce-0A2540.svg)](https://github.com/TrangLibra/quan_ly_khach_san)
[![Medusa v2 Ready](https://img.shields.io/badge/MedusaJS-v2.18-5B32E8.svg)](https://medusajs.com/)
[![React Modern](https://img.shields.io/badge/Frontend-React%20%7C%20Vite%20%7C%20TailwindCSS-0070F3.svg)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Enterprise%20Ready-10B981.svg)](#)

A comprehensive, modular enterprise hospitality suite engineered for modern luxury resorts, boutique hotels, and chain properties. The platform integrates end-to-end Property Management System (PMS), guest booking engine, housekeeping automation, Point-of-Sale (F&B), IoT smart lock integrations, and omnichannel e-commerce capabilities powered by **MedusaJS v2**.

---

## 🏛 Solution Architecture

The system is architected as an agile enterprise monorepo combining headless modular commerce with a high-performance Property Management Engine:

```
QuanLyKhachSan-medusa/
├── medusa-backend/               # Headless Core Engine (MedusaJS v2 Framework)
│   ├── src/modules/              # Domain-driven Modules (DML)
│   │   ├── hotel/                # Branches, Room Inventory, Room Types, Dynamic Pricing Rules
│   │   ├── housekeeping/         # Minibar, Linens, Inspection Reports, Lost & Found
│   │   ├── restaurant/           # Tables, POS Menu, Realtime Kitchen Display (KDS)
│   │   └── iot/                  # SmartLock Keys, Access Card Provisions
│   ├── src/workflows/            # Transactional Business Workflows with Step Rollbacks
│   └── src/api/                  # Secured Storefront & Administrative REST APIs
│
├── frontend/                     # High-end Guest & Management Web Applications
│   ├── src/pages/client/         # Heritage Luxury Guest Portal (Booking, Concierge, Room Service)
│   ├── src/pages/admin/          # Next-Gen PMS Dashboard (Visual Floor Grid, Check-In/Out Desk)
│   └── src/components/           # Reusable Design System with Material & Heritage styling
│
├── backend/                      # Legacy Core Services (Database migrations & historic datasets)
└── db/                           # Database Schema Definitions & Automation Seeds
```

---

## ✨ Enterprise Capabilities

### 1. Unified Property & Room Inventory Management
- **Visual Room Status Matrix**: Real-time multi-floor grid display (`CleanAvailable`, `DirtyOccupied`, `DirtyVacant`, `Inspected`, `Maintenance`, `OutofOrder`).
- **Dynamic Pricing Engine**: Granular seasonality pricing rules, multiplier rates, and occupancy thresholds.
- **Overbooking Prevention**: Sub-second booking locks with auto-expiring reservation holds.

### 2. Streamlined Front Desk Operations
- **Express Check-In & Check-Out**: Fast guest identity validation, digital key generation, and folio aggregation.
- **Deposit & Folio Ledger**: Multi-currency ledger tracking room tariffs, F&B charges, minibar audits, and late checkout surcharges.

### 3. F&B & Guest Service Dispatch
- **Table Reservation & In-Room Dining**: QR code mobile dining menu with live order transmission to Kitchen Display Systems (KDS).
- **Service Dispatch Terminal**: On-demand guest service tracking (Housekeeping, Luggage, Maintenance requests) via Kanban workflows.

### 4. Smart Hospitality & IoT
- **Digital Smart Key Provisioning**: Automated temporary passcode and card key assignment synced directly with booking schedules.
- **Room Inspection & Lost & Found**: End-to-end chain of custody with image attachment and staff resolution logging.

---

## 🎨 Design System: Modern Heritage Luxury

The interface adopts a **Modern Heritage Luxury** aesthetic, combining classic resort elegance with clean, modern ergonomic standards:
- **Primary Tone**: Deep Regal Navy (`#131B2E`) and High-End Slate.
- **Accent**: Warm Brass & Antique Gold (`#B9A277`, `#FFD985`).
- **Surfaces**: Crisp Pearl Ivory, frosted glassmorphism overlays, and hairline metallic dividers.
- **Typography**: Editorial Serif headers paired with clean geometric Sans-Serif body copy.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: `>= 20.x`
- **Package Manager**: `npm` or `yarn`

### 1. Install & Configure Frontend
```bash
cd frontend
npm install
npm run dev
```
Access the client & administrative portal at: `http://localhost:5173`

### 2. Launch Medusa Backend
```bash
cd medusa-backend
npm install
npm run dev
```
Administrative API running on: `http://localhost:9000`

---

## 🔒 Enterprise Security & Compliance
- Role-Based Access Control (RBAC) with granular operator permission levels.
- Secure JWT bearer authentication and encrypted guest record storage.
- Transactional workflows ensuring data consistency across inventory changes.

---

## 📄 License
Proprietary Enterprise Software. All rights reserved.
