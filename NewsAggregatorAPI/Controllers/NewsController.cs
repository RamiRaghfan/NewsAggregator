using Microsoft.AspNetCore.Mvc;
using NewsAggregatorAPI.Services; 


namespace NewsAggregatorAPI.Controllers
{
   [ApiController]
[Route("[controller]")]
public class NewsController : ControllerBase
{
    private readonly NewsService _newsService;

    public NewsController(NewsService newsService)
    {
        _newsService = newsService;
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
            // Handle or log the exception
            return StatusCode(500, "An error occurred while processing your request");
        }
    }

}

}
