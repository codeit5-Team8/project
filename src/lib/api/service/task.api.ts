import {
  TDeleteTaskRequest,
  TDeleteTaskResponse,
  TGetTaskDetailRequest,
  TGetTaskDetailResponse,
  TGetTaskProgressResponse,
  TGetTaskRequest,
  TGetTaskResponse,
  TPostAddTaskResponse,
  TPutEditTaskResponse,
  TTask,
} from '@model/task.model';
import { get, post, put, del } from '../axios';
import { TResponse } from '@model/model';

export const getTask = async (data: TGetTaskRequest) => {
  const { tripId, taskSeq, taskStatus, taskScope, all } = data;

  const queryString = new URLSearchParams({
    tripId: tripId.toString(),
    taskSeq: taskSeq.toString(),
    ...(taskStatus ? { taskStatus } : {}),
    ...(taskScope ? { taskScope } : {}),
    all: all.toString(),
  }).toString();

  const response = await get<TResponse<TGetTaskResponse>>(
    `/api/v1/torip/task?${queryString}`,
  );
  return response.data;
};

export const putEditTask = async (data: TTask) => {
  const response = await put<TResponse<TPutEditTaskResponse>>(
    '/api/v1/torip/task',
    data,
  );
  return response.data;
};

export const postAddTask = async (data: TTask) => {
  const response = await post<TResponse<TPostAddTaskResponse>>(
    '/api/v1/torip/task',
    data,
  );
  return response.data;
};

export const getTaskDetail = async (data: TGetTaskDetailRequest) => {
  const response = await get<TResponse<TGetTaskDetailResponse>>(
    `/api/v1/torip/task?taskId=${data.taskId}`,
  );
  return response.data;
};

export const deleteTask = async (data: TDeleteTaskRequest) => {
  const response = await del<TResponse<TDeleteTaskResponse>>(
    `/api/v1/torip/task?taskId=${data.taskId}`,
  );
  return response.data;
};

export const getTaskProgress = async () => {
  const response = await get<TResponse<TGetTaskProgressResponse>>(
    '/api/v1/torip/task/progress',
  );
  return response.data;
};
