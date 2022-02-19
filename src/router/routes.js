import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/:match(.*)",
    component: NotFound
  }
];
export default routes;
