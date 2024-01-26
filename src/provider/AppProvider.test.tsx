import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AppProvider, { useUser } from "./AppProvider";

test("AppProvider should be return coreact value", async () => {
  const userData = {
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhom@doe.com",
  };

  const TestComponent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const context = useUser();
    const { user, setUser } = context;

    const getUserData = () => {
      setUser?.(userData);
    };

    return (
      <>
        <div>
          <p>{`Name: ${user?.firstName}`}</p>
          <button onClick={getUserData}>New User</button>
        </div>
      </>
    );
  };

  // render semua tampilan
  render(
    <AppProvider>
      <TestComponent />
    </AppProvider>
  );

  // cek dan test semua tampilan pada TestComponent
  expect(screen.getByText("New User")).toBeDefined();
  waitFor(() => fireEvent.click(screen.getByRole("button")));
  expect(screen.getByText(`Name: ${userData.firstName}`)).toBeDefined();
});
