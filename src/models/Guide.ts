import { Section } from './Section';

export interface Guide {
  _id: string;
  title: string;
  sections: Array<Section>;
  tags: Array<any>;
}
