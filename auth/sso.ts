// Import store reducer and exported type
import {
  AuthRequest,
  DiscoveryDocument,
  Prompt,
  ResponseType,
  exchangeCodeAsync,
  makeRedirectUri,
  revokeAsync,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { SSOToken, storeToken } from "./storeToken";
import AppConfig from "../app.json";
import uuid from "react-native-uuid";

WebBrowser.maybeCompleteAuthSession();
export async function handleLogin(discovery: DiscoveryDocument) {
  const clientId = "seasoning-client";
  const redirectUri = makeRedirectUri({
    scheme: AppConfig.expo.scheme,
    path: "/",
  });
  
  // Retrieve user state from store
  // const user = useSelector((state: RootState) => state.user);
  if (!discovery) return;
  // Create and load an auth request
  const authRequest = new AuthRequest({
    responseType: ResponseType.Code,
    clientId,
    redirectUri,
    prompt: Prompt.Login,
    scopes: ["openid", "profile"],
    state: uuid.v4().toString(),
  });

  const authSessionResult = await authRequest.promptAsync(discovery);

  if (authSessionResult.type === "success") {
    const { code } = authSessionResult.params;
    const tokenResponse = await exchangeCodeAsync(
      {
        code,
        clientId,
        redirectUri,
        extraParams: {
          code_verifier: authRequest.codeVerifier || "",
        },
      },
      discovery
    );
    if (!tokenResponse.idToken || !tokenResponse.refreshToken) return;
    const { setToken } = storeToken();
    await setToken({
      accessToken: tokenResponse.accessToken,
      idToken: tokenResponse.idToken,
      refreshToken: tokenResponse.refreshToken || "",
    });
    return tokenResponse;
  }
}

export async function handleLogout(
  discovery: DiscoveryDocument,
  token: SSOToken
) {
  const { removeToken } = storeToken();
  await Promise.all([
    await revokeAsync({ token: token.accessToken }, discovery),
    await removeToken(),
  ]);
}
