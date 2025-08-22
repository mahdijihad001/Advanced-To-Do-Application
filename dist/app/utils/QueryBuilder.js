"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
const constrain_1 = require("../constrain/constrain");
class QueryBuilder {
    constructor(queryModel, query) {
        this.queryModel = queryModel;
        this.query = query;
    }
    ;
    filter() {
        const filter = { ...this.query };
        for (const value of constrain_1.excludedFild) {
            delete filter[value];
        }
        ;
        this.queryModel = this.queryModel.find(filter);
        return this;
    }
    ;
    sort() {
        const sort = this.query.sort || "-createdAt";
        this.queryModel = this.queryModel.sort(sort);
        return this;
    }
    ;
    pagination() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const skip = (page - 1) * limit;
        this.queryModel = this.queryModel.limit(limit).skip(skip);
        return this;
    }
    ;
    search(searchableFilds) {
        const searchTerm = this.query.searchTerm || "";
        const searchQuery = {
            $or: searchableFilds.map((filds) => ({ [filds]: { $regex: searchTerm, $options: "i" } }))
        };
        this.queryModel = this.queryModel.find(searchQuery);
        return this;
    }
    ;
    build() {
        return this.queryModel;
    }
    ;
    async getMeta() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const totalDocument = await this.queryModel.model.countDocuments();
        const totalPage = Math.ceil(totalDocument / limit);
        return { page, limit, totalDocument, totalPage };
    }
}
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=QueryBuilder.js.map