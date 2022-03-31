import { TestBed } from '@angular/core/testing';

import { MirageService } from './mirage.service';

describe('MirageService', () => {
    let service: MirageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MirageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
