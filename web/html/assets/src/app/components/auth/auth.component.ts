import { Component } from '@angular/core';
import { LocaleService } from "../../services/locale.service";

@Component({
  selector: 'acid-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  host: { 'class': 'flex flex-col h-full justify-center mt-6 w-full' }
})
export class AuthComponent {
  constructor(
    public localeService: LocaleService
  ) {
  }
}
