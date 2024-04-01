export type Idea = {
  id: string;
  title: string;
  desc: string;
  created: Date;
  updated?: Date;
};

export type Inputs = {
  title: string;
  desc: string;
};