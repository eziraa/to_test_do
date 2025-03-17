import express ,{Request, Response}from "express";
import cors from "cors"
import path from "path";
import cookieParser from "cookie-parser"
import { todoRoutes } from "./todo/todo.route";
export function createApp() {
    const app = express();
  
    app.use(
      cors({
        origin: true,
        credentials: true,
      })
    );
  
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    
  
    // Serving static files
    app.use(express.static(path.resolve(__dirname, `./../public`)));
  
    // test route
    app.use('/test', (req, res) => {
      res.status(200).json({ message: 'Hello World' });
    });
  
    // Routes
    app.use('/api/v1/todos', todoRoutes);
  
    app.all('*', (req: Request, res: Response) => {
      res.status(404).json({
        message: `Can't find ${req.originalUrl} on this server!`,
      });
    });
  
    return app;
  }