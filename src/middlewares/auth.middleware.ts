import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model'; // Asegúrate de que esta ruta sea correcta

// Extender la interfaz Request
declare global {
  namespace Express {
    interface Request {
      user?: User; // Añadir la propiedad 'user'
    }
  }
}

// Middleware para verificar el rol del usuario 
export const verifyRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.sendStatus(403);
    }
    next();
  };
};
