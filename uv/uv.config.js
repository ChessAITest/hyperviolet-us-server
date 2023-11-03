// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/hyperviolet-us-server/uv/service/",
  bare: "https://zgl3jk-8080.csb.app/outerspace/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/hyperviolet/uv/uv.handler.js",
  client: "/hyperviolet/uv/uv.client.js",
  bundle: "/hyperviolet/uv/uv.bundle.js",
  config: "/hyperviolet/uv/uv.config.js",
  sw: "/hyperviolet/uv/uv.sw.js",
};
