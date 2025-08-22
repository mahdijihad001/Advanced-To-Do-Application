import { Query } from "mongoose";
export declare class QueryBuilder<T> {
    queryModel: Query<T[], T>;
    readonly query: Record<string, string>;
    constructor(queryModel: Query<T[], T>, query: Record<string, string>);
    filter(): this;
    sort(): this;
    pagination(): this;
    search(searchableFilds: string[]): this;
    build(): Query<T[], T, {}, unknown, "find", Record<string, never>>;
    getMeta(): Promise<{
        page: number;
        limit: number;
        totalDocument: number;
        totalPage: number;
    }>;
}
//# sourceMappingURL=QueryBuilder.d.ts.map