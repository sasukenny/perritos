export type Input = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
  validFeedback: string;
  invalidFeedback: string;
  maxLength: number;
  minLength: number;
};

export type TextArea = {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  validFeedback: string;
  invalidFeedback: string;
  maxLength: number;
  minLength: number;
  rows: number;
};

export type Select = {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  validFeedback: string;
  invalidFeedback: string;
  options: {
    id: string;
    name: string;
  }[];
};
