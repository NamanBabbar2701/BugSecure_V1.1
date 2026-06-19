# BugSecure — Bug Bounty & Code Testing Platform

BugSecure is a full-stack bug bounty platform that connects **companies** with **security researchers**. Companies upload code for testing; researchers find vulnerabilities and earn rewards based on severity.

---

## Features

| Role | Capabilities |
|------|--------------|
| **Company** | Upload code, set rewards, manage bug reports, approve/reject vulnerabilities |
| **Researcher** | Browse projects, submit bug reports, track rewards and history |
| **Admin** | Manage users, submissions, reports, analytics, and platform activity |

**Highlights:** JWT authentication, role-based access (USER / COMPANY / ADMIN), wallet & payments, Docker sandbox execution, HTTP testing panel, currency conversion, notifications.

---

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Backend** | Spring Boot 3.5, Spring Security, JWT, MongoDB, Maven, Java 17 |
| **Frontend** | React 19, React Router, Tailwind CSS, Axios, Framer Motion, Recharts |
| **Sandbox** | Docker, Python security scanner |

---

## Repository Structure

```
BugSecure_V1.1/
├── .gitignore                  # Root ignore rules (builds, env, uploads)
├── README.md                   # This file
│
├── backend/                    # Spring Boot API server
│   ├── .gitattributes
│   ├── .gitignore
│   ├── mvnw / mvnw.cmd         # Maven wrapper scripts
│   ├── pom.xml                 # Maven dependencies & build config
│   ├── sandbox/                # Docker sandbox runner assets
│   ├── sandbox_workdir/        # Runtime sandbox packaging (gitignored contents)
│   ├── secure_uploads/         # Runtime file storage (gitignored contents)
│   └── src/
│       ├── main/java/...       # Application source code
│       ├── main/resources/     # application.properties
│       └── test/java/...       # Smoke tests
│
├── frontend/                   # React single-page application
│   ├── .env.example            # API URL template (copy to .env)
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── public/                 # Static assets served as-is
│   └── src/                    # React components, pages, services
│
└── Reports/                    # Project documentation & research papers
```

---

## Complete File Reference

### Root

| File | Description |
|------|-------------|
| `.gitignore` | Excludes `node_modules`, build outputs, `.env`, runtime uploads, and IDE files from version control |
| `README.md` | Project overview, setup guide, and file documentation |

---

### `Reports/` — Documentation Assets

| File | Description |
|------|-------------|
| `BugSecure_Report.docx` | Main project report document |
| `BugSecure Research Paper.docx` | Research paper (Word format) |
| `BugSecure Research Paper.pdf` | Research paper (PDF) |
| `BugSecure Research Paper IEEE format (1).pdf` | IEEE-formatted research paper |
| `BugSecure Secure_Crowdsourcing_Platform_for_Bug_Bounties .pptx` | Presentation slides for the platform |

---

### `backend/` — Build & Config

| File | Description |
|------|-------------|
| `.env.example` | Template for `MONGODB_URI`, `JWT_SECRET`, `PORT` — copy to `backend/.env` (gitignored) |
| `pom.xml` | Maven project definition: Spring Boot 3.5.7, MongoDB, Security, JWT, mail, validation |
| `mvnw` | Unix Maven wrapper — run builds without a global Maven install |
| `mvnw.cmd` | Windows Maven wrapper |
| `.gitattributes` | Git line-ending normalization for cross-platform builds |
| `.gitignore` | Ignores `target/`, IDE files, and Maven wrapper JAR |
| `.mvn/wrapper/maven-wrapper.properties` | Maven wrapper version configuration |

---

### `backend/sandbox/` — Isolated Code Execution

| File | Description |
|------|-------------|
| `Dockerfile.sandbox-runner` | Docker image definition for running submitted code in an isolated container |
| `security_scan.py` | Python script that scans packaged submissions for common security issues |

---

### `backend/sandbox_workdir/` & `backend/secure_uploads/`

