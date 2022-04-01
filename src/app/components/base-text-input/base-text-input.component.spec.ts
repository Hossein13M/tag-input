import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTextInputComponent } from './base-text-input.component';

describe('BaseTextInputComponent', () => {
    let component: BaseTextInputComponent;
    let fixture: ComponentFixture<BaseTextInputComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BaseTextInputComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BaseTextInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
