import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Spell} from "../../models/spell";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SpellsService {
    http = inject(HttpClient);
    private readonly url: string = environment.apiUrl;

    getSpells(): Observable<Spell[]> {
        return this.http.get<Spell[]>(`${this.url}/spells`);
    }
}
