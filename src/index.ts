import './index.css';
import { Montre } from './model/watch';
import { View } from './view/view';
import { Controller } from './controller/controller';

document.addEventListener("DOMContentLoaded", () => {
    const montre = new Montre();
    const view = new View();
    const controller = new Controller(montre, view);

    // Initial display update
    view.updateDisplay(montre);
});


