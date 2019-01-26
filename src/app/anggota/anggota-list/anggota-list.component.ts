import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {AnggotaService} from '../anggota.service';
import {AnggotaModel} from '../anggota.model';

@Component({
  selector: 'app-anggota-list',
  templateUrl: './anggota-list.component.html',
  styleUrls: ['./anggota-list.component.css'],
  providers: [AnggotaService]
})
export class AnggotaListComponent implements OnInit, OnChanges {

  constructor(private anggotaService: AnggotaService) { }

  @Input() childListen: string;
  @Output() dariChildParent = new EventEmitter<string>();
  anggotaList: AnggotaModel[];

  ngOnInit() {
    this.anggotaService.getListAnggota().subscribe(data => {
      // console.log(data);
      this.anggotaList = data;

    });
  }
  ngOnChanges() {
    this.ngOnInit();
  }
  showname(id) {
    this.dariChildParent.emit(id);
  }

}
