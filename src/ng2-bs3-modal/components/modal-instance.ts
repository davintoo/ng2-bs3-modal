import {ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';

// declare var jQuery: any;
declare var Modal: any;

export class ModalInstance {
    private $modal: any;

    result: any;
    visible: boolean = false;

    constructor(private element: ElementRef) {
        this.init();
    }

    open() {
        return this.show();
    }

    close() {
        this.result = ModalResult.Close;
        return this.hide();
    }

    dismiss() {
        this.result = ModalResult.Dismiss;
        return this.hide();
    }

    destroy() {
        this.hide();
        if (this.$modal) {
            this.$modal.remove();
        }
    }

    private show() {
        this.$modal.open();
    }

    private hide() {
        if (this.$modal && this.visible) {
            this.$modal.close();
        }
        return this.result;
    }

    private init() {
        // console.log('init3');
        this.$modal = new Modal(this.element.nativeElement);
        // console.log('$modal', this.$modal);
        // this.$modal.appendTo('body');
    }
}

export enum ModalResult {
    None,
    Close,
    Dismiss
}