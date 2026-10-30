import os
from dotenv import load_dotenv
from tavily import TavilyClient

load_dotenv()

api_key = os.getenv("TAVILY_API_KEY")

if not api_key:
    raise RuntimeError("TAVILY_API_KEY missing from .env")

client = TavilyClient(api_key=api_key)

response = client.search(
    query="Nepal passport renewal required documents",
    include_domains=["nepalpassport.gov.np"],
    search_depth="basic",
    max_results=3,
)

for result in response.get("results", []):
    print("\nTitle:", result.get("title"))
    print("URL:", result.get("url"))
    print("Content:", result.get("content", "")[:500])