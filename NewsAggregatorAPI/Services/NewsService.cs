using NewsAggregatorAPI.Models;
using Newtonsoft.Json;
using System.Text;

namespace NewsAggregatorAPI.Services
{
    public class NewsService
    {
        private readonly HttpClient _httpClient;
        private readonly string _apiKey;


        public NewsService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.Add("User-Agent", "NewsAggregatorApp");
            _apiKey = configuration.GetValue<string>("NewsApiKey");

        }

        public async Task<NewsApiResponse> GetNewsAsync(string country, string category, string keyword, string publisher)
        {
            var url = NewsApiQueryBuilder.BuildQuery(country, category, keyword, publisher, _apiKey);

            var response = await _httpClient.GetAsync(url);

            var content = await response.Content.ReadAsStringAsync();
            var newsData = JsonConvert.DeserializeObject<NewsApiResponse>(content);
            if (newsData.Status == "error")
            {
                throw new HttpRequestException($"Error from News API: {newsData.ErrorMessage}");
            }

            return newsData;
        }

    }
}
