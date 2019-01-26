import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnggotaModel} from '../anggota.model';
import {AnggotaService} from '../anggota.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-anggota-add',
  templateUrl: './anggota-add.component.html',
  styleUrls: ['./anggota-add.component.css'],
  providers: [AnggotaService]
})
export class AnggotaAddComponent implements OnInit {

  @Output() anggotaAdd = new EventEmitter<AnggotaModel>();
  @Input() anggotaEdit: string;
  anggotaForm: FormGroup;
  private idx: string;
  private sub: Subscription;
  parentTalk: string;

  constructor(private anggotaService: AnggotaService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.idx = params['id'];
    });
    this.anggotaForm = new FormGroup({
      nama: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      nomor_ktp: new FormControl(null, [Validators.required, this.cekIsEmpty]),
      alamat: new FormControl(null, [Validators.required])
    });
  }


  ngOnInit() {
    if (this.idx) {
      this.anggotaService.getAnggota(this.idx).subscribe(data => {
        console.log(data + this.idx);
        this.anggotaForm = new FormGroup({
          nomor_ktp: new FormControl(data.nomor_ktp, [Validators.required]),
          alamat: new FormControl(data.alamat, []),
          nama: new FormControl(data.nama, [Validators.required])
        });
      });
    } else {
      this.anggotaForm = new FormGroup({
        nomor_ktp: new FormControl(null, [Validators.required]),
        alamat: new FormControl(null, []),
        nama: new FormControl(null, [Validators.required])
      });
    }
  }

  addAnggota() {
    const anggotaModel = new AnggotaModel();
    anggotaModel.nama = this.anggotaForm.get('nama').value;
    anggotaModel.nomor_ktp = this.anggotaForm.get('nomor_ktp').value;
    anggotaModel.alamat = this.anggotaForm.get('alamat').value;
    console.log(anggotaModel);
    this.anggotaAdd.emit(anggotaModel);
    if  (!this.idx) {
    this.anggotaService.tambahAnggota(anggotaModel).subscribe(data => {
      alert(data.nama + ' berhasil disimpan dengan ID ' + data.id);
      this.parentTalk = data.id;
      });
    } else {
      anggotaModel.id = this.idx;
      this.anggotaService.tambahAnggota(anggotaModel).subscribe(data => {
        alert(data.nama + ' berhasil DiUpdate dengan ID ' + data.id);
        this.parentTalk = data.id;
      });
    }
    this.anggotaForm.reset();
  }

  cekIsEmpty(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.trim().length === 0) {
      return {'blank': true};
    }return null;
  }

  onAnggotaEdit(id: string) {
    this.idx = id;
    this.ngOnInit();
  }
}
