import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnChanges {
  @Input() notes: string[] = [];  // Accept notes as input

  ngOnInit(): void {
    this.loadNotes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['notes']) {
      // Save notes to localStorage whenever it is updated
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }

  loadNotes(): void {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }
}
