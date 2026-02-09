import app from './app.js';
import setupSwagger from './swagger.js';

const PORT = process.env.PORT || 3000;
setupSwagger(app);

app.listen(PORT, function() {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Вы можете открыть в браузере: http://localhost:${PORT}`);
});
