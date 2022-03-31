import { Injectable } from '@angular/core';
import { Server } from 'miragejs';
import { Tags } from '../const/tags';

@Injectable()
export class MirageService {
    constructor() {}

    public mirageJsServer(): Server {
        return new Server({
            routes(): void {
                this.namespace = 'api';

                this.get('/tags', () => {
                    return Tags;
                });
            },
        });
    }
}
