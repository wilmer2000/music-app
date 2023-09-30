import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSectionComponent } from './components/search-section/search-section.component';

const routes: Routes = [{ path: '', component: SearchSectionComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SearchRoutingModule {}
