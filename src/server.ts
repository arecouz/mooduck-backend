import express from 'express';
import cron from 'node-cron'

const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

cron.schedule('* * * * *', () => console.log('hello'))

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

