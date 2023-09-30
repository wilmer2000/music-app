import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistSectionComponent } from './components/artist-section/artist-section.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistRoutingModule } from './artist-routing.module';

@NgModule({
    declarations: [ArtistSectionComponent],
    imports: [CommonModule, HttpClientModule, ArtistRoutingModule],
})
export class ArtistModule {}
