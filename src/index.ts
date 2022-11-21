import  express from 'express';
import router from './routes/diaries';
const app = express();
app.use(express.json());
app.use('/api/diaries',router)

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('ping pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});