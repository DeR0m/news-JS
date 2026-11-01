import AppLoader from './appLoader';
import type { EverythingResponse, SourcesResponse } from '../../types';
import type { ResponseCallback } from './loader';

class AppController extends AppLoader {
    public getSources(callback: ResponseCallback<SourcesResponse>): void {
        this.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: ResponseCallback<EverythingResponse>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId !== null) {
                        newsContainer.setAttribute('data-source', sourceId);
                        this.getResp<EverythingResponse>(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            if (target.parentElement === null) break;
            target = target.parentElement;
        }
    }
}

export default AppController;
