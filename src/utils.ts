export const dateStringToDate = (dateString: string): Date =>{
  const dateParts:number[] = dateString
  .split('/')
  .map((date: string): number => parseInt(date));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}