# Vape E‑commerce MVP Technical Specification (v1)

## 1. Project Summary
Build a custom vape e‑commerce site similar in structure to kissyvape.com with the following constraints:
- Market: US/CA, English only
- Payments: Credit card direct PSP (client provided)
- Compliance: 21+ age verification, adult signature + ID check on delivery
- Rewards: points + referrals aligned to kissy program
- Scale: ~20 SKUs, 2 brands, 10 flavors
- Subscription/auto‑replenishment: required for MVP

## 2. Tech Stack
- Frontend: Next.js (SSR/ISR)
- Backend: NestJS
- Database: PostgreSQL
- File storage: object storage (product images, banners, content images)

## 3. Core User Journeys
1. Browse products → filter/sort → view product details → add to cart
2. Checkout with age verification → payment → order confirmation
3. Post‑purchase: view order, track shipment, earn points
4. Referral: share invite → friend signs up → rewards applied
5. Subscription: create / pause / cancel / update schedule

## 4. Functional Scope (MVP)
### 4.1 Frontend
- Home: hero banner, featured/new/bundle sections, category grid
- Catalog: brand/category pages, filter + sort
- Product detail: variants (flavor, nicotine, size), related products
- Cart + checkout: tax/ship, adult signature notice, age verification gate
- Account: orders, profile, addresses, rewards, referrals
- Subscription: manage auto‑replenishment
- Content: FAQ, Shipping, Blog/Wiki, Policies

### 4.2 Admin
- Products: brands/categories/flavors, SKUs, price, stock
- Orders: status, fulfillment, refunds, age verification status
- Customers: profiles, points ledger, referrals
- Rewards: points rules, redemption settings
- Content: banners, homepage sections, articles
- Subscriptions: plans, cycles, retry/failed payments

## 5. Compliance & Risk
- Age verification: modal on entry + hard check at checkout
- Delivery: adult signature + ID check required
- Record retention: age verification logs and fulfillment proof

## 6. Rewards & Referral (Kissy‑aligned)
### 6.1 Rewards
- Earn points on purchase
- Earn points on reviews
- Points redeemable at checkout with caps

### 6.2 Referrals
- Invite friend: friend gets discount on first order
- Referrer gets points or credit after successful purchase

## 7. Subscription/Auto‑Replenishment
- Create subscription from product page or post‑purchase
- Supported intervals: 2 weeks, 1 month, 2 months
- Actions: pause, resume, cancel, change interval
- Payment: use PSP token for recurring charges
- Retry policy: 3 attempts, then auto‑pause + email notification

## 8. Data Model (Core Tables)
### Catalog
- brands
- categories
- flavors
- products (SPU)
- product_variants (SKU)
- inventory

### Commerce
- customers
- addresses
- carts
- cart_items
- orders
- order_items
- payments

### Compliance
- age_verifications
- shipment_proofs

### Rewards & Referral
- rewards_ledger
- rewards_rules
- referrals

### Subscription
- subscriptions
- subscription_items
- subscription_payments

## 9. API Surface (High‑level)
### Storefront
- GET /products, /products/:id
- GET /brands, /categories, /flavors
- POST /cart, /checkout
- POST /age‑verify
- POST /subscribe, PATCH /subscribe/:id

### Admin
- CRUD /products, /variants, /inventory
- CRUD /orders, /fulfillment
- CRUD /rewards, /referrals
- CRUD /content

## 10. Non‑functional Requirements
- Performance: SSR for key pages
- Security: PCI‑safe PSP integration (tokenized)
- Audit logs for compliance records

## 11. Detailed API & Data (MVP)
### 11.1 Storefront API (Detailed)
- `GET /products` filters: `brand_id`, `category_id`, `flavor_id`, `price_min`, `price_max`, `sort`, `page`, `page_size`
- `GET /products/:id` returns product + variants + flavor/nicotine options
- `GET /brands`, `GET /categories`, `GET /flavors`
- `POST /cart` create cart (guest or customer)
- `POST /cart/items` add/update item with `variant_id`, `qty`
- `POST /checkout` create order + payment intent
- `POST /age-verify` verify age token; persist audit record
- `POST /subscriptions` create subscription from `order_id` or `variant_id`
- `PATCH /subscriptions/:id` pause/resume/cancel/change interval

