



export interface IData {
    color: string;
    graphics: any;
    selectedDate: Date | null;
    content: string;
    userId?: number;
    caseId?: number;
};

export type dataKeys = "color" | "graphics" | "content" | "selectedDate";