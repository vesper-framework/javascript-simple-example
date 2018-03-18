import {EntityManager} from "typeorm";
import {Post} from "../entity/Post";

export class PostController {

    constructor(container) {
        this.entityManager = container.get(EntityManager);
    }

    // serves "posts: [Post]" requests
    posts() {
        return this.entityManager.find(Post);
    }

    // serves "post(id: Int): Post" requests
    post({ id }) {
        return this.entityManager.findOne(Post, id);
    }

    // serves "postSave(id: Int, title: String, text: String): Post" requests
    postSave(args) {
        const post = this.entityManager.create(Post, args);
        return this.entityManager.save(Post, post);
    }

    // serves "postDelete(id: Int): Boolean" requests
    postDelete({ id }) {
        return this.entityManager
            .remove({ id: id })
            .then(() => true);
    }

}