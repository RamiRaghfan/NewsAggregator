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
    public async Task<IActionResult> GetNews([FromQuery] string country, [FromQuery] string category)
    {
        try
        {
            var news = await _newsService.GetNewsAsync(country, category);
            return Ok(news);
        }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while processing the request");

                return StatusCode(500, "An error occurred while processing your request");
            }
        }

}
 
}