| Path | Description |
|------|-------------|
| `sandbox_workdir/.gitkeep` | Placeholder so the directory exists in git; runtime sandbox packages are written here |
| `secure_uploads/.gitkeep` | Placeholder for uploaded code submissions and test execution files (contents are gitignored) |

---

### `backend/src/main/resources/`

| File | Description |
|------|-------------|
| `application.properties` | Server config via env vars (`MONGODB_URI`, `JWT_SECRET`, `PORT`); sandbox/Docker and FX settings |

---

### `backend/src/main/java/com/bugsecure/backend/` — Entry Point

| File | Description |
|------|-------------|
| `BugSecureBackendApplication.java` | Spring Boot main class — starts the API server |

---

### `backend/.../bootstrap/`

| File | Description |
|------|-------------|
| `AdminSeeder.java` | Seeds default admin accounts on startup if they do not already exist |

---

### `backend/.../config/` — Security & Infrastructure

| File | Description |
|------|-------------|
| `CorsConfig.java` | Cross-origin resource sharing rules for the React frontend |
| `JwtAuthenticationEntryPoint.java` | Returns 401 responses for unauthenticated API access |
| `JwtAuthenticationFilter.java` | Intercepts requests, validates JWT tokens, sets security context |
| `JwtUtil.java` | Generates and parses JWT tokens (signing, expiry, claims) |
| `MongoConfig.java` | MongoDB connection and indexing configuration |
| `SecurityConfig.java` | Spring Security filter chain, password encoder, endpoint authorization rules |

---

### `backend/.../controller/` — REST API Endpoints

| File | Description |
|------|-------------|
| `AdminController.java` | Admin-only: user management, platform stats, moderation |
| `AnalyticsController.java` | Dashboard analytics and chart data |
| `BugReportAttachmentController.java` | Upload/download attachments on bug reports |
| `BugReportController.java` | Create, list, update status of bug reports |
| `CodeSubmissionController.java` | Company code submission CRUD and file uploads |
| `ContractController.java` | Researcher participation contracts for submissions |
| `CurrencyController.java` | Live currency exchange rates for reward display |
| `DashboardController.java` | Role-specific dashboard summary data |
| `HttpTestingController.java` | HTTP request builder: send, save, and replay test cases |
| `LoginController.java` | User login and JWT token issuance |
| `NotificationController.java` | In-app notifications (list, mark read) |
| `PasswordResetController.java` | Forgot-password and reset-token flow |
| `PaymentController.java` | Payment records and payout tracking |
| `ProfileController.java` | User profile read/update, avatar, account settings |
| `SandboxController.java` | Create and manage sandbox sessions for code testing |
| `SandboxExecutionController.java` | Trigger and poll Docker sandbox code executions |
| `TestExecutionController.java` | Run vulnerability tests against submissions |
| `UserController.java` | User registration and account operations |
| `VulnerabilityTestController.java` | Manage automated vulnerability test definitions |
| `WalletController.java` | Wallet balance, transactions, and withdrawals |

---

### `backend/.../dto/` — Data Transfer Objects

| File | Description |
|------|-------------|
| `AnalyticsDTO.java` | Analytics response shape for charts and KPIs |
| `BugReportDTO.java` | Bug report request/response payload |
| `CodeSubmissionDTO.java` | Code submission request/response payload |
| `NotificationDTO.java` | Notification message payload |
| `PaymentDTO.java` | Payment record payload |
| `SandboxSessionDTO.java` | Sandbox session state for the frontend |
| `UserDTO.java` | User profile and registration payload |
| `WalletDTO.java` | Wallet balance and transaction history payload |

---

### `backend/.../model/` — MongoDB Documents

