// Import store reducer and exported type
import {
  AuthRequest,
  DiscoveryDocument,
  ResponseType,
  exchangeCodeAsync,
  makeRedirectUri,
} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { storeToken } from "./storeToken";
import AppConfig from "../app.json";

WebBrowser.maybeCompleteAuthSession();

export async function handleLogin(discovery: DiscoveryDocument) {
  const clientId = "seasoning-client";
  const redirectUri = makeRedirectUri({
    scheme: AppConfig.expo.scheme,
  });
  // Retrieve user state from store
  // const user = useSelector((state: RootState) => state.user);
  if (!discovery) return;
  // Create and load an auth request
  const authRequest = new AuthRequest({
    responseType: ResponseType.Code,
    clientId,
    redirectUri,
    scopes: ["openid", "profile"],
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
    if (!tokenResponse.idToken) return;
    const { setToken } = storeToken();
    await setToken({
      accessToken: tokenResponse.accessToken,
      idToken: tokenResponse.idToken,
      refreshToken: tokenResponse.refreshToken,
    });
    // Only for tests purposes, needs to be verified by spring security
    // Autorization
    return 200;
  }
}
