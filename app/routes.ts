import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/region.tsx"),
  route("/countries", "routes/home.tsx"),
  route("/game/", "routes/game.tsx"),
  route("/review", "routes/countries.tsx"),
] satisfies RouteConfig;
