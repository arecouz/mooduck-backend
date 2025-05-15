# 🐄 MooDuck Backend 
🚧 **Progress: Email + Inbound Handling MVP** 🚧

This is the backend for the MooDuck app — a mood-tracking app that sends users regular emails asking how they’re feeling. The backend handles sending those emails, processing user replies via Postmark inbound webhooks, parsing moods with OpenAI, and storing data in Supabase for reflection and analysis.

🦆 [**MooDuck Frontend**](https://github.com/arecouz/mooduck-frontend)

---

## 🚀 Tech Stack
- **Node.js**
- **Express**
- **Supabase (Service Role API)**
- **Postmark (email + inbound webhooks)**
- **OpenAI (for mood extraction)**
- **node-cron** (for scheduled emails)

## 🛠 Setup

1. **Clone the repo**  
   \`\`\`bash
   git clone https://github.com/arecouz/mooduck-backend.git
   cd mooduck-backend
   \`\`\`

2. **Install dependencies**  
   \`\`\`bash
   npm i
   \`\`\`

3. **Set up your \`.env\` file**  
   Create a \`.env\` file in the root with the following keys:

   \`\`\`env
   SUPABASE_URL=your-supabase-url
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   POSTMARK_API_TOKEN=your-postmark-token
   OPENAI_API_KEY=your-openai-key
   \`\`\`

4. **Run the server**  
   \`\`\`bash
   npm run dev
   \`\`\`

5. **(Optional) Start cron job scheduler**  
   \`\`\`bash
   node cron.js
   \`\`\`

---

🐄 moo.
