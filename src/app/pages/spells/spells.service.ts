import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Spell} from "../../models/spell";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SpellsService {
    http = inject(HttpClient);
    private readonly url: string = 'https://hp-api.onrender.com/api/spells'

    getSpells(): Observable<Spell[]> {
        return this.http.get<Spell[]>(this.url);
    }
}
