import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ArabigoRomanoComponent } from './arabigo-romano.component';

describe('ArabigoRomanoComponent', () => {
  let component: ArabigoRomanoComponent;
  let fixture: ComponentFixture<ArabigoRomanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ArabigoRomanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabigoRomanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
