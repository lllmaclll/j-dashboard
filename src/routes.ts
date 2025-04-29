import { route, index, RouteConfig } from "@react-router/dev/routes";

export default [
    index('@src/pages/HomePage.tsx'),
    route('air', '@src/pages/AirPage.tsx'),
    route('air-room', '@src/pages/AirRoomPage.tsx'),
    route('gold', '@src/pages/GoldPage.tsx'),
    route('plug', '@src/pages/PlugPage.tsx'),
] satisfies RouteConfig;
