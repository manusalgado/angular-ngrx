import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

// Routes
import heroesRoutes from './routes/heroes.routes';
import vehiclesRoutes from './routes/vehicles.routes';
import categoriesRoutes from './routes/categories.routes';

const app = express();

// Settings
app.set('port', 4000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(express.json());

// Routes
app.use('/api/heroes', heroesRoutes);
app.use('/api/vehicles', vehiclesRoutes);
app.use('/api/categories', categoriesRoutes);
app.all('*', (req, res) => {
    res.status(404)
      .json({ error: 'Request not found.' });
})

export default app;
