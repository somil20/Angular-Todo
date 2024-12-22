import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notepad',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  noteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      noteContent: ['']
    });
  }

  ngOnInit(): void {
    this.loadNote();
  }

  saveNote(): void {
    const noteContent = this.noteForm.get('noteContent')?.value;
    localStorage.setItem('note', noteContent);
    alert('Note saved!');
  }

  clearNote(): void {
    this.noteForm.reset();
    localStorage.removeItem('note');
    alert('Note cleared!');
  }

  loadNote(): void {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
      this.noteForm.patchValue({
        noteContent: savedNote
      });
    }
  }
}
