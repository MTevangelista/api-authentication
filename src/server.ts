import dotenv from 'dotenv';
import app from './app';

const PORT = 3333;

dotenv.config();

app.listen(3333, () => console.log(`Server is running on http://localhost:${PORT}`));
