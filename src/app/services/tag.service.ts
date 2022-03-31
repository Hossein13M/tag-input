import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TagModel } from '../models/tag.model';

@Injectable()
export class TagService {
    constructor(private readonly http: HttpClient) {}

    public getTags(): Observable<Array<TagModel>> {
        return this.http.get<Array<TagModel>>('/api/tags');
    }
}
