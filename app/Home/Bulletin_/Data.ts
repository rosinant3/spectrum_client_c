

export interface BulletinList {
        id: number;
        title: string;
        description: string;
        image: {
            src: string;
        }
};

export interface BulletinData {

    list: BulletinList,
    page: {
        fetched: boolean;
    }
};





export default {};