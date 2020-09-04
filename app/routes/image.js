import Route from '@ember/routing/route';

export default class ImageRoute extends Route {
   
    model(params){
        const {image_id} = params;
        return image_id;
    }

}
