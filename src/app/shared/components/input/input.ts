import { booleanAttribute, Component, computed, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { inputContainerVariants, inputVariants } from './input.variants';

@Component({
  selector: 'nova-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true,
    },
  ],
})
export class Input implements ControlValueAccessor {
  placeholder = input.required<string>();

  label = input.required<string>();

  type = input<string>('');

  disabled = input(false, {
    transform: booleanAttribute,
  });

  _disabled = signal(false);

  value = signal('');

  isDisabled = computed(() => this.disabled() || this._disabled());

  inputClass = computed(() =>
    inputVariants({
      disabled: this.isDisabled(),
    }),
  );

  inputContainerVariants = computed(() => inputContainerVariants());

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

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
  }

  handleBlur(): void {
    this.onTouched();
  }
}
