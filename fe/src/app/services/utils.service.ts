import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONSTANTS } from '../../constants/api.constants';
import { Tessera } from '../../interfaces/tessere';
import { TESSERE_STATUS_COLORS, TESSERE_STATUS_MESSAGES } from '../../constants/tessere-status.constants';
import { SelectOption } from 'src/states/sedi-state.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  private http = inject(HttpClient);

  private apiUrl = API_CONSTANTS.BASE_URL;

  getCodiceFromSedeDesc(sediList: any, sedeDesc: string) {
    let found = sediList.filter((item:any) => item.label === sedeDesc);
    if(found.length > 0) {
      return found[0].value
    }
    return null;
  }

  getStampaWord(body: any): Observable<HttpResponse<Blob>> {
    return this.http.post(
      `${this.apiUrl}/generaDocumentoBadgeServlet`,
      body,
      {
        observe: 'response',
        responseType: 'blob'
      }
    );
  }

  getStampaPDF(body: any): Observable<HttpResponse<Blob>> {
    return this.http.post(
      `${this.apiUrl}/generaPdfBadgeServlet`,
      body,
      {
        observe: 'response',
        responseType: 'blob'
      }
    );
  }

  formatDateString(dateString: string): string {
    if (!dateString) {
      return '';
    }

    // Parse the date
    const date = new Date(dateString);

    // Check if valid
    if (isNaN(date.getTime())) {
      return '';
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  getCurrentDateTime(): string {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  parseItalianDate(value?: any): any {
    if (!value?.trim()) {
      return null;
    }

    try {
      const [datePart, timePart = '00:00:00'] = value.split(' ');

      const [day, month, year] = datePart.split('/').map(Number);
      const [hours, minutes, seconds] = timePart.split(':').map(Number);

      if (
        !day ||
        !month ||
        !year ||
        Number.isNaN(day) ||
        Number.isNaN(month) ||
        Number.isNaN(year)
      ) {
        return null;
      }

      return new Date(
        year,
        month - 1,
        day,
        hours || 0,
        minutes || 0,
        seconds || 0
      );
    } catch {
      return null;
    }
  }

  getStatusColor(row: Tessera) {
    if (row) {
      switch (row.stato) {
        case TESSERE_STATUS_MESSAGES.INDISPONIBILE:
          return TESSERE_STATUS_COLORS.INDISPONIBILE;
        case TESSERE_STATUS_MESSAGES.OCCUPATA:
          return TESSERE_STATUS_COLORS.OCCUPATA;
        case TESSERE_STATUS_MESSAGES.LIBERA:
          return TESSERE_STATUS_COLORS.LIBERA;

        default:
          return TESSERE_STATUS_COLORS.ND
      }
    }
    return TESSERE_STATUS_COLORS.ND;
  }

  getStatusTooltip(row: Tessera) {
    if (row) {
      switch (row.stato) {
        case TESSERE_STATUS_MESSAGES.INDISPONIBILE:
          return TESSERE_STATUS_MESSAGES.INDISPONIBILE_DESC;
        case TESSERE_STATUS_MESSAGES.OCCUPATA:
          return TESSERE_STATUS_MESSAGES.OCCUPATA_DESC;
        case TESSERE_STATUS_MESSAGES.LIBERA:
          return TESSERE_STATUS_MESSAGES.LIBERA_DESC;

        default:
          return TESSERE_STATUS_MESSAGES.ND_DESC;
      }
    }
    return TESSERE_STATUS_COLORS.ND;

  }


}
