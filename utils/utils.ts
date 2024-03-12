export const formatDateMoment = (date: string) => {
  const parts = date?.split("-");
  const formattedDate = `${parts[2] && parts[2]}.${parts[1] && parts[1]}.${parts[0] && parts[0]}`;
  return formattedDate;
  //   console.log(formattedDate);
};
