import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './utils/error-handler/error-middleware.ts';
import cookieParser from 'cookie-parser';
import router from './routes/auth.router.ts';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load swagger JSON safely
const swaggerPath = path.join(__dirname, 'swagger-output.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: ['http://localhost:3000'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true,
  })
);



// Routes
app.use('/api', router);
// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/docs-json', (req, res) => {
  res.json(swaggerDocument);
});
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API hu' });
});

const server = app.listen(port, host, () => {
  console.log(`Auth service is running at http://${host}:${port}/api`);
  console.log(`Swagger docs available at http://${host}:${port}/api-docs`);
});

server.on('error', (error) => {
  console.log('Server Error:', error);
});
