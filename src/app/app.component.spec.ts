import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App component', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('toogle button appears on screen', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#toogleHeaderBtn')?.textContent).toContain(
      'Toogle Header'
    );
  });
  it('when toogle btn is clicked the header appears', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    const btn = compiled.querySelector('#toogleHeaderBtn') as HTMLButtonElement;

    btn?.click();
    fixture.detectChanges();

    const header = compiled.querySelector('h1');
    expect(header).toBeTruthy();
  });
});
