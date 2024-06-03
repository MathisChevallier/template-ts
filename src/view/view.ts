import { Montre } from '../model/watch';

export class View {
    private displayElement: HTMLElement | null;
    private modeButton: HTMLElement | null;
    private increaseButton: HTMLElement | null;
    private lightButton: HTMLElement | null;

    constructor() {
        this.displayElement = document.getElementById('watch-display');
        this.modeButton = document.getElementById('mode-button');
        this.increaseButton = document.getElementById('increase-button');
        this.lightButton = document.getElementById('light-button');
    }

    public updateDisplay(montre: Montre): void {
        if (this.displayElement) {
            this.displayElement.textContent = montre.getTime();
            this.displayElement.style.backgroundColor = montre.isLightOn() ? 'yellow' : 'white';
        }
    }

    public bindModeButton(handler: () => void): void {
        if (this.modeButton) {
            this.modeButton.addEventListener('click', handler);
        }
    }

    public bindIncreaseButton(handler: () => void): void {
        if (this.increaseButton) {
            this.increaseButton.addEventListener('click', handler);
        }
    }

    public bindLightButton(handler: () => void): void {
        if (this.lightButton) {
            this.lightButton.addEventListener('click', handler);
        }
    }
}