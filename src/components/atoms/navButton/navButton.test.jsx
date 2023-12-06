import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import NavButton from "./navButton";

describe("Button test", () => {
    test("Should render the specified label and register the click", () => {
        const onClick = vi.fn();
        const label = "This is a button";

        const { getByText, getByRole } = render(
            <NavButton onClick={onClick}>{label}</NavButton>
        );

        const button = getByRole("button");

        expect(getByText(label)).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