| File | Description |
|------|-------------|
| `BugReport.java` | Bug report entity (severity, status, reward, researcher) |
| `BugReportAttachment.java` | File attachment metadata linked to a bug report |
| `CodeSubmission.java` | Company code submission (title, reward, status, files) |
| `HttpRequestLog.java` | Logged HTTP request/response from the testing panel |
| `HttpTestCase.java` | Saved HTTP test case (method, URL, headers, body) |
| `Notification.java` | In-app notification for a user |
| `PasswordResetToken.java` | Time-limited token for password reset |
| `Payment.java` | Payment/payout record between company and researcher |
| `SandboxExecution.java` | Docker sandbox run result (stdout, exit code, timing) |
| `SandboxSession.java` | Active sandbox session (port, TTL, submission link) |
| `SubmissionFile.java` | Uploaded file metadata for a code submission |
| `TestExecution.java` | Result of an automated vulnerability test run |
| `User.java` | User account (email, role, wallet, profile fields) |
| `VulnerabilityTest.java` | Definition of an automated security test |
| `WalletTransaction.java` | Credit/debit ledger entry for a user wallet |

---

### `backend/.../repository/` — Data Access Layer

| File | Description |
|------|-------------|
| `BugReportAttachmentRepository.java` | MongoDB queries for bug report attachments |
| `BugReportRepository.java` | MongoDB queries for bug reports |
| `CodeSubmissionRepository.java` | MongoDB queries for code submissions |
| `HttpRequestLogRepository.java` | MongoDB queries for HTTP request logs |
| `HttpTestCaseRepository.java` | MongoDB queries for saved HTTP test cases |
| `NotificationRepository.java` | MongoDB queries for notifications |
| `PasswordResetTokenRepository.java` | MongoDB queries for reset tokens |
| `PaymentRepository.java` | MongoDB queries for payments |
| `SandboxExecutionRepository.java` | MongoDB queries for sandbox executions |
| `SandboxSessionRepository.java` | MongoDB queries for sandbox sessions |
| `SubmissionFileRepository.java` | MongoDB queries for submission files |
| `TestExecutionRepository.java` | MongoDB queries for test executions |
| `UserRepository.java` | MongoDB queries for users |
| `VulnerabilityTestRepository.java` | MongoDB queries for vulnerability tests |
| `WalletTransactionRepository.java` | MongoDB queries for wallet transactions |

---

### `backend/.../service/` — Business Logic

| File | Description |
|------|-------------|
| `AccountDeletionService.java` | Cascading delete of user data and uploaded files |
| `AnalyticsService.java` | Aggregates stats for admin and company dashboards |
| `BugReportAttachmentService.java` | Stores and serves bug report file attachments |
| `BugReportService.java` | Bug report lifecycle, reward calculation, pagination |
| `CodeSubmissionService.java` | Submission CRUD, file handling, status transitions |
| `CurrencyConversionService.java` | Converts reward amounts between currencies |
| `CurrencyRateService.java` | Fetches and caches FX rates from external API |
| `DockerCliExecutor.java` | Low-level Docker CLI command runner |
| `DockerSandboxService.java` | Manages Docker container lifecycle for sandboxes |
| `NotificationService.java` | Creates and delivers in-app notifications |
| `PasswordResetService.java` | Generates reset tokens and updates passwords |
| `PaymentService.java` | Records and processes platform payments |
| `SafeHttpRequestService.java` | Sends HTTP requests from the testing panel with safety limits |
| `SandboxExecutionService.java` | Orchestrates Docker-based code execution |
| `SandboxPackagingService.java` | Packages submission files for sandbox runs |
| `SandboxService.java` | Sandbox session creation, port allocation, TTL management |
| `SandboxSessionCleanupScheduler.java` | Scheduled job to stop expired sandbox containers |
| `SecureLocalFileStorageService.java` | Encrypted local storage for uploaded files |
| `TestExecutionService.java` | Runs vulnerability tests against submissions |
| `UserDetailsServiceImpl.java` | Spring Security user lookup by email |
| `UserService.java` | Registration, profile updates, role management |
| `VulnerabilityTestService.java` | CRUD and execution of vulnerability test definitions |
| `WalletService.java` | Wallet credits, debits, and transaction history |

---

### `backend/src/test/java/.../`

| File | Description |
|------|-------------|
| `BugSecureBackendApplicationTests.java` | Spring context load smoke test |

---

### `frontend/` — Build Config

