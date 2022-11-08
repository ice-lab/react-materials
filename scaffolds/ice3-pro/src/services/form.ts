import { request } from 'ice';

export async function submitForm(data: Record<string, any>) {
  return await request.post('/form/submit', data);
}
