export const setProxySettings = (proxyConfig) => {
  chrome.proxy.settings.set(
    {
      value: {
        mode: "fixed_servers",
        rules: {
          singleProxy: {
            scheme: proxyConfig.scheme,
            host: proxyConfig.host,
            port: parseInt(proxyConfig.port),
          },
          bypassList: ["localhost"],
        },
      },
      scope: "regular",
    },
    () => {
      console.log("Proxy settings applied");
    }
  );
  // {Native Messaging Approach}
  //   chrome.runtime.sendNativeMessage("native-app-id", { message: "setProxy" },
  //   (res) => {
  //     console.log("Proxy settings applied via native app:", res);
  //   });
};

var proxyConfig = {
  scheme: "http",
  host: "proxy.example.com",
  port: "8080",
};
// setProxySettings(proxyConfig);
