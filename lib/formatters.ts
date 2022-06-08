import formatDuration from "format-duration";

export const formatTime = (timeInSeconds = 0) => {
  return formatDuration(timeInSeconds * 1000);
};


export const formatDate = (date) => {
  // date no viene como objeto Date -> ver comentarios en [id].tsx
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
