import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call sayHello', () => {
    let name = 'Bob'
    let greeting = service.sayHello(name)
    expect(greeting).toBe(`Hello ${name}`)
  })

  it('should add numbers', () => {
    service.addNumbers(3, 4).subscribe(
      (result) => {
        expect(result).toBe(7)
      })
  })
});
