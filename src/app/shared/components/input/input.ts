import { booleanAttribute, Component, computed, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { inputContainerVariants, inputVariants } from './input.variants';

@Component({
  selector: 'nova-input',
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input implements ControlValueAccessor {
  private readonly ngControl = inject(NgControl, {
    self: true,
    optional: true,
  });

  placeholder = input.required<string>();

  label = input<string>('');

  disabled = input(false, {
    transform: booleanAttribute,
  });

  _disabled = signal(false);

  value = signal('');

  touched = signal(false);

  private readonly validationStateVersion = signal(0);

  isDisabled = computed(() => this.disabled() || this._disabled());

  invalid = computed(() => {
    this.validationStateVersion();
    const control = this.ngControl?.control;
    return !!control?.invalid && (!!control?.dirty || this.touched());
  });

  valid = computed(() => {
    this.validationStateVersion();
    const control = this.ngControl?.control;
    return !!control?.valid && (!!control?.dirty || this.touched());
  });

  validationState = computed<'default' | 'invalid' | 'valid'>(() => {
    if (this.invalid()) return 'invalid';
    if (this.valid()) return 'valid';
    return 'default';
  });

  inputClass = computed(() =>
    inputVariants({
      disabled: this.isDisabled(),
    }),
  );

  inputContainerClass = computed(() =>
    inputContainerVariants({
      state: this.validationState(),
    }),
  );

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled.set(isDisabled);
  }

  handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    this.value.set(value);
    this.onChange(value);
    this.refreshValidationState();
  }

  handleBlur(): void {
    this.touched.set(true);
    this.onTouched();
    this.refreshValidationState();
  }

  private refreshValidationState(): void {
    this.validationStateVersion.update((value) => value + 1);
  }
}
