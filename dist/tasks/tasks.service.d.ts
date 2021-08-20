import { CreateTastDto } from './dto/create-task.dto';
import { Task } from './task.model';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDto: CreateTastDto): Task;
}
