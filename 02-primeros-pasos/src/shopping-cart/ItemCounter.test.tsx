import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    test("should render correctly", () => {
        //Arramge
        const itemName = "Test Item";
        const itemQuantity=5;
        //Act
        render(<ItemCounter itemName={itemName} quantity={itemQuantity} />);
        screen.debug();
        //Assert
        expect(screen.getByText(itemName)).toBeDefined();

        expect(screen.getByText(itemName)).not.toBeNull();
    });
    test("test boton añadir", () => {
        //Arramge
        const itemName = "Test Item";
        const itemQuantity=5;
        //Act
        render(<ItemCounter itemName={itemName} quantity={itemQuantity} />);
        screen.debug();
        //Assert
        const addButton = screen.getByText("+");
        fireEvent.click(addButton);
        screen.debug();
        expect(screen.getByText(itemQuantity+1)).toBeDefined();
    });
    test("test boton reducir", () => {
        //Arramge
        const itemName = "Test Item";
        const itemQuantity=5;
        //Act
        render(<ItemCounter itemName={itemName} quantity={itemQuantity} />);
        screen.debug();
        //Assert
        const addButton = screen.getByText("-");
        fireEvent.click(addButton);
        screen.debug();
        expect(screen.getByText(itemQuantity-1)).toBeDefined();
    });
    test("test boton reducir no hace nada si el contador es 0", () => {
        //Arramge
        const itemName = "Test Item";
        const itemQuantity=0;
        //Act
        render(<ItemCounter itemName={itemName} quantity={itemQuantity} />);
        screen.debug();
        //Assert
        const addButton = screen.getByText("-");
        fireEvent.click(addButton);
        screen.debug();
        expect(screen.getByText(itemQuantity)).toBeDefined();
    });
});