import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BukuComponent} from './buku/buku.component';
import {AnggotaComponent} from './anggota/anggota.component';
import {AnggotaAddComponent} from './anggota/anggota-add/anggota-add.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth/auth-guard.service';

const routes: Routes = [
  {path: 'buku', component: BukuComponent, canActivate: [AuthGuardService]},
  {path: 'anggota', component: AnggotaComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent},
  {path: 'anggota-add', component: AnggotaAddComponent, canActivate: [AuthGuardService]},
  {path: 'anggota-edit/:id', component: AnggotaAddComponent, canActivate: [AuthGuardService]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
