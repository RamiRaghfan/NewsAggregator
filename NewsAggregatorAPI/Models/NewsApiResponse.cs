namespace NewsAggregatorAPI.Models
{
    public class NewsApiResponse
    {
        public string Status { get; set; }
        public List<Article> Articles { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorMessage { get; set; }
        public int totalResults { get; set; } 


    }
}
