export const getLang = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") as any;
  } else {
    return "ru";
  }
};
