

export interface CatalogList {
    id: number;
    title: string;
    image: {
        src: string;
    }
};

export interface CatalogData {

    list: CatalogList,
    page: {
        fetched: boolean;
    }
};





export default {};