| File | Description |
|------|-------------|
| `package.json` | NPM dependencies and scripts (`start`, `build`, `test`) |
| `package-lock.json` | Locked dependency versions for reproducible installs |
| `postcss.config.js` | PostCSS pipeline for Tailwind CSS |
| `tailwind.config.js` | Tailwind theme, content paths, and plugins |
| `.env.example` | Template for `REACT_APP_API_URL` — copy to `.env` before running |

---

### `frontend/public/` — Static Assets

| File | Description |
|------|-------------|
| `index.html` | HTML shell; React mounts into `#root` |
| `favicon.ico` | Browser tab icon |
| `logo192.png` | PWA icon (192×192) |
| `logo512.png` | PWA icon (512×512) |
| `manifest.json` | Web app manifest for installable PWA metadata |
| `robots.txt` | Search engine crawl rules |

---

### `frontend/src/` — Application Root

| File | Description |
|------|-------------|
| `index.js` | React entry point; renders `<App />` into the DOM |
| `index.css` | Global Tailwind directives and base styles |
| `App.js` | Router setup, route definitions, page transitions |
| `App.css` | App-level CSS overrides |

---

### `frontend/src/pages/` — Route Pages

| File | Description |
|------|-------------|
| `Home.js` | Landing page with platform overview |
| `AboutUs.js` | About the BugSecure platform |
| `ContactUs.js` | Contact form and support information |
| `ForgotPasswordPage.js` | Password reset request and token entry |
| `CompanyDashboard.js` | Company view: submissions, bug reports, analytics |
| `ResearcherDashboard.js` | Researcher view: available bounties, submissions, rewards |
| `AdminDashboard.js` | Admin panel: users, stats, platform management |
| `ProfilePage.js` | User profile editing, avatar, account deletion |
| `PaymentsPage.js` | Payment history and payout status |
| `SandboxEnvironment.js` | Live sandbox preview for a submission |
| `TestingPanel.js` | HTTP testing panel (Burp-style request builder) |
| `BugSubmissionPage.js` | Bug report submission form for a specific bounty |

---

### `frontend/src/components/` — Reusable UI

| File | Description |
|------|-------------|
| `Navbar.js` | Top navigation bar with auth-aware links |
| `LoginForm.js` | Email/password login form |
| `RegisterForm.js` | User registration with role selection |
| `Dashboard.js` | Routes authenticated users to the correct role dashboard |
| `CodeSubmissionForm.js` | Company form to create/edit code submissions |
| `BugSubmissionForm.js` | Researcher form to submit a bug report with attachments |
| `SubmissionList.js` | Paginated list of code submissions |
| `EnhancedFileUpload.js` | Drag-and-drop multi-file upload widget |
| `AnalyticsCharts.js` | Recharts-based dashboard charts |
| `NotificationsWidget.js` | Notification bell and dropdown list |
| `Wallet.js` | Wallet balance and transaction display |
| `MemojiAvatarPicker.js` | Avatar selection for user profiles |
| `SectionCard.js` | Styled card wrapper for dashboard sections |
| `Input.js` | Reusable text input component |
| `Textarea.js` | Reusable textarea component |
| `CheckboxGroup.js` | Multi-select checkbox group |
| `Toast.js` | Toast notification popup |

---

### `frontend/src/components/testingPanel/` — HTTP Testing Tools

| File | Description |
|------|-------------|
| `RequestBuilder.js` | HTTP method, URL, headers, and body editor |
| `KeyValueEditor.js` | Key-value pair editor for headers and query params |
| `BodyEditor.js` | Request body editor (raw JSON, form data) |
| `PayloadPanel.js` | Common attack payload library (XSS, SQLi, etc.) |
| `ResponseViewer.js` | Displays HTTP response status, headers, and body |
| `ResponseAnalyzer.js` | UI wrapper for automated response analysis |
| `response-analysis.js` | Heuristics to flag suspicious response patterns |
| `HistoryPanel.js` | Saved and recent HTTP request history |

---

### `frontend/src/services/` — API Client Layer

| File | Description |
|------|-------------|
| `api.js` | Axios instance with JWT interceptor and base URL from env |
| `AuthService.js` | Login, register, logout, and token storage helpers |

