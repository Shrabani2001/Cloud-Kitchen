import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export const BASE_URL = 'http://localhost:1500/kitchen/becamepartner';

@Injectable({
  providedIn: 'root',
})
export class BecamePartnerService {
  http = inject(HttpClient);

  constructor() {}
  newPartner(becomeAPartner: any) {
    return this.http.post(BASE_URL + '/create', becomeAPartner);
  }
}
