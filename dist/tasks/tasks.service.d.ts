import { CreateTastDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './dto/task.entity';
import { TasksRepository } from './dto/tasks.repository';
import { TaskStatus } from './task-status.enum';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTaskById(id: string): Promise<Task>;
    createTask(createTaskDto: CreateTastDto): Promise<Task>;
    deleteTask(id: string): Promise<void>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<Task>;
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
}
