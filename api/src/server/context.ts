import { getDataBase } from '../infrastructure/db';

export type Context = ReturnType<typeof contextFunction>;

export const contextFunction = ({ event, context }: any) => ({
  headers: event.headers,
  functionName: context.functionName,
  event,
  context,
  ...getDataBase(),
});
