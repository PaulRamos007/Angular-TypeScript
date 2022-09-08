import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  noteToAdd: string = '';
  notes: string[] = [];

  addNote(): void {}
}
