// import { FormsModule } from '@angular/forms';
// import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
// import { Input } from './input';

// type InputStoryArgs = {
//   label: string;
//   placeholder: string;
//   prefix: string;
//   value: string;
//   disabled: boolean;
// };

// const source = (code: string) => ({
//   docs: {
//     source: {
//       code: code.trim(),
//     },
//   },
// });

// const meta: Meta<InputStoryArgs> = {
//   title: 'Components/Input',
//   component: Input,
//   tags: ['!dev'],
//   decorators: [
//     moduleMetadata({
//       imports: [FormsModule],
//     }),
//   ],
//   args: {
//     label: 'Email',
//     placeholder: 'Digite seu email',
//     prefix: '',
//     value: '',
//     disabled: false,
//   },
//   render: (args) => ({
//     props: args,
//     template: `
//       <div class="w-96">
//         <nova-input
//           [label]="label"
//           [placeholder]="placeholder"
//           [disabled]="disabled"
//           [(ngModel)]="value"
//         >
//           {{ prefix }}
//         </nova-input>
//       </div>
//     `,
//   }),
// };

// export default meta;

// type Story = StoryObj<InputStoryArgs>;

// export const Default: Story = {
//   parameters: source(`
// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
// />
//   `),
// };

// export const WithPrefix: Story = {
//   args: {
//     prefix: '@',
//   },
//   parameters: source(`
// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
// >
//   @
// </nova-input>
//   `),
// };

// export const WithValue: Story = {
//   args: {
//     prefix: '@',
//     value: 'nova@supernova.dev',
//   },
//   parameters: source(`
// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
//   [(ngModel)]="email"
// >
//   @
// </nova-input>
//   `),
// };

// export const Disabled: Story = {
//   args: {
//     disabled: true,
//   },
//   parameters: source(`
// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
//   disabled
// />
//   `),
// };

// export const States: Story = {
//   render: () => ({
//     props: {
//       filledEmail: 'nova@supernova.dev',
//     },
//     template: `
//       <div class="flex flex-col gap-4 w-96">
//         <nova-input
//           label="Email"
//           placeholder="Digite seu email"
//         />

//         <nova-input
//           label="Email"
//           placeholder="Digite seu email"
//         >
//           @
//         </nova-input>

//         <nova-input
//           label="Email"
//           placeholder="Digite seu email"
//           [(ngModel)]="filledEmail"
//         >
//           @
//         </nova-input>

//         <nova-input
//           label="Email"
//           placeholder="Digite seu email"
//           [disabled]="true"
//         />
//       </div>
//     `,
//   }),
//   parameters: source(`
// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
// />

// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
// >
//   @
// </nova-input>

// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
//   [(ngModel)]="email"
// >
//   @
// </nova-input>

// <nova-input
//   label="Email"
//   placeholder="Digite seu email"
//   disabled
// />
//   `),
// };
