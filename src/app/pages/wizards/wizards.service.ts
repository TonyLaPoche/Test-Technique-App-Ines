import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Wizard } from "../../models/wizard";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WizardsService {
  http = inject(HttpClient);
  private readonly url: string = environment.apiUrl;

  getCharacters(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(`${this.url}/characters/students`);
  }
}
