import { Component, OnInit, EventEmitter, Output, HostListener, ViewChild } from '@angular/core';
import {NgForm, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss']
})

export class NewCardInputComponent implements OnInit {

  public newCard: any = {text: ""};
  newCardForm: FormGroup;

  @ViewChild("form") public form: NgForm;

  @Output() onCardAdd = new EventEmitter<string>();

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent){
    if(event.code === "Enter" && this.newCardForm.valid){
      this.addCard(this.newCardForm.controls["text"].value);
    }else{
      console.log(this.newCardForm.valid);
    }
  }

  addCard(text){
    this.onCardAdd.emit(text);
    this.newCardForm.controls["text"].setValue("");
  }

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      "text":["", Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  ngOnInit() {
  }

}
