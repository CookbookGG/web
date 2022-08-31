import { SectionModel } from './Section';

export interface Guide {
  _id: string;
  title: string;
  sections: Array<SectionModel>;
  tags: Array<any>;
}
