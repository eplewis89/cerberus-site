import moment from "moment";

export class Functions {
    getPosts(posts: any[]) {
        var postList = "";
    
        posts.forEach(function (p) {
            var datetime = moment(p.date_posted).format('YYYY-MM-DD')
            postList += "<p><a href='/thoughts/" + p.id + "'>" + p.title + "</a> - " + datetime + "</p>";
        });
    
        if (postList == "") {
            return "<p>nothing found</p>";
        }
    
        return postList;
    }

    getPost(post: any) {
        var subtitle = "";

        if (post.subtitle !+ undefined) {
            subtitle = "<p><i>" + post.subtitle + "</i></p>";
        }

        return "<h2>" + post.title + "</h2>" + 
            "<h3><i>" + moment(post.date_posted).format('YYYY-MM-DD') + "</i></h3>" +
            "<p><i>" + subtitle + "</i></p>" +
            "<p>" + post.content + "</p>" +
            "<p><a href='/thoughts'>< back</a></p>";
    }
}