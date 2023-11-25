import type { Meta } from '@storybook/react';
import { type ComponentType, type JSX } from 'react';
import { Input, type Props, type InputSize } from './input';
import { useState } from 'react';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { type RadiosTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';
import { type RC } from 'shared/types/component';

const meta = {
    title: 'UI/Input',
    decorators: [withKnobs],
    component: Input as ComponentType<RC<Props>>,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;

const sizes: RadiosTypeOptionsProp<InputSize> = {
    Small: 's',
    Medium: 'm',
    Large: 'l'
};

export const Default = (): JSX.Element => {
    const [value, setValue] = useState('');

    return (
        <Input
            size={radios('Size', sizes, 'm')}
            value={value}
            setValue={setValue}
            placeholder={text('Placeholder', 'Placeholder')}
        />
    );
};
