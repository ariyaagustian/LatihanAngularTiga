import { Component, OnInit } from '@angular/core';
import {AnggotaService} from '../anggota.service';
import {AnggotaModel} from '../anggota.model';

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css'],
  providers: [AnggotaService]
})
export class AnggotaListComponent implements OnInit {

  constructor(private anggotaService: AnggotaService) { }

  anggotaList: AnggotaModel[];

  ngOnInit() {
    this.anggotaService.getListAnggota().subscribe(data => {
      // console.log(data);
      this.anggotaList = data;

    });
  }

}
