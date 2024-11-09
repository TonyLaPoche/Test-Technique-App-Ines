import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {Wizard} from "../../../models/wizard";

@Injectable({
  providedIn: 'root'
})
export class WizardDetailsService {
  http = inject(HttpClient);
  private readonly  url = environment.apiUrl;

  getWizardDetailsById(id: string): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(`${this.url}/character/${id}`);
  }
}
