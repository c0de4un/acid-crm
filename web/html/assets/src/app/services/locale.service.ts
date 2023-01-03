import { Injectable } from '@angular/core';
import { EnLocale } from "../configs/locale/en";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private _locale: string = 'en'

  private _packs: Map<string, Map<string, string>> = new Map<string, Map<string, string>>([
    ['en', EnLocale]
  ])

  private get pack(): Map<string, string> {
    return this._packs.get(this._locale) || EnLocale
  }

  translate(key: string): string {
    return this.pack.get(key) || key
  }
}
