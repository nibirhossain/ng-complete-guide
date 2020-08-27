import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    template: `
        <p>This is a warning, you are in dangerous situation!!!
    `,
    styles: [
        `
            p {
                padding: 20px;
                background-color: mistyrose;
                border: solid 1px red;
            }
        `
    ]
})
export class WarningAlertComponent {

}