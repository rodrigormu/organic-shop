import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsNavbarComponent } from './bs-navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '../../../node_modules/@angular/core';

describe('BsNavbarComponent', () => {
  let component: BsNavbarComponent;
  let fixture: ComponentFixture<BsNavbarComponent>;
  let routerElements: DebugElement[];
  let routerLinks: RouterLinkWithHref[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ BsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    routerElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    routerLinks = routerElements.map(debugElement => debugElement.injector.get(RouterLinkWithHref));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to Home', () => {
    expect(routerLinks.filter(routerLinkElement => routerLinkElement.routerLink === '/')).not.toBeNull();
  });

  it('should have a link to Shopping Cart', () => {
    expect(routerLinks.filter(routerLinkElement => routerLinkElement.routerLink === '/shopping-cart')).not.toBeNull();
  });

  it('should have a link to Login', () => {
    expect(routerLinks.filter(routerLinkElement => routerLinkElement.routerLink === '/login')).not.toBeNull();
  });

  it('should have a link to User Orders', () => {
    expect(routerLinks.filter(routerLinkElement => routerLinkElement.routerLink === '/my/orders')).not.toBeNull();
  });

  it('should have a link to Manage Orders', () => {
    expect(routerLinks.filter(routerLinkElement => routerLinkElement.routerLink === 'admin/orders')).not.toBeNull();
  });

  it('should have a link to Manage Products', () => {
    expect(routerLinks.filter(routerLinkElement => routerLinkElement.routerLink === 'admin/products')).not.toBeNull();
  });
});
