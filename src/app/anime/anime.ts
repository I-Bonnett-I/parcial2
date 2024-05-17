export class Anime {
    id: number;
    name: string;
    description: string;
    Rating: number;
    episode: number;
    categories: string;
    studio: string;
    img: string;

    constructor(id: number, name: string, description: string, Rating: number, episode: number, categories: string, studio: string, img: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.Rating = Rating;
        this.episode = episode;
        this.categories = categories;
        this.studio = studio;
        this.img = img;
    }
}
