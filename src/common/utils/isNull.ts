export const nullToString = (data: string | null | undefined) => {
  if (data === null || data === undefined) return '';
  return data.toString();
};

export const isNull = (data: any) => {
  if (data === null || data === undefined || data === '') return true;
  return false;
};
