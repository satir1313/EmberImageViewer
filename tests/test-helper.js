import Application from 'ember-image-viewer/app';
import config from 'ember-image-viewer/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
