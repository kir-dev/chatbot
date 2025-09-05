import axios from 'axios';
import useSWR from 'swr';
import { User } from '../types/user';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetcher = (url: string) => api.get(`${url}`).then((res: { data: User }) => res.data);

export default function useUser(userId: number): {
  data: User | undefined;
  isLoading: boolean;
  mutate: () => void;
  error: unknown;
} {
  return useSWR<User>(`/user/${userId}`, fetcher);
}
