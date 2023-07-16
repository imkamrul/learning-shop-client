export const useTokenStore = () => {
  const setToken = (token: string) => {
    localStorage.setItem("token", JSON.stringify(token));
  };
  const getToken = (): string | null => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : null;
  };
  return { setToken, getToken };
};
