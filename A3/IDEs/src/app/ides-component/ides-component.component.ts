import { Component, OnInit } from '@angular/core';
import { IDE } from '../models/ide';
import { IDEService } from '../services/ide.service';

@Component({
  selector: 'app-ides-component',
  templateUrl: './ides-component.component.html',
  styleUrls: ['./ides-component.component.css'],
})
export class IDEsComponentComponent implements OnInit {
  ides: IDE[];
  message: string;
  searchPhrase: string;

  constructor(private ideService: IDEService) {}

  ngOnInit(): void {
    this.getIDEs();
  }

  private getIDEs() {
    this.ideService.getIDEs().subscribe((ide) => {
      this.ides = ide;

      if (this.ides.length == 0) {
        this.message = 'No IDE found';
      }
    });
  }

  public search() {
    if (this.searchPhrase != '') {
      this.ideService.search(this.searchPhrase).subscribe((result) => {
        if (result) {
          this.ides = result;
          this.message = `${this.ides.length} ${
            this.ides.length == 1 ? 'result' : 'results'
          } were found from search ${this.searchPhrase}`;
        } else {
          this.message = `No customers were found: ${this.searchPhrase}`;
        }
      });
    }
  }
}
