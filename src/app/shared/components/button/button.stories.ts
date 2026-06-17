// import type { Meta, StoryObj } from '@storybook/angular';
// import { Button } from './button';

// type ButtonStoryArgs = {
//   content: string;
//   appearance: 'filled' | 'outline' | 'ghost';
//   color: 'primary' | 'accent' | 'success' | 'warning' | 'error';
//   disabled: boolean;
// };

// const source = (code: string) => ({
//   docs: {
//     source: {
//       code: code.trim(),
//     },
//   },
// });

// const meta: Meta<ButtonStoryArgs> = {
//   title: 'Components/Button',
//   component: Button,
//   tags: ['!dev'],
//   args: {
//     content: 'Button',
//     appearance: 'filled',
//     color: 'primary',
//     disabled: false,
//   },
//   render: (args) => ({
//     props: args,
//     template: `
//       <div class="w-80">
//         <nova-button
//           [appearance]="appearance"
//           [color]="color"
//           [disabled]="disabled"
//         >
//           {{ content }}
//         </nova-button>
//       </div>
//     `,
//   }),
// };

// export default meta;

// type Story = StoryObj<ButtonStoryArgs>;

// export const Filled: Story = {
//   args: {
//     appearance: 'filled',
//     content: 'Filled',
//   },
//   parameters: source(`
// <nova-button appearance="filled">
//   Filled
// </nova-button>
//   `),
// };

// export const Outline: Story = {
//   args: {
//     appearance: 'outline',
//     content: 'Outline',
//   },
//   parameters: source(`
// <nova-button appearance="outline">
//   Outline
// </nova-button>
//   `),
// };

// export const Ghost: Story = {
//   args: {
//     appearance: 'ghost',
//     content: 'Ghost',
//   },
//   parameters: source(`
// <nova-button appearance="ghost">
//   Ghost
// </nova-button>
//   `),
// };

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//     content: 'Disabled',
//   },
//   parameters: source(`
// <nova-button disabled>
//   Disabled
// </nova-button>
//   `),
// };

// export const Primary: Story = {
//   args: {
//     color: 'primary',
//     content: 'Primary',
//   },
//   parameters: source(`
// <nova-button color="primary">
//   Primary
// </nova-button>
//   `),
// };

// export const Accent: Story = {
//   args: {
//     color: 'accent',
//     content: 'Accent',
//   },
//   parameters: source(`
// <nova-button color="accent">
//   Accent
// </nova-button>
//   `),
// };

// export const Success: Story = {
//   args: {
//     color: 'success',
//     content: 'Success',
//   },
//   parameters: source(`
// <nova-button color="success">
//   Success
// </nova-button>
//   `),
// };

// export const Warning: Story = {
//   args: {
//     color: 'warning',
//     content: 'Warning',
//   },
//   parameters: source(`
// <nova-button color="warning">
//   Warning
// </nova-button>
//   `),
// };

// export const Error: Story = {
//   args: {
//     color: 'error',
//     content: 'Error',
//   },
//   parameters: source(`
// <nova-button color="error">
//   Error
// </nova-button>
//   `),
// };

// export const Colors: Story = {
//   render: () => ({
//     template: `
//       <div class="flex flex-col gap-4 w-80">
//         <nova-button color="primary">Primary</nova-button>
//         <nova-button color="accent">Accent</nova-button>
//         <nova-button color="success">Success</nova-button>
//         <nova-button color="warning">Warning</nova-button>
//         <nova-button color="error">Error</nova-button>
//       </div>
//     `,
//   }),
//   parameters: source(`
// <nova-button color="primary">Primary</nova-button>
// <nova-button color="accent">Accent</nova-button>
// <nova-button color="success">Success</nova-button>
// <nova-button color="warning">Warning</nova-button>
// <nova-button color="error">Error</nova-button>
//   `),
// };
