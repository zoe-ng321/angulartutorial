import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { GreetComponent } from './greet.component';
import { SimpleService } from '../simple.service';
import { FormsModule } from '@angular/forms';


describe('GreetComponent', () => {
  let component: GreetComponent;
  let fixture: ComponentFixture<GreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetComponent ],
      imports: [FormsModule],
      providers: [SimpleService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get greeting', () => {
    component.userName = "Daffy Duck"
    expect(component.getGreeting()).toBe("Hello Daffy Duck")
  })

  it('should handle state change', () => {
    component.userName = "Bob"
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Hello Bob')
  })

  it('should add numbers', () => {
    component.numberA = 10
    component.numberB = 20
    let button: DebugElement = fixture.debugElement.query(By.css("button"))
    button.triggerEventHandler("click", null)
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('div').textContent).toBe('30')
  })
});
