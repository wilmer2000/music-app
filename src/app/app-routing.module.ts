import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'search', loadChildren: () => import('./search/search.module').then((m) => m.SearchModule) },
            { path: 'artist', loadChildren: () => import('./artist/artist.module').then((m) => m.ArtistModule) },
        ],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
