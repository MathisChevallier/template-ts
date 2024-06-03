import { Heure } from './heure';
import { Mode } from './types';

export class Montre {
    private heure: Heure;
    private mode: Mode;
    private lightOn: boolean;

    constructor() {
        this.heure = new Heure();
        this.mode = 'normal';
        this.lightOn = false;
    }

    public tick(): void {
        if (this.mode === 'normal') {
            this.heure.tick();
        }
    }

    public getTime(): string {
        return this.heure.getTime();
    }

    public getMode(): Mode {
        return this.mode;
    }

    public isLightOn(): boolean {
        return this.lightOn;
    }

    public setMode(mode: Mode): void {
        this.mode = mode;
    }

    public setLight(on: boolean): void {
        this.lightOn = on;
    }

    public addHour(): void {
        this.heure.addHour();
    }

    public addMinute(): void {
        this.heure.addMinute();
    }
}
