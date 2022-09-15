import { Guide } from './Guide';

export interface Cookbook {
  _id: string;
  roles: any;
  streams: string[];
  name: 'string';
  banner_url: 'string';
  guides: string[];
}
