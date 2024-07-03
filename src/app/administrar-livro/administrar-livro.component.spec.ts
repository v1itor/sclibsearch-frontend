import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarLivroComponent } from './administrar-livro.component';

describe('AdministrarLivroComponent', () => {
  let component: AdministrarLivroComponent;
  let fixture: ComponentFixture<AdministrarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarLivroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
