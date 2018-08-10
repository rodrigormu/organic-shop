import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '../../node_modules/@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BsNavbarComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should have a bs-navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const element = fixture.debugElement.query(By.directive(BsNavbarComponent));

    expect(element).not.toBeNull();
  });
  it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const element = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(element).not.toBeNull();
  });
});
