import { load } from "cheerio";

export async function ScrapeDefinition(s?: string) {
  const url = `/api/dictionary/${s}`;
  const data: any = [];
  try {
    const response = await fetch(url, { method: "GET", cache: "no-cache" });
    const html = await response.text();

    const $ = load(html);

    const articles = $("ol");
    articles.each((_, element) => {
      if (Object.keys(data).length >= 10) return;
      const title = $(element).find("li").text().trim();

      data.push({
        title: title,
      });
    });

    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
