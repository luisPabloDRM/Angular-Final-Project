/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TuberiaService } from './tuberia.service';

describe('Service: Tuberia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuberiaService]
    });
  });

  it('should ...', inject([TuberiaService], (service: TuberiaService) => {
    expect(service).toBeTruthy();
  }));
});
