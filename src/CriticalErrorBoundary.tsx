import React from "react";

import { CriticalErrorContextProvider } from "./CriticalErrorContext";
import { sentryLogger } from "./sentryLogger";

interface Props {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class CriticalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    sentryLogger.log(error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }


    return <CriticalErrorContextProvider>{this.props.children}</CriticalErrorContextProvider>;
  }
}
