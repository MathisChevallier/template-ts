export class Heure {
    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor() {
        const now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    }

    public tick(): void {
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours >= 24) {
                    this.hours = 0;
                }
            }
        }
    }

    public getTime(): string {
        const format = (num: number) => (num < 10 ? `0${num}` : num);
        return `${format(this.hours)}:${format(this.minutes)}:${format(this.seconds)}`;
    }

    public addHour(): void {
        this.hours = (this.hours + 1) % 24;
    }

    public addMinute(): void {
        this.minutes++;
        if (this.minutes >= 60) {
            this.minutes = 0;
            this.addHour();
        }
    }
}

