import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/Shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mobile-type',
  standalone: true,
  imports: [SharedModule,CommonModule, FormsModule,
      ReactiveFormsModule],
  templateUrl: './mobile-type.component.html',
  styleUrl: './mobile-type.component.css'
})
export class MobileTypeComponent {
Typelist : any[] = [];

constructor(private modal : NgbModal){

}
  addType(model){
  //  this.modal.open(model, { size: 'md', backdrop: 'static' });
  }
}
