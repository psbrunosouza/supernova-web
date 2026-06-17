import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Input } from './input';

@Component({
  imports: [ReactiveFormsModule, Input],
  template: `
    <form [formGroup]="form">
      <nova-input
        formControlName="email"
        label="Email"
        placeholder="Digite seu email"
      ></nova-input>
    </form>
  `,
})
class HostComponent {
  readonly form;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}

describe('Input', () => {
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should show invalid on blur and valid after correcting the value', async () => {
    const emailControl = fixture.componentInstance.form.controls.email;
    const wrapper: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    await fixture.whenStable();

    expect(wrapper.className).toContain('ring-error');

    input.value = 'user@example.com';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    expect(emailControl.valid).toBe(true);
    expect(wrapper.className).not.toContain('ring-error');
    expect(wrapper.className).toContain('ring-success');
  });
});
