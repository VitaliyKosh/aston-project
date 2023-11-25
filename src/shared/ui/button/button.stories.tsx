import type { Meta } from '@storybook/react';
import { type JSX } from 'react';
import { Button, type ButtonSize } from './button';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { type RadiosTypeOptionsProp } from '@storybook/addon-knobs/dist/components/types';

const meta = {
    title: 'UI/Button',
    decorators: [withKnobs],
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;

const sizes: RadiosTypeOptionsProp<ButtonSize> = {
    Small: 's',
    Medium: 'm',
    Large: 'l'
};

export const Default = (): JSX.Element => {
    return (
        <Button
            theme={'default'}
            size={radios('Size', sizes, 'm')}
        >
            {text('Children', 'Button')}
        </Button>
    );
};

export const Clear = (): JSX.Element => {
    return (
        <Button
            theme={'clear'}
            size={radios('Size', sizes, 'm')}
        >
            {text('Children', 'Button')}
        </Button>
    );
};
