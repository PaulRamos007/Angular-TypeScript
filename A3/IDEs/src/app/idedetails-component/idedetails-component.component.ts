import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDE } from '../models/ide';
import { IDEService } from '../services/ide.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-idedetails-component',
  templateUrl: './idedetails-component.component.html',
  styleUrls: ['./idedetails-component.component.css'],
})
export class IDEDetailsComponentComponent implements OnInit {
  constructor(private ideService: IDEService, private route: ActivatedRoute) {}

  public ide: IDE = new IDE();
  public displayForm: boolean;
  public currentYear: number;
  public message: string;
  public savedMessage: string;
  public isValidFormSubmitted: boolean;

  ngOnInit(): void {}

  public onFormSubmit(form: NgForm): void {
    this.message = '';
    this.savedMessage = '';
    this.isValidFormSubmitted = false;

    if (form.invalid) {
      return;
    }

    this.ide = form.value;

    this.ideService.createIDE(this.ide).subscribe((id) => {
      if (id > 0) {
        this.savedMessage = `IDE Saved with ID: ${id}.`;
        this.ide = new IDE();
        form.resetForm();
        this.isValidFormSubmitted = true;
      } else {
        this.message = 'An error occured in creating IDE';
      }
    });

    this.ideService.saveIDE(this.ide).subscribe((id) => {
      if (id) {
        this.savedMessage = `IDE Saved with ID: ${id}.`;
        form.resetForm();
        this.isValidFormSubmitted = true;
      } else {
        this.message = 'An error occured in saving IDE';
      }
    });
  }
}
