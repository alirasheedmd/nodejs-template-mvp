import express, { Request, Response, NextFunction } from 'express';
import config from './config.js';
import userRoutes from './routes/users.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Root endpoint
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API', version: '1.0.0' });
});

// API routes
app.use('/api/users', userRoutes);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const main = async (): Promise<void> => {
  app.listen(config.app.port, () => {
    console.info(`🚀 Server running on http://localhost:${config.app.port}`);
    console.info(`Environment: ${config.env}`);
  });
};

main().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
