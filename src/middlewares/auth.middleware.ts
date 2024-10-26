import { Request, Response, NextFunction } from 'express'; // Importamos tipos necesarios de Express
import { User } from '../models/user.model'; // Asegúrate de que esta ruta sea correcta

// Extender la interfaz Request de Express
declare global {
  namespace Express {
    interface Request {
      user?: User; // Añadir la propiedad 'user' para almacenar información del usuario autenticado
    }
  }
}

// Middleware para verificar el rol del usuario
// CAMBIO FUTURO: Si decides implementar nuevos roles, actualiza la lógica aquí.
export const verifyRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Verificar si el usuario está presente y si su rol está en la lista de roles permitidos
    if (!req.user || !roles.includes(req.user.role)) {
      return res.sendStatus(403); // Responder con un error de acceso prohibido
    }
    next(); // Continuar con el siguiente middleware o controlador
  };
};
