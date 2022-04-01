import { Injectable } from '@angular/core';
import { createServer } from 'miragejs';
import { TagsVariable, updateTags } from '../const/tagsConst';
import { TagModel } from '../models/tag.model';

@Injectable()
export class MirageService {
    constructor() {}

    public mirageJsServer(): void {
        createServer({
            routes(): void {
                this.namespace = 'api';

                this.get('/tags', () => {
                    return TagsVariable;
                });

                this.delete('/tags/:id', (schema, request) => {
                    const tagId: string = request.params['id'];
                    updateTags(TagsVariable.filter((t: TagModel) => t.id !== tagId));
                    return request;
                });

                this.post('/tags', (schema, request) => {
                    const requestBody: TagModel = JSON.parse(request.requestBody);
                    updateTags([...TagsVariable, requestBody]);
                    return requestBody;
                });
            },
        });
    }
}
