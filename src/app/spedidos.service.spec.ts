import { TestBed } from '@angular/core/testing';

import { SpedidosService } from './spedidos.service';

describe('SpedidosService', () => {
  let service: SpedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
