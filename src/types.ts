export enum Status {
    Ok = 'ok',
    Error = 'error',
}

export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface EverythingResponse {
    status: Status;
    totalResults: number;
    articles: Article[];
}

export interface SourcesResponse {
    status: Status;
    sources: Source[];
}

export interface ErrorResponse {
    status: Status.Error;
    code: string;
    message: string;
}