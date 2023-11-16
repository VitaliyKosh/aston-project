import React, { type ErrorInfo } from 'react';
import { PageError } from 'widgets/page-error';

interface Props {
    children: React.ReactNode
}

interface State {
    hasError: boolean
    info: string
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = { hasError: false, info: '' };
    }

    static getDerivedStateFromError (): any {
        return { hasError: true };
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        this.setState({ hasError: true, info: error.message });
    }

    render (): React.ReactNode {
        if (this.state.hasError) {
            return <PageError info={this.state.info}/>;
        } else {
            return this.props.children;
        }
    }
}