### 11.2 Admin API (Detailed)
- `CRUD /admin/products`
- `CRUD /admin/variants`
- `CRUD /admin/inventory`
- `CRUD /admin/orders` with fulfill/refund endpoints
- `CRUD /admin/rewards-rules`
- `CRUD /admin/referrals`
- `CRUD /admin/content`
- `CRUD /admin/subscriptions`

### 11.3 Data Tables (Fields)
#### `products`
- `id`, `name`, `brand_id`, `category_id`, `description`, `status`, `created_at`, `updated_at`

#### `product_variants`
- `id`, `product_id`, `flavor_id`, `nicotine_mg`, `size`, `sku`, `price`, `status`

#### `inventory`
- `id`, `variant_id`, `qty_available`, `qty_reserved`, `updated_at`

#### `orders`
- `id`, `customer_id`, `status`, `subtotal`, `tax`, `shipping`, `total`, `age_verified`, `created_at`

#### `payments`
- `id`, `order_id`, `provider`, `provider_ref`, `amount`, `status`, `created_at`

#### `age_verifications`
- `id`, `customer_id`, `order_id`, `provider`, `result`, `verified_at`, `raw_ref`

#### `rewards_ledger`
- `id`, `customer_id`, `type`, `points`, `reason`, `created_at`

#### `referrals`
- `id`, `referrer_id`, `referred_id`, `status`, `reward_granted_at`

#### `subscriptions`
- `id`, `customer_id`, `status`, `interval_days`, `next_billing_at`, `created_at`

#### `subscription_items`
- `id`, `subscription_id`, `variant_id`, `qty`

#### `subscription_payments`
- `id`, `subscription_id`, `provider_ref`, `amount`, `status`, `attempted_at`

## 12. Pages & Admin Menu (MVP)
### 12.1 Public Pages
- Home
- Catalog (brand/category)
- Product detail
- Cart
- Checkout
- Account: profile, orders, rewards, referrals, subscriptions
- FAQ / Shipping / Blog / Policies

### 12.2 Admin Menu
- Dashboard
- Products
- Inventory
- Orders
- Customers
- Rewards & Referrals
- Subscriptions
- Content

## 13. Admin Roles & Permissions (MVP)
### 13.1 Roles
- Super Admin (full access)
- Operations (orders, customers, refunds, subscriptions)
- Catalog Manager (products, inventory, content)
- Marketing (rewards, referrals, banners, articles)

### 13.2 Permissions Matrix (Summary)
- Products: Super Admin, Catalog Manager
- Inventory: Super Admin, Catalog Manager
- Orders: Super Admin, Operations
- Refunds: Super Admin, Operations
- Customers: Super Admin, Operations
- Rewards & Referrals: Super Admin, Marketing
- Subscriptions: Super Admin, Operations
- Content: Super Admin, Catalog Manager, Marketing
- Admin Users & Roles: Super Admin

## 14. Ops Workflow (Order to Fulfillment)
### 14.1 Order Lifecycle (Backoffice)
1. Order created (payment authorized)
2. Age verification status checked (auto or manual review)
3. Fraud/risk review (if flagged)
4. Fulfillment created
5. Carrier booking with adult signature + ID check
6. Shipment tracking updates synced
7. Delivered (proof captured)
8. Post‑delivery: rewards credited, referral rewards applied if eligible

### 14.2 Refund/Return Flow (MVP)
1. Customer request (or admin initiated)
2. Admin review and approve/deny
3. Payment refund issued
4. Points ledger adjusted (reversal)
5. Order status updated

