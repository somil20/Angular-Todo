import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesComponent } from './notes/notes.component';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [ReactiveFormsModule, NotesComponent],
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  noteForm: FormGroup;
  notes: string[] = [];  // Notes array to bind to NotesComponent

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.noteForm = this.fb.group({
      noteContent: ['']
    });
  }

  ngOnInit(): void {
    this.loadNotes();
  }

  saveNote(): void {
    const noteContent = this.noteForm.get('noteContent')?.value;
    if (noteContent) {
      this.notes.push(noteContent);  // Add new note to notes array
      localStorage.setItem('notes', JSON.stringify(this.notes));  // Save notes to localStorage
      this.snackBar.open('Note saved!', 'Close', { duration: 3000 });
      this.noteForm.reset();  // Reset form
    }
  }

  loadNotes(): void {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }

  clearNote(): void {
    this.noteForm.reset();
    localStorage.removeItem('notes');
    this.snackBar.open('Note cleared!', 'Close', { duration: 3000 });
  }
}
