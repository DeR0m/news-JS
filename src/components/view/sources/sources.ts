import './sources.css';
import type { Source } from '../../../types';

class Sources {
    private template: HTMLTemplateElement;
    private container: HTMLElement;

    constructor() {
        this.template = document.querySelector<HTMLTemplateElement>('#sourceItemTemp')!;
        this.container = document.querySelector<HTMLElement>('.sources')!;
    }

    public draw(data: ReadonlyArray<Source>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = this.template;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameElement = sourceClone.querySelector<HTMLElement>('.source__item-name');
            if (nameElement) nameElement.textContent = item.name;

            const itemElement = sourceClone.querySelector<HTMLElement>('.source__item');
            if (itemElement) itemElement.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        this.container.append(fragment);
    }
}

export default Sources;
