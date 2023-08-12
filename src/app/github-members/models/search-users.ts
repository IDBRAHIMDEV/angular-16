import { User } from './user';
export interface SearchUsers {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
