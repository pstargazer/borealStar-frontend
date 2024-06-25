const routes = [
    {
        path: "/",
        name: "home",
        component: ()=> import('../views/DashboardView.vue'),
        meta: {
            title: "BorealStar",
        },
    },
    {
        path: "/error",
        name: "error",
        component: () => import("../views/ErrorView.vue"),
        meta: {
            title: "Ошибка",
        },
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
        meta: {
            title: "О нас",
        },
    },
    {
        path: "/login",
        name: "login",
        component: () => import("/src/views/Auth/LoginView.vue"),
        meta: {
            title: "Вход",
        },
    },
    {
        path: "/register",
        name: "register",
        component: () => import("/src/views/Auth/RegisterView.vue"),
        meta: {
            title: "Регистрация",
        },
    },
    {
        path: "/spots",
        name: "spots",
        component: () => import("/src/views/Spot/IndexView.vue"),
        meta: {
            title: "Отслеживаемые точки",
        },
    },
    {
        path: "/spot/:id",
        name: "spot_single",
        component: () => import("/src/views/Spot/SingleView.vue"),
        meta: {
            title: "Точка отслеживания",
        },
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("/src/views/ProfileView.vue"),
        meta: {
            title: "Профиль",
        },
    },
    {
        path: "/spot/create",
        name: "new_spot",
        component: () => import("/src/views/Spot/CreateView.vue"),
        meta: {
            title: "Создание",
        },
    }
];

export default routes;
