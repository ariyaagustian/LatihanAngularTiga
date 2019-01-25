import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BukuComponent} from './buku/buku.component';
import {AnggotaComponent} from './anggota/anggota.component';
import {AnggotaAddComponent} from './anggota/anggota-add/anggota-add.component';

const routes: Routes = [
  {path: 'buku', component: BukuComponent},
  {path: 'anggota', component: AnggotaComponent},
  {path: 'anggota-edit/:id', component: AnggotaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
