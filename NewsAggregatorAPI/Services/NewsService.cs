using NewsAggregatorAPI.Models;
using Newtonsoft.Json;

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

        public async Task<NewsApiResponse> GetNewsAsync(string country, string category)
        {
            string url = $"https://newsapi.org/v2/top-headlines?country={country}&category={category}&apiKey={_apiKey}";

            var response = await _httpClient.GetAsync(url);
         //   response.EnsureSuccessStatusCode();

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
