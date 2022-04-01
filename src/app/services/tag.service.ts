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

    public removeTag(tag: TagModel): Observable<void> {
        return this.http.delete<void>(`/api/tags/${tag.id}`);
    }

    public addTag(tagLabel: string): Observable<void> {
        const tagId: string = tagLabel.toLowerCase().replace(' ', '-');
        return this.http.post<void>('/api/tags', { id: tagId, label: tagLabel });
    }
}
