// https://dev.to/bonnie/testing-react-apps-that-use-react-router-2bmd

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const MemoryRouterWithInitialRoutes = ({ children, initialRoutes }) => {
    return (
      <MemoryRouter initialEntries={initialRoutes}>
        {children}
      </MemoryRouter>
    );
};

// create a customRender that wraps the UI in a memory Router
const customRender = (ui, options) => {
    const initialRoutes = options && options.initialRoutes ? options.initialRoutes : ["/"];

    return render(ui, {
        wrapper: (args) =>
          MemoryRouterWithInitialRoutes({
            ...args,
            initialRoutes,
          }),
          ...options,
    });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
