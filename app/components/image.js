import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ImageComponent extends Component{

    @tracked imageSrc;

    constructor() {
        super(...arguments);
        this.imageSrc = this.args.path;
    }

    @action
    changePath(){
        this.imageSrc = '/images/2.jpg';
    }
}