---

### `frontend/src/utils/`

| File | Description |
|------|-------------|
| `currency.js` | FX rate fetching and locale-aware currency formatting |

---

## Installation & Setup

### Prerequisites

- Java 17+
- Node.js 18+
- MongoDB (local or Atlas)
- Maven (or use the included `mvnw` wrapper)
- Docker (optional, for sandbox execution)

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd BugSecure_V1.1
```

### 2. Configure backend environment variables

```bash
cd backend
copy .env.example .env   # Windows
# cp .env.example .env   # Linux/macOS
```

Edit `backend/.env`:

```properties
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bugsecure
JWT_SECRET=your-long-random-secret-key-here
PORT=8080
```

Or export them in your shell / IDE instead of using a `.env` file.

### 3. Configure the frontend

```bash
cd frontend
cp .env.example .env
```

Set `REACT_APP_API_URL` to your backend URL (use your LAN IP for mobile testing):

```
REACT_APP_API_URL=http://localhost:8080
```

### 4. Start MongoDB

Ensure MongoDB is running locally, or update the URI to your Atlas cluster.

### 5. Run the backend

```bash
cd backend
./mvnw spring-boot:run        # Linux / macOS
mvnw.cmd spring-boot:run      # Windows
```

API: **http://localhost:8080**

### 6. Run the frontend

```bash
cd frontend
npm install
npm start
```

App: **http://localhost:3000**

---

## Authentication Flow

1. User registers with a role (USER, COMPANY, or ADMIN).
2. Login returns a JWT token stored in `localStorage`.
3. All API requests include `Authorization: Bearer <token>`.
4. Spring Security enforces role-based access on protected endpoints.

---

## API Overview

| Area | Endpoints |
|------|-----------|
| **Auth** | `POST /api/auth/login`, `POST /api/users/register` |
| **Submissions** | `GET/POST/PUT /api/submissions` |
| **Bug Reports** | `POST /api/bug-reports`, `GET /api/bug-reports/my-reports`, `PUT /api/bug-reports/{id}/status` |
| **Admin** | `GET /api/admin/users`, `GET /api/admin/stats` |
| **Wallet** | `GET /api/wallet`, `POST /api/wallet/withdraw` |
| **Sandbox** | `POST /api/sandbox/sessions`, `POST /api/sandbox/executions` |

---

## Reward System

| Severity | Reward |
|----------|--------|
| CRITICAL | 100% |
| HIGH | 75% |
| MEDIUM | 50% |
| LOW | 25% |

---

## Database Collections

`users` · `code_submissions` · `bug_reports` · `payments` · `submission_files` · `wallet_transactions` · `notifications` · `sandbox_sessions` · `sandbox_executions` · `http_test_cases` · `http_request_logs`

---

## Mobile Access

Use your machine's local IP instead of `localhost`:

```
http://YOUR-IP:3000
```

Set `REACT_APP_API_URL=http://YOUR-IP:8080` in `frontend/.env`.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| MongoDB connection error | Verify MongoDB is running and `MONGODB_URI` is set in `backend/.env` or your environment |
| Port already in use | Change `server.port` (backend) or set `PORT=3001` (frontend) |
| API not reachable from phone | Use LAN IP in `.env`, check firewall rules |
| Sandbox fails | Ensure Docker is installed and `sandbox.docker.image` is built |

---

## What Is Not Committed (by design)

The following are excluded via `.gitignore` and recreated at runtime:

- `node_modules/` — install with `npm install`
- `backend/target/` — build with Maven
- `frontend/build/` — build with `npm run build`
- `frontend/.env` — copy from `.env.example`
- `backend/.env` — copy from `backend/.env.example` (`MONGODB_URI`, `JWT_SECRET`, `PORT`)
- `backend/secure_uploads/*` — user-uploaded files
- `backend/sandbox_workdir/*` — temporary sandbox packages

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-change`)
3. Commit your changes
4. Push and open a Pull Request

---

## Author

**Goutam Patel**

---

## License

See project author for licensing terms.
