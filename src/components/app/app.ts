import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { EverythingResponse, SourcesResponse } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector<HTMLElement>('.sources');

        if (!sourcesElement) {
            console.error('Element .sources not found');
            return;
        }

        sourcesElement.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: EverythingResponse) => this.view.drawNews(data))
        );

        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;