## 15. MVP Milestones (4–6 weeks)
1. Week 1: IA + DB design + PSP/fulfillment integration plan
2. Week 2–3: Catalog + Admin + Frontend core pages
3. Week 4: Checkout + Rewards + Subscription
4. Week 5–6: Testing + data import + launch

## 16. Open Items (Need Confirmation)
- PSP API docs + test keys
- Shipping/fulfillment provider for adult signature + ID
- Exact rewards thresholds (points per $1, redemption caps)
- Subscription emails/notification copy


## 17. API Request/Response Examples (MVP)
### 17.1 List Products
`GET /products?brand_id=1&flavor_id=3&sort=price_asc&page=1&page_size=20`
Response:
```json
{
  "data": [
    {
      "id": "prod_123",
      "name": "Frozen Lab Device",
      "brand": {"id": "b_1", "name": "Frozen Lab"},
      "category": {"id": "c_2", "name": "Disposable"},
      "price_from": 14.99,
      "price_to": 18.99,
      "thumbnail_url": "https://cdn.example.com/p/123.jpg"
    }
  ],
  "page": 1,
  "page_size": 20,
  "total": 124
}
```

### 17.2 Product Detail
`GET /products/prod_123`
Response:
```json
{
  "id": "prod_123",
  "name": "Frozen Lab Device",
  "description": "...",
  "variants": [
    {
      "id": "sku_1",
      "flavor": {"id": "f_1", "name": "Mint"},
      "nicotine_mg": 50,
      "size": "18000 puffs",
      "price": 18.99,
      "stock": 120
    }
  ]
}
```

### 17.3 Create Cart
`POST /cart`
Request:
```json
{
  "customer_id": "cus_1"
}
```
Response:
```json
{
  "id": "cart_1",
  "items": [],
  "currency": "USD"
}
```

### 17.4 Add Cart Item
`POST /cart/items`
Request:
```json
{
  "cart_id": "cart_1",
  "variant_id": "sku_1",
  "qty": 2
}
```
Response:
```json
{
  "id": "cart_1",
  "items": [
    {
      "variant_id": "sku_1",
      "qty": 2,
      "unit_price": 18.99,
      "line_total": 37.98
    }
  ],
  "subtotal": 37.98
}
```

### 17.5 Age Verification
`POST /age-verify`
Request:
```json
{
  "customer_id": "cus_1",
  "provider": "veratad",
  "token": "verify_token"
}
```
Response:
```json
{
  "verified": true,
  "verified_at": "2026-02-04T10:15:00Z",
  "reference": "av_123"
}
```

### 17.6 Checkout
`POST /checkout`
Request:
```json
{
  "cart_id": "cart_1",
  "shipping_address_id": "addr_1",
  "billing_address_id": "addr_1",
  "adult_signature_required": true,
  "age_verification_ref": "av_123",
  "payment_method": "card",
  "payment_token": "psp_tok_123"
}
```
Response:
```json
{
  "order_id": "ord_1001",
  "status": "paid",
  "total": 45.89,
  "payment_ref": "pay_789"
}
```

### 17.7 Create Subscription
`POST /subscriptions`
Request:
```json
{
  "customer_id": "cus_1",
  "variant_id": "sku_1",
  "qty": 2,
  "interval_days": 30,
  "payment_token": "psp_tok_123"
}
```
Response:
```json
{
  "subscription_id": "sub_1",
  "status": "active",
  "next_billing_at": "2026-03-05T00:00:00Z"
}
```

### 17.8 Update Subscription
`PATCH /subscriptions/sub_1`
Request:
```json
{
  "action": "pause"
}
```
Response:
```json
{
  "subscription_id": "sub_1",
  "status": "paused"
}
```

### 17.9 Admin Fulfill Order
`POST /admin/orders/ord_1001/fulfill`
Request:
```json
{
  "carrier": "UPS",
  "tracking": "1Z999AA10123456784",
  "adult_signature": true,
  "id_check": true
}
```
Response:
```json
{
  "order_id": "ord_1001",
  "status": "shipped"
}
```


