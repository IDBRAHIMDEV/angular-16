import { Tag } from './tag';
import { Category } from './category';

export interface Article {
  id?: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  created_at: Date;
  published_at: Date;
  rating: number;
  active: boolean;
  category: Category;
  tags: Tag[];
}
