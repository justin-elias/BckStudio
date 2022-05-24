/*
 * Copyright (c) 5/19/22. Bozeman Community Kiln
 */

import {GraphQLClient} from "graphql-request";
import {print} from 'graphql/language/printer';
import {ASTNode} from "graphql";

export const queryCMS = async (query: ASTNode, token: string, endPoint: string) => {
    try {
        return await new GraphQLClient(endPoint, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).request(print(query));
    }catch (e) {

        return e
    }
};

