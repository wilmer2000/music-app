import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistSectionComponent } from './components/artist-section/artist-section.component';

const routes: Routes = [{ path: '', component: ArtistSectionComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArtistRoutingModule {}
