import { IComment } from './../interfaces/icomment';
import * as _ from 'lodash';

export class Comment implements IComment {

    constructor(data) {
        _.set(this, 'data', data)
    }

    get user() {
        return _.get(this, 'data.user');
    }

    set user(value){
      _.set(this, 'data.user', value);
    }

    get date() {
        return _.get(this, 'data.date');
    }

    set date(value){
      _.set(this, 'data.date', value);
    }

    get text() {
        return _.get(this, 'data.text');
    }

    set text(value){
      _.set(this, 'data.text', value);
    }

    get post() {
        return _.get(this, 'data.post');
    }

    set post(value){
      _.set(this, 'data.post', value);
    }

    getData(){
        return _.get(this, 'data');
    }

}
