// utils/matchPath.js
const matchPath = (path, route) => {
  const pathSegments = path.split("/");
  const routeSegments = route.split("/");

  if (pathSegments.length !== routeSegments.length) {
    return null;
  }

  const params = {};
  for (let i = 0; i < routeSegments.length; i++) {
    if (routeSegments[i].startsWith(":")) {
      const paramName = routeSegments[i].slice(1);
      params[paramName] = pathSegments[i];
    } else if (routeSegments[i] !== pathSegments[i]) {
      return null;
    }
  }

  return params;
};

export default matchPath;
