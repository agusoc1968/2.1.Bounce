"use strict";
function darthVader2() {
    let dV = "No me obligues a destruirte...";
    console.log(dV);
}
setTimeout(darthVader2, 3000);
function lukeSkaywalker2() {
    let lS = "¡¡¡Tú no eres mi padre!!!";
    console.log(lS);
}
lukeSkaywalker2();
describe("Darth Vader2", () => {
    test("it sholud be print the correct message", () => {
        // Mockear la consola para capturar la salida
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        darthVader2();
        // Comprobar que la función de consola se llamó con el mensaje correcto
        expect(consoleSpy).toHaveBeenCalledWith("No me obligues a destruirte...");
        // Restaurar la implementación original de console.log
        consoleSpy.mockRestore();
    });
});
describe("lukeSkywalker2", () => {
    test("it sholud be print the correct message", () => {
        // Mockear la consola para capturar la salida
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        lukeSkaywalker2();
        // Comprobar que la función de consola se llamó con el mensaje correcto
        expect(consoleSpy).toHaveBeenCalledWith("¡¡¡Tú no eres mi padre!!!");
        // Restaurar la implementación original de console.log
        consoleSpy.mockRestore();
    });
});
