// views/change-user-settings/change-user-settings.component.ts

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserSettingsService } from './../../../services/user-settings.service';

import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  GutterDirective,
  RowComponent,
  RowDirective
} from '@coreui/angular';


@Component({
  selector: 'app-change-user-settings',
  standalone: true,
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    FormDirective,
    FormControlDirective,
    ButtonDirective,
    GutterDirective,
    RowDirective
  ]
})
export class UserSettingsComponent implements OnInit {
  private fb = inject(FormBuilder);
  private userSettingsService = inject(UserSettingsService);

  loading = false;
  saving = false;
  disabled = true;

  selectedImage: File | null = null;
  imagePreview: string | null = null;

  form = this.fb.group({
    email: ['', []],
    ruolo: ['', []],
    dataCreazione: ['', []],
  });

  ngOnInit(): void {
    this.loadUserSettings();
    this.form.controls.email.disable({ emitEvent: false });
    this.form.controls.ruolo.disable({ emitEvent: false });
    this.form.controls.dataCreazione.disable({ emitEvent: false });
  }

  loadUserSettings(): void {
    this.loading = true;

    this.userSettingsService.getUserSettings().subscribe({
      next: user => {
        this.form.patchValue({
          email: user.email
        });

        this.imagePreview = user.imageUrl ?? null;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.selectedImage = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };

    reader.readAsDataURL(this.selectedImage);
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving = true;

    const { email } = this.form.getRawValue();

    this.userSettingsService
      .updateUserSettings(email!, this.selectedImage)
      .subscribe({
        next: user => {
          this.form.patchValue({
            email: user.email
          });

          this.imagePreview = user.imageUrl ?? this.imagePreview;
          this.selectedImage = null;
          this.saving = false;
        },
        error: () => {
          this.saving = false;
        }
      });
  }
}
