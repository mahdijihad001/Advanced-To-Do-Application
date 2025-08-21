import { Query } from "mongoose";
import { excludedFild } from "../constrain/constrain";

export class QueryBuilder<T> {
    public queryModel: Query<T[], T>;
    public readonly query: Record<string, string>;

    constructor(queryModel: Query<T[], T>, query: Record<string, string>) {
        this.queryModel = queryModel;
        this.query = query
    };

    filter(): this {

        const filter = { ...this.query };

        for (const value of excludedFild) {
            delete filter[value]
        };

        this.queryModel = this.queryModel.find(filter);

        return this
    };

    sort(): this {

        const sort = this.query.sort || "-createdAt";

        this.queryModel = this.queryModel.sort(sort);

        return this;
    };
    pagination(): this {

        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const skip = (page - 1) * limit;

        this.queryModel = this.queryModel.limit(limit).skip(skip)

        return this;
    };

    search(searchableFilds: string[]): this {

        const searchTerm = this.query.searchTerm || "";

        const searchQuery = {
            $or: searchableFilds.map((filds) => ({ [filds]: { $regex: searchTerm, $options: "i" } }))
        };

        this.queryModel = this.queryModel.find(searchQuery)

        return this
    };

    build() {
        return this.queryModel
    };

    async getMeta() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;

        const totalDocument = await this.queryModel.model.countDocuments();

        const totalPage = Math.ceil(totalDocument / limit);

        return { page, limit, totalDocument, totalPage }

    }

}