## 18. Error Codes & Response Conventions
### 18.1 Standard Error Envelope
```json
{
  "error": {
    "code": "AGE_VERIFICATION_FAILED",
    "message": "Age verification failed",
    "details": {"provider": "veratad"}
  }
}
```

### 18.2 Common Error Codes
- `VALIDATION_ERROR`: Request validation failed
- `NOT_FOUND`: Resource not found
- `UNAUTHORIZED`: Auth required or invalid token
- `FORBIDDEN`: Insufficient permissions
- `PAYMENT_FAILED`: PSP charge failed
- `AGE_VERIFICATION_FAILED`: Age check failed
- `OUT_OF_STOCK`: Inventory not available
- `SUBSCRIPTION_PAYMENT_FAILED`: Recurring charge failed
- `COMPLIANCE_BLOCKED`: Order blocked by compliance rules

### 18.3 HTTP Status Usage
- `400` validation, compliance block, age verification failure
- `401` authentication required
- `403` permission/role denied
- `404` resource not found
- `409` conflict (inventory or state)
- `422` domain rule violation (e.g., subscription interval not allowed)
- `500` unexpected server error


## 19. Auth & Authorization (MVP)
### 19.1 Auth Method
- Customer auth: JWT (access + refresh)
- Admin auth: JWT with role claims
- Token storage: HttpOnly cookie for web sessions

### 19.2 Roles
- `super_admin`, `operations`, `catalog_manager`, `marketing`

### 19.3 Route Protection
- Public: catalog, content, product details
- Auth required: cart checkout, orders, subscriptions, rewards, referrals
- Admin required: `/admin/*` routes

### 19.4 Permission Enforcement
- Role‑based access control (RBAC) at controller level
- Fine‑grained checks in service layer
- Audit logs for admin actions (create/update/refund)


## 20. Data Tables (Full Fields, Indexes, Constraints)
### 20.1 `brands`
- `id` (pk)
- `name` (unique)
- `slug` (unique)
- `status`
- `created_at`, `updated_at`
Indexes: `slug`

### 20.2 `categories`
- `id` (pk)
- `name`
- `slug` (unique)
- `parent_id` (nullable)
- `status`
- `created_at`, `updated_at`
Indexes: `slug`, `parent_id`

### 20.3 `flavors`
- `id` (pk)
- `name`
- `status`
- `created_at`, `updated_at`
Indexes: `name`

### 20.4 `products`
- `id` (pk)
- `brand_id` (fk -> brands)
- `category_id` (fk -> categories)
- `name`
- `slug` (unique)
- `description`
- `status`
- `created_at`, `updated_at`
Indexes: `brand_id`, `category_id`, `slug`

### 20.5 `product_variants`
- `id` (pk)
- `product_id` (fk -> products)
- `flavor_id` (fk -> flavors)
- `nicotine_mg` (int)
- `size` (text)
- `sku` (unique)
- `price` (decimal)
- `status`
- `created_at`, `updated_at`
Indexes: `product_id`, `flavor_id`, `sku`

### 20.6 `inventory`
- `id` (pk)
- `variant_id` (fk -> product_variants)
- `qty_available` (int)
- `qty_reserved` (int)
- `updated_at`
Indexes: `variant_id`

### 20.7 `customers`
- `id` (pk)
- `email` (unique)
- `password_hash` (nullable for SSO)
- `first_name`, `last_name`
- `phone`
- `status`
- `created_at`, `updated_at`
Indexes: `email`

### 20.8 `addresses`
- `id` (pk)
- `customer_id` (fk -> customers)
- `type` (shipping/billing)
- `line1`, `line2`, `city`, `state`, `postal_code`, `country`
- `created_at`, `updated_at`
Indexes: `customer_id`

### 20.9 `carts`
- `id` (pk)
- `customer_id` (nullable)
- `currency`
- `created_at`, `updated_at`
Indexes: `customer_id`

