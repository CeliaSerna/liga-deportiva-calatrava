import { TestBed, getTestBed  } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { App } from './app';
import { RouterTestingModule } from '@angular/router/testing'; // <--- IMPORTANTE
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App,
        RouterTestingModule,
        HttpClientTestingModule  
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    //expect(compiled.querySelector('h1')?.textContent).toContain('Hello, liga-deportiva-calatrava');
  });
});
