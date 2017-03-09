import { normalize, schema, arrayOf } from 'normalizr';

let song = new schema.Entity('songs');
let user = new schema.Entity('users');

song.define({
    user: user
});

export const songSchema = song;
export const userSchema = user;
