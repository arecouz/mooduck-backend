# 🐮 MooDuck Backend 🦆
🚧 **Progress: Laying foundations** 🚧

This is the backend for the MooDuck app — a mood-tracking service that both sends and receives emails to engage users in regular emotional check-ins. Users receive daily or weekly prompts asking how they’re feeling, and their email replies are automatically processed and stored in Supabase. This backend manages email handling, data processing, and serves mood data to the frontend for visualization and user interaction.

## 🚀 Tech Stack
- **Node.js** with **TypeScript**
- **Express 5**
- **Supabase** (PostgreSQL + auth)
- **Postmark** for email delivery
## 📜 Scripts\n\
| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start dev server with nodemon     |
| `npm run start` | Start production server           |
## 🛠 Setup
1. Clone the repo  
   ```bash
   git clone https://github.com/arecouz/mooduck-backend.git
   cd backend
   ```
2. Install dependencies  
   ```bash
   npm install
   ```
3. Create a `.env` file  
   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_KEY=your-service-role-key
   POSTMARK_API_TOKEN=your-postmark-api-token
   ```
4. Start the server  
   ```bash\n\
   npm run dev
   ```
---
🐮 moo.
