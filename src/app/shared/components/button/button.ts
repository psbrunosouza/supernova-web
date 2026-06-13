import { booleanAttribute, Component, computed, input, output } from '@angular/core';
import { buttonVariants } from './button.variants';

type ColorType = 'primary' | 'accent' | 'success' | 'warning' | 'error';
type AppearanceType = 'filled' | 'outline' | 'ghost';

@Component({
  selector: 'nova-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  disabled = input(false, { transform: booleanAttribute });

  color = input<ColorType>('primary');

  appearance = input<AppearanceType>('filled');

  clicked = output<PointerEvent>({
    alias: 'click',
  });

  buttonVariants = computed(() =>
    buttonVariants({
      disabled: this.disabled(),
      color: this.color(),
      appearance: this.appearance(),
    }),
  );
}
