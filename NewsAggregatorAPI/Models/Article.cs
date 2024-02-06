﻿namespace NewsAggregatorAPI.Models
{
    public class Article
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public Source Source { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public string UrlToImage { get; set; }
        public string publishedAt { get; set; } 

    }
}
