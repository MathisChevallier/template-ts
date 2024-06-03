import { Montre } from '../model/watch';
import { View } from '../view/view';
//import { Mode } from '../model/types';

export class Controller {
    private montre: Montre;
    private view: View;

    constructor(montre: Montre, view: View) {
        this.montre = montre;
        this.view = view;

        this.view.bindModeButton(this.handleModeButton.bind(this));
        this.view.bindIncreaseButton(this.handleIncreaseButton.bind(this));
        this.view.bindLightButton(this.handleLightButton.bind(this));

        // Afficher l'heure toutes les secondes
        setInterval(() => {
            this.montre.tick();
            this.view.updateDisplay(this.montre);
        }, 1000);
    }

    private handleModeButton(): void {
        const currentMode = this.montre.getMode();
        if (currentMode === 'normal') {
            this.montre.setMode('editHours');
        } else if (currentMode === 'editHours') {
            this.montre.setMode('editMinutes');
        } else if (currentMode === 'editMinutes') {
            this.montre.setMode('normal');
        }
        console.log('Mode button pressed. Current mode:', this.montre.getMode());
    }

    private handleIncreaseButton(): void {
        const currentMode = this.montre.getMode();
        if (currentMode === 'editHours') {
            this.montre.addHour();
        } else if (currentMode === 'editMinutes') {
            this.montre.addMinute();
        }
        console.log('Increase button pressed. Current time:', this.montre.getTime());
    }

    private handleLightButton(): void {
        this.montre.setLight(!this.montre.isLightOn());
        console.log('Light button pressed. Light is now', this.montre.isLightOn() ? 'on' : 'off');
        this.view.updateDisplay(this.montre);
    }
}
