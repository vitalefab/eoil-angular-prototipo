import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contatti } from './pages/contatti/contatti';
import { ComeFunziona } from './pages/come-funziona/come-funziona';
import { AreaRiservata } from './pages/area-riservata/area-riservata';
import { Offerte } from './pages/offerte/offerte';
import { Privacy } from './pages/privacy/privacy';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contatti', component: Contatti },
    { path: 'come-funziona', component: ComeFunziona },
    { path: 'area-riservata', component: AreaRiservata },
    { path: 'offerte', component: Offerte },
    { path: 'privacy', component: Privacy },
    { path: '**', redirectTo: '' } // fallback

];
