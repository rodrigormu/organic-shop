import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

describe('routes', () => {
    it('should contain a route for \'\'', () => {
        expect(routes).toContain({ path: '', component: HomeComponent});
    });
    it('should contain a route for products', () => {
        expect(routes).toContain({ path: 'products', component: ProductsComponent});
    });
    it('should contain a route for shopping-cart', () => {
        expect(routes).toContain({ path: 'shopping-cart', component: ShoppingCartComponent});
    });
    it('should contain a route for check-out', () => {
        expect(routes).toContain({ path: 'check-out', component: CheckOutComponent});
    });
    it('should contain a route for order-success', () => {
        expect(routes).toContain({ path: 'order-success', component: OrderSuccessComponent});
    });
    it('should contain a route for my/orders', () => {
        expect(routes).toContain({ path: 'my/orders', component: MyOrdersComponent});
    });
    it('should contain a route for login', () => {
        expect(routes).toContain({ path: 'login', component: LoginComponent});
    });
    it('should contain a route for admin/products', () => {
        expect(routes).toContain({ path: 'admin/products', component: AdminProductsComponent});
    });
    it('should contain a route for admin/orders', () => {
        expect(routes).toContain({ path: 'admin/orders', component: AdminOrdersComponent});
    });
});
