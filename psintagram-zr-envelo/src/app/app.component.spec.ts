import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DogsService } from './services/dogs.service';

describe('AppComponent', () => {
  let service: DogsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [DogsService],
      declarations: [AppComponent],
    }).compileComponents();

    service = TestBed.inject(DogsService);
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAllBreeds function', () => {
    expect(service.getAllBreeds).toBeTruthy();
  });
});
