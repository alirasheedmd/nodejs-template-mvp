import { Request, Response } from 'express';

export const getUsers = (_req: Request, res: Response): void => {
  res.json({ users: [] });
};

export const createUser = (req: Request, res: Response): void => {
  const { name } = req.body;
  res.status(201).json({ id: 1, name });
};
