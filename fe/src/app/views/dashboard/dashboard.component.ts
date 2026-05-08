import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective,
  GutterDirective,
  RowComponent,
  RowDirective,
  TableDirective,
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { cilPlus, cilDelete, cilPencil, cilSearch, cilActionUndo } from '@coreui/icons';
import { TesseraModalCmpComponent } from './../../../components/modals/tessera-modal-cmp/tessera-modal-cmp.component';

// interface IUser {
//   name: string;
//   state: string;
//   registered: string;
//   country: string;
//   usage: number;
//   period: string;
//   payment: string;
//   activity: string;
//   avatar: string;
//   status: string;
//   color: string;
// }

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    IconDirective,
    ReactiveFormsModule,
    CardFooterComponent,
    GutterDirective,
    CardHeaderComponent,
    TableDirective,
    TesseraModalCmpComponent,
    FormControlDirective,
    FormDirective,
    FormLabelDirective,
    RowDirective,
    FormSelectDirective
  ]
})
export class DashboardComponent implements OnInit {

  icons = { cilPlus, cilDelete, cilPencil, cilActionUndo, cilSearch };

  isModalOpen = false;

  tessereData = [
    {
      idTessera: "0000090801",
      codTipoTessera: "D",
      sede: "RO",
      dataOraIndisponibilita: "10/11/1994 23:59:59",
      nome: "Luca",
      cognome: "Cropoli",
      codiceFiscale: "CRPLCU00L19A783Q",
      codiceInterno: "0005121205",
      dataOraInizioAssegnazione: "19/06/2024 06:00:00",
      dataOraFineAssegnazione: "31/12/9999 23:59:59",
      disuso: false
    },
    {
      idTessera: "0000090802",
      codTipoTessera: "D",
      sede: "001",
      dataOraIndisponibilita: "10/11/1994 23:59:59",
      nome: "Pluto",
      cognome: "ABC",
      codiceFiscale: "ABCD",
      codiceInterno: "ABCD",
      dataOraInizioAssegnazione: "10/11/1994",
      dataOraFineAssegnazione: "31/12/9999 23:59:59",
      disuso: false
    },
    {
      idTessera: "0000090803",
      codTipoTessera: "D",
      sede: "001",
      dataOraIndisponibilita: "10/11/1994 23:59:59",
      nome: "Pluto",
      cognome: "ABC",
      codiceFiscale: "ABCD",
      codiceInterno: "ABCD",
      dataOraInizioAssegnazione: "10/11/1994",
      dataOraFineAssegnazione: "31/12/9999 23:59:59",
      disuso: true
    },
    {
      idTessera: "0000090804",
      codTipoTessera: "",
      sede: "",
      dataOraIndisponibilita: "10/11/1994 23:59:59",
      nome: "",
      cognome: "",
      codiceFiscale: "",
      codiceInterno: "ABCD",
      dataOraInizioAssegnazione: "",
      dataOraFineAssegnazione: "",
      disuso: false
    },
  ];

  ngOnInit(): void {
  }


  openModal() {
    this.isModalOpen = true;
  }

  mapSede(codiceSede: string): string {
    let sediTradotte = {
      "AN": "ANCONA",
      "RO": "ROVIGO",
    }

    const value = sediTradotte[codiceSede as keyof typeof sediTradotte];
    return value;
  }

}
