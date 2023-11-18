import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './loader';

const meta = {
    title: 'UI/Loader',
    component: Loader,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {

    }
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
