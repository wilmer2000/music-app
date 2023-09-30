import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSectionComponent } from './artist-section.component';

describe('ArtistSectionComponent', () => {
    let component: ArtistSectionComponent;
    let fixture: ComponentFixture<ArtistSectionComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ArtistSectionComponent],
        });
        fixture = TestBed.createComponent(ArtistSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
