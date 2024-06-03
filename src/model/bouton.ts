export class Bouton {
    private action: () => void;

    constructor(action: () => void) {
        this.action = action;
    }

    public press(): void {
        this.action();
    }
}
