using Microsoft.AspNetCore.Mvc;
using NewsAggregatorAPI.Services;
using Microsoft.Extensions.Logging;



namespace NewsAggregatorAPI.Controllers
{
   [ApiController]
[Route("[controller]")]
public class NewsController : ControllerBase
{
    private readonly NewsService _newsService;
    private readonly ILogger<NewsController> _logger;


        public NewsController(NewsService newsService, ILogger<NewsController> logger)
        {
            _newsService = newsService;
            _logger = logger;
        }

        [HttpGet("GetNews")]
        public async Task<IActionResult> GetNews(
            [FromQuery] string? country = null,
            [FromQuery] string? category = null,
            [FromQuery] string? keyword = null,
            [FromQuery] string? publisher = null)
        {
            if (!string.IsNullOrWhiteSpace(country) ||
                !string.IsNullOrWhiteSpace(category) ||
                !string.IsNullOrWhiteSpace(keyword) ||
                !string.IsNullOrWhiteSpace(publisher))
            {
                try
                {
                    var news = await _newsService.GetNewsAsync(country, category, keyword, publisher);
                    return Ok(news);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "An error occurred while processing the request");
                    return StatusCode(500, "An error occurred while processing your request");
                }
            }
            else
            {
                return BadRequest("At least one parameter must be provided.");
            }
        }


    }

}
