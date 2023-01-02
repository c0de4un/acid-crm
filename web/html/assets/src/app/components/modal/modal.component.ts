import { Component, Input } from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'acid-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = 'Title'

  constructor(public modalService: ModalService) {
  }
}
