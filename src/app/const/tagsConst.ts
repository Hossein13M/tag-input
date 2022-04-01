import { TagModel } from '../models/tag.model';

export const Suggestions: Array<TagModel> = [
    { id: 'apple', label: 'Apple' },
    { id: 'gillette', label: 'Gillette' },
    { id: 'mastercard', label: 'Mastercard' },
    { id: 'the-walt-disney-company', label: 'The Walt Disney Company' },
    { id: 'facebook', label: 'Facebook' },
    { id: 'louis-vuitton', label: 'Louis Vuitton' },
];

export let TagsVariable: Array<TagModel> = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'practice', label: 'Practice' },
];

export function updateTags(newTags: Array<TagModel>) {
    TagsVariable = newTags;
}

export function shuffleArray(array: Array<any>) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
