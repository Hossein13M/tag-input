import { TagModel } from '../models/tag.model';

export let TagsVariable: Array<TagModel> = [
    { id: 'apple', label: 'Apple' },
    { id: 'gillette', label: 'Gillette' },
    { id: 'mastercard', label: 'Mastercard' },
    { id: 'the-walt-disney-company', label: 'The Walt Disney Company' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'louis-vuitton', label: 'Louis Vuitton' },
];

export function updateTags(newTags: Array<TagModel>) {
    TagsVariable = newTags;
}
