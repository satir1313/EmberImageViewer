import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ImageComponent extends Component{

    @tracked imageSrc;
    @tracked ImageToshow;

    constructor() {
        super(...arguments);
        this.imageSrc = this.args.path;
    }

    @action
    changePath(){
        this.imageSrc = '/images/2.jpg';
    }

    @action
    showImage(path){
        document.getElementById('show-box').src = path;
        //return this.imageSrc;
    }
}