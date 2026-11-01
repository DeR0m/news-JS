import './news.css';
import type { Article } from '../../../types';

class News {
    private template: HTMLTemplateElement;
    private container: HTMLElement;

    constructor() {
        this.template = document.querySelector<HTMLTemplateElement>('#newsItemTemp')!;
        this.container = document.querySelector<HTMLElement>('.news')!;
    }

    public draw(data: ReadonlyArray<Article>): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = this.template;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                const itemElement = newsClone.querySelector<HTMLElement>('.news__item');
                if (itemElement) itemElement.classList.add('alt');
            }

            const photoElement = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (photoElement) {
                photoElement.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const authorElement = newsClone.querySelector<HTMLElement>('.news__meta-author');
            if (authorElement) authorElement.textContent = item.author || item.source.name;

            const dateElement = newsClone.querySelector<HTMLElement>('.news__meta-date');
            if (dateElement) {
                dateElement.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const titleElement = newsClone.querySelector<HTMLElement>('.news__description-title');
            if (titleElement) titleElement.textContent = item.title;

            const sourceElement = newsClone.querySelector<HTMLElement>('.news__description-source');
            if (sourceElement) sourceElement.textContent = item.source.name;

            const contentElement = newsClone.querySelector<HTMLElement>('.news__description-content');
            if (contentElement) contentElement.textContent = item.description;

            const readMoreElement = newsClone.querySelector<HTMLAnchorElement>('.news__read-more a');
            if (readMoreElement) readMoreElement.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        this.container.innerHTML = '';
        this.container.appendChild(fragment);
    }
}

export default News;
