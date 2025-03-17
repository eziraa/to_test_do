import 'dotenv/config';
import { connectToMongoDB } from './db.connection';
import { createApp } from './app';

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectToMongoDB();
    const app = createApp();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
}

startServer();
