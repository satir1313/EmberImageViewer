import Route from '@ember/routing/route';

export default class PreviewImageRoute extends Route{
    async model(){
        let response = await fetch('/api/list.json');
        let parsed = await response.json();
        return parsed;
    }
}