export const useTokenStore = () => {
  const setToken = (token: string) => {
    localStorage.setItem("token", JSON.stringify(token));
  };
  const getToken = (): string | null => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  };
  const removeToken = () => {
    localStorage.removeItem("token");
  };
  return { setToken, getToken, removeToken };
};
