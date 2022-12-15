export const refreshKey = (value) => {
    localStorage.removeItem("location");
    localStorage.setItem("location", JSON.stringify(value));
};
