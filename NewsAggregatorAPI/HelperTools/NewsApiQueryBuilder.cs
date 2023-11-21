using System.Text;

public class NewsApiQueryBuilder
{
    public static string BuildQuery(string country, string category, string keyword, string publisher, string apiKey)
    {
        var url = new StringBuilder("https://newsapi.org/v2/top-headlines?");

        if (!string.IsNullOrWhiteSpace(publisher))
        {
            url.Append($"sources={Uri.EscapeDataString(publisher)}&");
        }
        else
        {
            if (!string.IsNullOrWhiteSpace(country))
            {
                url.Append($"country={Uri.EscapeDataString(country)}&");
            }

            if (!string.IsNullOrWhiteSpace(category))
            {
                url.Append($"category={Uri.EscapeDataString(category)}&");
            }
        }

        if (!string.IsNullOrWhiteSpace(keyword))
        {
            url.Append($"q={Uri.EscapeDataString(keyword)}&");
        }

        url.Append($"apiKey={apiKey}");
        return url.ToString();
    }
}
