import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export interface SSOToken {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

export function storeToken() {
  const { getItem, setItem, removeItem } = useAsyncStorage("tokens");

  const getToken = async () => {
    const tokensStringify = await getItem();
    return tokensStringify ? (JSON.parse(tokensStringify) as SSOToken) : null;
  };
  const setToken = async (tokens: SSOToken) =>
    await setItem(JSON.stringify(tokens));
  const removeToken = async () => await removeItem();

  return { getToken, setToken, removeToken };
}