### 20.10 `cart_items`
- `id` (pk)
- `cart_id` (fk -> carts)
- `variant_id` (fk -> product_variants)
- `qty` (int)
- `created_at`, `updated_at`
Indexes: `cart_id`, `variant_id`

### 20.11 `orders`
- `id` (pk)
- `customer_id` (fk -> customers)
- `status` (created/paid/shipped/delivered/refunded/canceled)
- `subtotal`, `tax`, `shipping`, `total` (decimal)
- `age_verified` (bool)
- `adult_signature_required` (bool)
- `created_at`, `updated_at`
Indexes: `customer_id`, `status`

### 20.12 `order_items`
- `id` (pk)
- `order_id` (fk -> orders)
- `variant_id` (fk -> product_variants)
- `qty`, `unit_price`, `line_total`
Indexes: `order_id`, `variant_id`

### 20.13 `payments`
- `id` (pk)
- `order_id` (fk -> orders)
- `provider`, `provider_ref`
- `amount`, `status`
- `created_at`
Indexes: `order_id`, `provider_ref`

### 20.14 `age_verifications`
- `id` (pk)
- `customer_id` (fk -> customers)
- `order_id` (fk -> orders)
- `provider`, `result`, `raw_ref`
- `verified_at`
Indexes: `order_id`, `customer_id`

### 20.15 `shipment_proofs`
- `id` (pk)
- `order_id` (fk -> orders)
- `carrier`, `tracking`
- `adult_signature` (bool)
- `id_check` (bool)
- `delivered_at`
Indexes: `order_id`, `tracking`

### 20.16 `rewards_rules`
- `id` (pk)
- `type` (purchase/review/referral)
- `value` (points per $ or fixed)
- `enabled`
- `created_at`, `updated_at`
Indexes: `type`

### 20.17 `rewards_ledger`
- `id` (pk)
- `customer_id` (fk -> customers)
- `type` (earn/redeem/adjust)
- `points` (int)
- `reason`
- `created_at`
Indexes: `customer_id`

### 20.18 `referrals`
- `id` (pk)
- `referrer_id` (fk -> customers)
- `referred_id` (fk -> customers)
- `status` (pending/earned)
- `reward_granted_at`
Indexes: `referrer_id`, `referred_id`

### 20.19 `subscriptions`
- `id` (pk)
- `customer_id` (fk -> customers)
- `status` (active/paused/canceled)
- `interval_days` (int)
- `next_billing_at`
- `created_at`, `updated_at`
Indexes: `customer_id`, `status`

### 20.20 `subscription_items`
- `id` (pk)
- `subscription_id` (fk -> subscriptions)
- `variant_id` (fk -> product_variants)
- `qty`
Indexes: `subscription_id`, `variant_id`

### 20.21 `subscription_payments`
- `id` (pk)
- `subscription_id` (fk -> subscriptions)
- `provider_ref`
- `amount`, `status`
- `attempted_at`
Indexes: `subscription_id`, `provider_ref`


## 21. Auth Flows (Access/Refresh, Logout)
### 21.1 Customer Login
- `POST /auth/login` returns `access_token` (short‑lived) + `refresh_token` (long‑lived)
- Store in HttpOnly cookies

### 21.2 Token Refresh
- `POST /auth/refresh` rotates refresh token and returns new access token
- Reject if refresh token revoked or expired

### 21.3 Logout
- `POST /auth/logout` invalidates refresh token
- Clears auth cookies

### 21.4 Admin Login
- `POST /admin/auth/login` returns JWT with role claims
- Admin session stored in HttpOnly cookies


## 22. Admin Audit Logs (Structure)
### 22.1 `admin_audit_logs`
- `id` (pk)
- `admin_user_id`
- `action` (create/update/delete/refund/fulfill)
- `resource_type` (order/product/subscription/reward)
- `resource_id`
- `metadata` (json)
- `created_at`
Indexes: `admin_user_id`, `resource_type`
