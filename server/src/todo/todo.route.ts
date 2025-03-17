import { Router } from "express";
import { ToDoController } from "./todo.conroller";
const router = Router();

router.get('/', ToDoController.getToDos);
router.post('/', ToDoController.createToDo)
router.put('/id', ToDoController.updateToDo)
router.delete('/id', ToDoController.deleteToDo)


export const todoRoutes = router;