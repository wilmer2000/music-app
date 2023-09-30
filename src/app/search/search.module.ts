import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
    declarations: [SearchSectionComponent],
    imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
