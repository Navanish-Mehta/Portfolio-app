import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can log error info here if needed
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red', textAlign: 'center', margin: '1rem 0' }}>Something went wrong: {this.state.error?.message}</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 