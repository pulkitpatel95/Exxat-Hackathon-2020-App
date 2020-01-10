import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
    'selector': 'app-contextmenu-component',
    'templateUrl': 'app.contextmenu.component.html'
})
export class ContextMenu implements OnInit{
    
    @Input() x=0;
    @Input() y = 0;

    @Output() notifyContext: EventEmitter<any>;

    constructor(){
        this.notifyContext = new EventEmitter<any>();
    }

    ngOnInit() {
        
    }

    onHideClickNotify(menuItem: string): void{
        this.notifyContext.emit(menuItem);
    }
}