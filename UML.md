```mermaid
classDiagram
    Controller --> Montre
    Controller --> View
    View --> Montre
    Montre --> Heure
    Montre --> Mode
    Bouton --> "action: () => void" 

    class Controller {
        -Montre montre
        -View view
        +Controller(montre: Montre, view: View)
        +handleModeButton(): void
        +handleIncreaseButton(): void
        +handleLightButton(): void
    }

    class View {
        -HTMLElement | null displayElement
        -HTMLElement | null modeButton
        -HTMLElement | null increaseButton
        -HTMLElement | null lightButton
        +View()
        +updateDisplay(montre: Montre): void
        +bindModeButton(handler: () => void): void
        +bindIncreaseButton(handler: () => void): void
        +bindLightButton(handler: () => void): void
    }

    class Bouton {
        -action: () => void
        +Bouton(action: () => void)
        +press(): void
    }

    class Heure {
        -int hours
        -int minutes
        -int seconds
        +Heure()
        +tick(): void
        +getTime(): string
        +addHour(): void
        +addMinute(): void
    }

    class Montre {
        -Heure heure
        -Mode mode
        -boolean lightOn
        +Montre()
        +tick(): void
        +getTime(): string
        +getMode(): Mode
        +isLightOn(): boolean
        +setMode(mode: Mode): void
        +setLight(on: boolean): void
        +addHour(): void
        +addMinute(): void
    }

    class Mode {
        <<enumeration>>
        normal
        editHours
        editMinutes
    }
