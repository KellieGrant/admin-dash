export interface Post {
id: string;
title: string;
body: string;
author: string;
date: string;
comment: PostComment[];
}

export interface PostComment {
    id: string;
    text: string;
    username: string;
}