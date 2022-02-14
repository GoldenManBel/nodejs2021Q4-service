import OrmTask from './task.model';
import tasksRepo from './task.repository';

/**
 * Intermediate function
 * Called function getTasksAll(return array tasks)
 * @returns the results work function getTasksAll, (array tasks)
 */
const getTasksAllService = async (): Promise<object> =>
  await tasksRepo.getTasksAll();

/**
 * Intermediate function
 * Called function getTaskId with argument taskId(return object task)
 * @param taskID -first argument ID task
 * @returns the result work function getTaskId, (object task)
 */
const getTaskIdService = async (taskId: string): Promise<object | undefined> =>
  await tasksRepo.getTaskId(taskId);

/**
 * Intermediate function
 * Called function addTask with argument task(add new task in array tasks)
 * @param task -first argument new task
 * @returns void
 */
const addTaskService = async (task: OrmTask) => {
  await tasksRepo.addTask(task);
};

/**
 * Intermediate function
 * Called function updateTask with arguments taskId and updTask(update object task with ID task equal taskID)
 * @param taskID -first argument ID task
 * @param updTask -second argument object update task(updTask)
 * @returns void
 */
const updateTaskService = async (taskId: string, updTask: OrmTask) => {
  await tasksRepo.updateTask(taskId, updTask);
};

/**
 * Intermediate function
 * Called function deleteTask with argument taskId(delete object task with ID task equal taskID)
 * @param taskID -first argument ID task
 * @returns void
 */
const deleteTaskService = async (taskId: string) => {
  await tasksRepo.deleteTask(taskId);
};

export default {
  getTasksAllService,
  getTaskIdService,
  addTaskService,
  deleteTaskService,
  updateTaskService,
};
