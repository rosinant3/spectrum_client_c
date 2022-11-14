

export interface BlogList {
    id: number;
    title: string;
    image: {
        src: string;
    }
};

export interface BlogData {

    list: BlogList,
    page: {
        fetched: boolean;
    }
};





export default {};