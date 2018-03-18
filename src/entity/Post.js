import {EntitySchema} from "typeorm";

export const Post = new EntitySchema({
    name: "Post",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        title: {
            type: String
        },
        text: {
            type: String
        }
    }
});