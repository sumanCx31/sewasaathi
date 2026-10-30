import os
from dotenv import load_dotenv
from tavily import TavilyClient

load_dotenv()

api_key = os.getenv("TAVILY_API_KEY")

client = (
    TavilyClient(api_key=api_key)
    if api_key
    else None
)

SERVICE_DOMAINS = {
    "passport": ["nepalpassport.gov.np"],
    "national_id": ["donidcr.gov.np"],
    "driving_license": ["dotm.gov.np"],
    "citizenship": ["moha.gov.np"],
    "birth_registration": ["donidcr.gov.np"],
    "local_services": ["gov.np"],
}


def search_live(question: str, service: str = "general"):
    if client is None:
        raise RuntimeError("TAVILY_API_KEY is not configured")

    domains = SERVICE_DOMAINS.get(service)

    kwargs = {
        "query": f"{question} Nepal official government requirements",
        "search_depth": "basic",
        "max_results": 5,
        "include_answer": False,
    }

    if domains:
        kwargs["include_domains"] = domains

    response = client.search(**kwargs)

    return [
        {
            "title": item.get("title", "Government webpage"),
            "url": item.get("url", ""),
            "content": item.get("content", ""),
        }
        for item in response.get("results", [])
        if item.get("url") and item.get("content")
    ]