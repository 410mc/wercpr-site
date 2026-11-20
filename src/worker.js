// Redirect the apex to www, serve everything else from static assets.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "wercpr.com") {
      url.hostname = "www.wercpr.com";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
